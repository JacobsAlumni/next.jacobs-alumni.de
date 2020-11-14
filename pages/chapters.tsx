import Link from "next/link";
import * as React from "react";
import Img from "react-optimized-image";
import Layout from "../lib/layout/index";

import Signs from "../data/images/signs.png";
import { GetStaticProps } from "next";
import { YouTubeEmbed } from "../lib/youtube";

type ChapterData = Record<string, Array<ChapterInfo>>;

export default class Chapters extends React.Component<{chapters: ChapterData}> {
    render() {
        const { chapters } = this.props;
        return <Layout title="Chapters">
            <div className="uk-width-xlarge">
                <YouTubeEmbed id="yDAXfMEBrnI" title="Jacobs Alumni Local Chapters" />
            </div>
            <p>
                <Img src={Signs} sizes={[250]} width={250} height={375} className="uk-align-right" />
                Alumni chapters are groups of alumni who share a common ground and come together to foster the Jacobs network.
                As such, chapters form the hubs of the alumni network where alumni not only stay in touch, but also forge new connections.
                They are about keeping the spirit of our University alive by supporting each other a life long wherever we are on the globe.
                In this manner, they also spread the name of our University all over the world.
                The common goals of all alumni chapters are the following:
            </p>
                
            <ul>
                <li>
                    Build and reinforce a network among alumni based on opportunities for growth, exchange and support on a personal, professional and social level
                </li>
                <li>
                    Help in promoting the unique character of the university and ensure a continuous commitment of alumni to the university and its long-term advancement, through support for current students and other activities.
                </li>
            </ul>

            <p>
                Every Alumni Chapter has a Chapter Leader who serves as a contact point for both members and the board of the Alumni Association.
                The specific common grounds Alumni Chapters are based on, can in principle be very diverse.
                However, there are two basic types of chapters:
            </p>
                
            <h3>Local Chapters</h3>
                
            <p>
                Local chapters are groups of alumni living in a certain geographical area, who come together and live the Jacobs network locally.
                They are the physical meeting point away from Jacobs.
                Local chapters act as a first point of contact not only for new alumni in a particular area, but also for current students located in the area temporarily, e.g. for their internships.
            </p>
                
            <p>
                Currently there are the following local chapters:
            </p>

            <div uk-grid="">
                <div className="uk-width-1-2@s uk-width-1-3@m">
                    <ChapterList title="Africa" chapters={chapters["Africa"]} />
                    <br /><br />
                    <ChapterList title="America" chapters={chapters["America"]} />
                </div>

                <div className="uk-width-1-2@s uk-width-1-3@m">
                    <ChapterList title="Asia" chapters={chapters["Asia"]} />
                    <br /><br />
                    <ChapterList title="Australia" chapters={chapters["Australia"]} />
                </div>

                <div className="uk-width-1-2@s uk-width-1-3@m">
                    <ChapterList title="Europe" chapters={chapters["Europe"]} />
                </div>
            </div>

            <h3>Thematic Chapters</h3>

            <p>
                Thematics chapters are digital platforms on based on common majors, clubs, causes or careers.
                The members of a thematic chapter share a common interest in one topic.
                The focus of those chapters is not on physically meeting but on discussing the common topic and sharing content on it.
                The Chapter Leader also functions as a moderator here.
            </p>

            <p>Currently, there are the following subject chapters:</p>

            <div uk-grid="">
                <div className="uk-width-1-2@s uk-width-1-3@m">
                    <ChapterList title="Thematic Chapters" chapters={chapters["Thematic Chapters"]} />
                </div>
                </div>

                <h3>How to join an Alumni Chapter?</h3>

                <p>
                    Simply click on the respective chapter above to be directed to either a Facebook group or an email address.
                    Most Alumni Chapters can be joined by searching on Facebook for "Jacobs Alumni Chapter ...". 
                    If you do not find your chapter - or even would like to found your own one - get in touch with the <Link href="/board/"><a>Assessor for Network Development</a></Link> of the Alumni Board.
                    We are working on streamlining the processes related to Alumni Chapters to make it easier for you to find and join them.
                </p>
        </Layout>
    }
}

interface ChapterListProps {
    title: string;
    chapters: Array<ChapterInfo>
}

interface ChapterInfo {
    title: string;
    url: string;
}

class ChapterList extends React.Component<ChapterListProps> {
    render() {
        const { title, chapters} = this.props;
        return <div className="uk-card uk-card-primary uk-card-body">
            <h3 className="uk-card-title">{title}</h3>
            <ul className="uk-list uk-list-striped">
                {chapters.map(({title, url}) => <li key={title}><a href={url} target="_blank" rel="noreferrer noopener">{title}</a></li>)}
            </ul>
        </div>;
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const chapters: ChapterData =  (await import("../data/content/chapters.json")).default;
    return {
        props: { chapters },
    }
}