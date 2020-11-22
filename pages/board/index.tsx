import { GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";
import Img from "react-optimized-image";
import { formatTimePoint, FormerBoardMember, getAdvisorsAt, getCompositionAt, getFormerMembersAt, BoardMemberToPerson, Person, BoardMember, Advisor, TimePoint, getTimePoints, getImageBaseName } from "../../data/board";
import { englishNames } from "../../data/board/roles";
import Layout from "../../lib/layout/index";
import Markdown from "../../lib/markdown";
import styles from "./board.module.css";

interface BoardProps {
    instance: TimePoint,
    up_to_date_instance: TimePoint,
    next_instance: TimePoint,
    prev_instance: TimePoint,

    board: Array<BoardMember>,
    advisors: Array<Advisor>,
    formers: Array<FormerBoardMember>,
}


export default class Board extends React.Component<BoardProps>{
    render() {
        const { board, advisors, formers, up_to_date_instance, prev_instance, instance, next_instance } = this.props;
        const formerMembers = formers.sort(({name: aname}, {name: bname}) => {
            if (aname < bname) return -1;
            if (aname > bname) return 1;
            return 0;
        });

        const is_current = up_to_date_instance === instance;
        const title = is_current ? "Board" : `Board from ${formatTimePoint(instance)} to ${formatTimePoint(next_instance)}`;
        const verbs = is_current ? "is" : `from ${formatTimePoint(instance)} to ${formatTimePoint(next_instance)} was`;

        return <Layout title={title}>
            <div className="uk-button-group">
                {next_instance && <Link href={next_instance === up_to_date_instance ? `/board/` : `/board/${next_instance}/`}><a className="uk-button uk-button-default" title="Next Board Composition">&laquo; {formatTimePoint(next_instance)}</a></Link>}
                <button className="uk-button uk-button-default" disabled>{formatTimePoint(instance)}</button>
                {prev_instance && <Link href={`/board/${prev_instance}/`}><a className="uk-button uk-button-default" title="Previous Board Composition">{formatTimePoint(prev_instance)} &raquo;</a></Link>}
            </div>
            
            <p className="uk-text-lead">
                The board {verbs} composed of {board.length} members and {advisors.length} advisors.
                The board acts as a bridge between the university, alumni and our community to facilitate networking and influence in the decision making process at Jacobs.
            </p>

            <div className="uk-grid uk-grid-small uk-child-width-1-1@s uk-child-width-1-3@m " uk-grid="">
                {board.map(a => <PersonCard person={BoardMemberToPerson(a)} key={a.name} />)}
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
        const { name, role, description, socials: meta } = person;
        const { email, facebook, twitter, instagram, linkedin, github } = meta || {};

        const base = getImageBaseName(person);

        return <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top square-box">
                    {base && <Img alt={`Photo of ${name}`} className={`uk-width-1-1 square-content ${styles.personImage}`} src={require(`../../data/images/people/${base}.jpg`)} />}
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
                                {from === to ? `${formatTimePoint(from)}` : `${formatTimePoint(from)} - ${formatTimePoint(to)}`}
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

    const points = await getTimePoints();
    const [instance, prev_instance] = points;
    const up_to_date_instance = points[0];
    
    const board = await getCompositionAt(instance);
    const advisors = await getAdvisorsAt(instance);
    const formers = await getFormerMembersAt(instance);

    return {
        props: { board, advisors, formers, instance, prev_instance, up_to_date_instance },
    }
}