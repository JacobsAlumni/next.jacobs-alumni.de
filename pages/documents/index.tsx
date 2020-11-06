import { GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";
import Layout from "../../lib/layout";
import styles from "./index.module.css";

interface Document {
    title: string,
    description: string,
    lastInGroup?: boolean,
    versions: Array<DocumentVersion>
}

interface DocumentVersion {
    href: string,
    external?: boolean,
    title: string,
}


export default class Documents extends React.Component<{documents: Array<Document>}> {
    render() {
        const { documents } = this.props;
        return <Layout title="Documents">
            <table className={`uk-table uk-table-striped ${styles.table}`}>
                <thead>
                    <tr>
                        <th className="uk-width-1-5"></th>
                        <th className="uk-width-2-5">Description</th>
                        <th className="uk-width-2-5">Links</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map(d => <DocumentRow {...d} key={d.title} />)}
                </tbody>
            </table>
        </Layout>
    }
}

class DocumentRow extends React.Component<Document> {
    render() {
        const { title, description, versions, lastInGroup} = this.props;
        return <tr className={lastInGroup ? styles.lastInGroup : undefined}>
            <td>{title}</td>
            <td>{description}</td>
            <td>{versions.map(v => <DocumentLink {...v} key={v.href} />)}</td>
        </tr>
    }
}

class DocumentLink extends React.Component<DocumentVersion> {
    render() {
        const {href, external, title} = this.props;
        return <>
            { external ? <a href={href} target="_blank">{title}</a> : <Link href={href}><a>{title}</a></Link>}
            {" "}
        </>;
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const documents = (await import("../../data/content/documents.json")).default;
    return {
        props: { documents },
    }
}