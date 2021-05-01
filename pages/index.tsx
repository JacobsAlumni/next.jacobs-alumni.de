import * as React from "react";
import Img from "react-optimized-image";
import Layout from "../lib/layout/index";
import People from "../data/images/people.jpg";

export default class Home extends React.Component {
    render() {
        return <Layout>
            <div className="uk-clearfix uk-position-center">
                <h2>The Alumni Portal is temporarily unavailable.</h2>
                <p className="uk-text-lead">
                    We are working hard on improving services for you.
                    Please check again in a few minutes.
                </p>
            </div>
        </Layout>
    }
}