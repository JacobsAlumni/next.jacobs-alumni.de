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
                    <script async src="/legal.min.js" data-ackee-server="https://ackee.jacobs-alumni.de" 
                    data-site-id="1169194f-672e-4057-a17f-7ad566fc966a"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}