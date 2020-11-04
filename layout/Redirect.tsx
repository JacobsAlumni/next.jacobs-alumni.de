import { NextRouter, withRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";

interface RedirectProps {
    to: string;
    router: NextRouter;
}

class Redirect extends React.Component<RedirectProps> {
    componentDidMount() {
        const { router, to } = this.props;
        router.replace(to);
    }
    render() {
        const { to } = this.props;
        return (<>
            <Head>
                <title>Redirecting &hellip;</title>
                {/*<meta httpEquiv="refresh" content={`0; url=${to}`} />*/}
                <meta name="robots" content="noindex" />
            </Head>
            <Link href={to}><a>Click here to be redirected</a></Link>
        </>);
    }
}

export default withRouter(Redirect);