import { GetStaticProps } from "next";
import * as React from "react";
import Img from "react-optimized-image";
import { BoardComposition, FormerBoardMember, getAdvisors, getComposition, getFormerMembers, MemberToPerson, Person } from "../data/board";
import { englishNames } from "../data/board/roles";
import Layout from "../lib/layout/index";
import Markdown from "../lib/markdown";
import styles from "./board.module.css";

export default class Board extends React.Component<{board: BoardComposition, advisors: Array<Person>, formers : Array<FormerBoardMember>}>{
    render() {
        const { board, advisors, formers } = this.props;
        const formerMembers = formers.sort(({name: aname}, {name: bname}) => {
            if (aname < bname) return -1;
            if (aname > bname) return 1;
            return 0;
        });

        return <Layout title="Board">
            <p className="uk-text-lead">
                The board is composed of {board.length} members and {advisors.length} advisors.
                The board acts as a bridge between the university, alumni and our community to facilitate networking and influence in the decision making process at Jacobs.
            </p>

            <div className="uk-grid uk-grid-small uk-child-width-1-1@s uk-child-width-1-3@m " uk-grid="">
                {board.map(a => <PersonCard person={MemberToPerson(a)} key={a.name} />)}
            </div>

            <h2>Associate Advisors to the Board</h2>

            <div className="uk-grid uk-grid-small uk-child-width-1-1@s uk-child-width-1-3@m " uk-grid="">
                {advisors.map(a => <PersonCard person={a} key={a.name} />)}
            </div>
            
            <h2>Former Board Members</h2>

            <div className="uk-grid uk-grid-small uk-child-width-1-1@s uk-child-width-1-3@m" uk-grid="">
                {formerMembers.map((member, index) => <FormerText person={member} index={index} key={member.name} />)}
            </div>
        </Layout>
    }
}

class PersonCard extends React.Component<{person: Person}> {
    render() {
        const { person } = this.props;
        const { name, role, description, meta } = person;
        const { email, facebook, twitter, instagram, linkedin, github } = meta || {};

        const base = PersonCard.getBaseName(person);

        return <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top square-box">
                    <Img className={`uk-width-1-1 square-content ${styles.personImage}`} alt={name} src={require(`../data/images/people/${base}.jpg`)} />
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title"> { name }</h3>
                    <p className="uk-article-meta">{ role }</p>
                    <div className="alumni-socials alumni-socials-card">
                        { email && <a href={`mailto:${email}`} className="uk-icon-button bg-mediumgrey" uk-icon="mail"></a>}
                        {" "}
                        { facebook && <a href={facebook} className="uk-icon-button bg-facebook" target="_blank" rel="noreferrer noopener" uk-icon="facebook"></a>}
                        {" "}
                        { twitter && <a href={twitter} className="uk-icon-button bg-twitter" target="_blank" rel="noreferrer noopener" uk-icon="twitter"></a>}
                        {" "}
                        { instagram && <a href={instagram} className="uk-icon-button bg-instagram" target="_blank" rel="noreferrer noopener" uk-icon="instagram"></a>}
                        {" "}
                        { linkedin && <a href={linkedin} className="uk-icon-button bg-linkedin" target="_blank" rel="noreferrer noopener" uk-icon="linkedin"></a>}
                        {" "}
                        { github && <a href={github} className="uk-icon-button bg-github" target="_blank" rel="noreferrer noopener" uk-icon="github"></a>}
                        {" "}
                    </div>
                    <div className={styles.personDescription}>
                        <Markdown children={description} />
                    </div>
                </div>
            </div>
        </div>;
    }
    
    /* gets the base name of the image to use for this person */
    static getBaseName({name}: Person): string {
        const parts = name.split(/\s/).filter(p => !p.endsWith("."));
        return parts.map(p => p.replace(/[^\x20-\x7E]+/g, '_')).join('_');
    }
}

class FormerText extends React.Component<{person: FormerBoardMember, index: number}> {
    render() {
        const { person: {name, roles}, index } = this.props;
        const cardName = (index % 2 === 0) ? 'primary' : 'secondary';

        return <div>
            <div className={`uk-card uk-card-${cardName}`}>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{name}</h3>
                    <p>
                        <ul className="uk-list uk-list-striped">
                            {roles.map(({role, from, to}) => <li key={`${role}-${from}-${to}`}>
                                {englishNames[role]}
                                {" "}
                                {from === to ? `${from}` : `${from} - ${to}`}
                            </li>)}
                            {roles.length === 1 && <li>&nbsp;</li>}
                        </ul>
                    </p>
                </div>
            </div>
        </div>;
    }
}


export const getStaticProps: GetStaticProps = async (context) => {
    const board: BoardComposition = getComposition();
    const advisors: Array<Person> = getAdvisors();
    const formers: Array<FormerBoardMember> = getFormerMembers();

    return {
        props: { board, advisors, formers },
    }
}