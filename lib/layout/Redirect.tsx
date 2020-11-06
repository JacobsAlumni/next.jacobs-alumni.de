import { NextRouter, withRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";

export default function Redirect(to: string): React.ComponentType<{}> {
    return withRouter(class RedirectPage extends React.Component<{router: NextRouter}> {
        componentDidMount() {
            const { router } = this.props;
            router.replace(to);
        }
        render() {
            return (<>
                <Head>
                    <title>Redirecting &hellip;</title>
                    {/*<meta httpEquiv="refresh" content={`0; url=${to}`} />*/}
                    <meta name="robots" content="noindex" />
                </Head>
                <Link href={to}><a>Click here to be redirected</a></Link>
            </>);
        }
    });
}