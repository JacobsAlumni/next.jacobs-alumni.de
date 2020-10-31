import * as React from "react";
import Layout from "../layout/index";
import Image from 'next/image';

export default class Home extends React.Component {
    render() {
        return <Layout>

            <figure className="uk-width-1-1">
                <Image src="/media/people.jpg" alt="Jacobs Alumni Group Picture from Homecoming 2019" width={4032} height={3024}/>
            </figure>

            <div className="uk-clearfix">
                <p className="uk-text-lead" style={{textAlign: "center"}}>
                    The Jacobs Alumni Association connects and represents the interests of its alumni and provides benefits and opportunities for them and Jacobs University to thrive.
                </p>
            </div>
        </Layout>
    }
}