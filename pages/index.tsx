import * as React from "react";
import Img from "react-optimized-image";
import Layout from "../lib/layout/index";
import People from "../data/images/people.jpg";

export default class Home extends React.Component {
    render() {
        return <Layout>

            <figure className="uk-width-1-1">
                <Img src={People} sizes={[750, 900, 1200, 1400, 1600]} alt="Jacobs Alumni Group Picture from Homecoming 2019" />
            </figure>

            <div className="uk-clearfix">
                <p className="uk-text-lead" style={{textAlign: "center"}}>
                    The Jacobs Alumni Association connects and represents the interests of its alumni and provides benefits and opportunities for them and Jacobs University to thrive.
                </p>
            </div>
        </Layout>
    }
}