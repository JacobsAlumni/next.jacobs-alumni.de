import * as React from "react";
import Img from "react-optimized-image";
import Banner from "../../data/images/homecoming/2021/banner.png";
import Layout from "../../lib/layout/index";

export default class Homecoming2020 extends React.Component {
    render() {
        return <Layout title="Homecoming 2021">
            <Img src={Banner} alt="Homecoming 2021 - 18th Setember - 25th September" />
        </Layout>
    }
}