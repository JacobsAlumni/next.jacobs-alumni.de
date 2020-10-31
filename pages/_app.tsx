import {default as NextApp} from "next/app";
import Head from "next/head";

import "jacobs-alumni-style/src/style.scss";
import globalInit from "jacobs-alumni-style/src/style.mjs";

export default class App extends NextApp {
    componentDidMount() {
        globalInit();
    }
    render() {
        const { Component, pageProps } = this.props;
        return (<>
            <Head>
                <meta name="viewport" content="width=device-width" />
                <link rel="icon" type="image/png" href="/public/favicon.png" />
            </Head>
            <Component {...pageProps} />
        </>)
    }
}

