import * as React from "react";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import Head from "next/head";
import styles from "./index.module.css";

interface LayoutProps {
    noCopy?: boolean;
    title?: string;
}

export default class Layout extends React.Component<LayoutProps> {
    private readonly onContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };
    render() {
        const { children, title, noCopy } = this.props;
        return <>
            <Head>
                <title>{ title ? `${title} - ` : ''}{process.env.siteTitle}</title>
            </Head>
            
            <Header />

            <div className={`uk-container main-container ${noCopy ? styles.noSelect : ""}`} onContextMenu={noCopy ? this.onContextMenu : undefined}>
                {/*% include cookie.html %*/}

                <article className="uk-article">
                    { title && <h1 className="uk-article-title">{ title }</h1>}
                    { children }
                </article>
            </div>

            <Footer />
        </>;
    }
}