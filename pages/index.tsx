import * as React from "react";
import Image from "../components/image";
import Layout from "../layout/index";

export default class Home extends React.Component {
    render() {
        return <Layout>

            <figure className="uk-width-1-1">
                <Image
                    jpeg={require('../images/people.jpg')}
                    webp={require('../images/people.jpg?webp')}
                    alt="Jacobs Alumni Group Picture from Homecoming 2019"
                />
            </figure>

            <div className="uk-clearfix">
                <p className="uk-text-lead" style={{textAlign: "center"}}>
                    The Jacobs Alumni Association connects and represents the interests of its alumni and provides benefits and opportunities for them and Jacobs University to thrive.
                </p>
            </div>
        </Layout>
    }
}