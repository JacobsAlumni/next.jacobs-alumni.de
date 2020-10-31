import * as React from "react";
import { default as NextDocument, Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/*<meta charSet="utf-8" />*/}
                    <meta name="description" content={process.env.siteDescription}/>
                    <meta name="keywords" content={process.env.siteKeywords} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}