import { GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";
import Img from "react-optimized-image";
import Layout from "../../lib/layout/index";
import Markdown from "../../lib/markdown";
import HomecomingHeader1 from "../../data/images/homecoming/header1.jpg";
import HomecomingHeader2 from "../../data/images/homecoming/header2.jpg";
import HomecomingHeader3 from "../../data/images/homecoming/header3.jpg";


type HomecomingRecord = Record<string, HomecomingInfo>;

export default class Homecoming extends React.Component<{homecomings: HomecomingRecord }> {
    render() {
        const { homecomings } = this.props;
        const hcYears = Object.keys(homecomings).sort().reverse();
        return <Layout title="Homecoming">
            <figure className="uk-grid uk-grid-small uk-child-width-1-3" uk-grid="">
                <div>
                    <Img src={HomecomingHeader1} />
                </div>
                <div>
                    <Img src={HomecomingHeader2} />
                </div>
                <div>
                    <Img src={HomecomingHeader3} />
                </div>
            </figure>

            <p className="uk-text-lead">
                Every year in fall Jacobs alumni from all over the world reunite at their alma mater. For the classes that celebrate their 5th or 10th anniversary, this is a very special weekend of the year. While there are many highlights such as the Gala Dinner or the Theme Party, simply getting together and seeing old faces as well as connecting with new alumni, is what makes this event so memorable every year.
            </p>

            <p>
                The event is organized by the Class Representatives of the anniversary classes in collaboration with the Assessor for Event Management of the Alumni Association and the Alumni Office of the university.
            </p>

            <table className="uk-table uk-table-striped">
                <thead>
                    <tr>
                        <th className="uk-width-2-5"></th>
                        <th className="uk-width-1-5"></th>
                        <th className="uk-width-1-5"></th>
                        <th className="uk-width-1-5"></th>
                    </tr>
                </thead>
                <tbody>
                    {hcYears.map(year => <HomecomingRow key={year} homecoming={homecomings[year]} />)}
                </tbody>
            </table>

            <p>
                Official General Assembly Protocols can be found on the <Link href="/documents/"><a>Documents</a></Link> page. 
                Please be aware that viewing certain documents or photo galleries might require login using an alumni email address. 
            </p>
        </Layout>
    }
}

interface HomecomingInfo {
    year: number;
    link?: string;

    reunions: HomecomingReunion[];
    
    dates: string;

    gaLink?: string,
    gaRecordingLink?: string,
    pictureGalleryLink?: string,
}

interface HomecomingReunion {
    year: number;
    age: number;
}


class HomecomingRow extends React.Component<{homecoming: HomecomingInfo}>{
    render() {
        const {homecoming: {year, link, reunions, dates, gaLink, gaRecordingLink, pictureGalleryLink}} = this.props;
        return <tr>
            <td>
                {link ? <strong><Link href={link}><a>Homecoming {year}</a></Link></strong> : `Homecoming ${year}` }<br />
                {reunions.map(({year, age}) => <React.Fragment key={year}>{age}-year reunion <i>Class of {year}</i><br /></React.Fragment>)}
            </td>
            <td>
                <Markdown allowDangerousHtml>{dates}</Markdown>
            </td>
            <td>
                { gaLink && <a href={gaLink} target="_blank" rel="noreferrer noopener">General Assembly</a>}
                { gaRecordingLink && <a href={gaRecordingLink} target="_blank" rel="noreferrer noopener">General Assembly (Recording)</a>}
            </td>
            <td>
                { pictureGalleryLink && <a href={pictureGalleryLink} target="_blank" rel="noreferrer noopener">Picture Gallery</a>}
            </td>
        </tr>
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const homecomings: HomecomingRecord =  (await import("../../data/content/homecomings.json")).default;
    return {
        props: { homecomings },
    }
}