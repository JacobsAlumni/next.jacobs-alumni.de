import * as React from "react";
import Img from "react-optimized-image";
import Scholarship1 from "../../data/images/homecoming/scholarship1.png";
import Scholarship2 from "../../data/images/homecoming/scholarship2.png";
import DonateDetails from "../../data/images/homecoming/donate_details.png";
import Donate from "../../data/images/homecoming/donate.png";
import Layout from "../../lib/layout/index";
import { YouTubeEmbed } from "../../lib/youtube";
import styles from "./2020.module.css";

import Piece1 from "../../data/images/homecoming/2020/piece1.jpg";
import Piece2 from "../../data/images/homecoming/2020/piece2.jpg";
import Piece3 from "../../data/images/homecoming/2020/piece3.jpg";
import Piece4 from "../../data/images/homecoming/2020/piece4.jpg";
import Piece5 from "../../data/images/homecoming/2020/piece5.jpg";
import Piece6 from "../../data/images/homecoming/2020/piece6.jpg";
import Piece7 from "../../data/images/homecoming/2020/piece7.jpg";

export default class Homecoming2020 extends React.Component {
    render() {
        return <Layout title="Homecoming 2020" extraClassName={styles.wrapper}>
            <div className="row">
                <div className="uk-grid">
                    <div className="uk-width-1-3@m">
                    <p>
                        The purpose of the Jacobs University Alumni Association is the advancement of education, science and research, including the support of students.
                        This mission is realized through the financial support of students, including the funding of scholarships. 
                    </p>
                    <p>
                        2020, despite the current trying circumstances, marks the first year that the Alumni Association has awarded two scholarships instead of one - and with a higher impact to the student's financial package!
                        The scholarship now directly counts to the EFC, meaning the part of a student's financial aid package that was previously not reduced!
                    </p>
                    </div>
                    <div className="uk-width-1-3@m">
                        <Img src={Scholarship1} webp />
                    </div>
                    <div className="uk-width-1-3@m">
                        <Img src={Scholarship2} webp />
                    </div>
                </div>
            </div>

            <div className="uk-grid">
                <div className="uk-width-1-3@m">
                    <YouTubeEmbed width={380} height={480} id="oavuP_XuCcA" title="Art Auction 2020 - Promo" />
                </div>
                <div className="uk-width-2-3@m">
                    <p>
                        As part of Homecoming 2020 we will be auctioning of art pieces designed by members of the Jacobs University community. 
                        You can find more information about the art pieces below.
                    </p>
                    <p>
                        The auction will take place as a blind auction where all donations are commitments. 
                        A blind auction is an auction where bidders only know their own bid. 
                        All donations being commitments means that every bidder will pay their bid - regardless if their bid is highest or not. 
                    </p>
                    <h2>How to participate?</h2>
                    <div className="uk-grid">
                        <div className="uk-width-1-2@m">
                            <p>
                            To bid on a particular piece, please send us a donation via Paypal by clicking the button below. 
                            In the Note field, please add the words <code>Art Auction 2020 [Piece Number Here]</code>.
                            Please also provide an email address so that we can contact you in case you win. 
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="3BMMTLGA99298" />
                                <input type="image" src={Donate as unknown as string} width="200" height="60" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            </form>
                            </p>
                            <p>
                                To find out the results of this auction and celebrate homecoming, join us in the main event on <b>Saturday, September 19<sup>th</sup> at 16pm</b> via <a href="https://zoom.us/j/8102549187" target="_blank" rel="noreferrer noopener">Zoom</a>.
                            </p>
                        </div>
                        <div className="uk-width-1-2@m">
                            <Img src={DonateDetails} width={557} height={347} alt="PayPal Donatation Screenshot" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <br />
                <h2>Zhanerke Arstanbay</h2>
                <div className="uk-grid">
                    <div className="uk-width-1-4@m">
                        <YouTubeEmbed width={640} height={335} id="NYuG9kfBJOc" title="Art Auction 2020 - Art Pieces from Zhanerke Arstanbay" />
                    </div>
                    <div className="uk-width-1-4@m">
                        <figure>
                            <Img src={Piece1} webp width={640} height={335} alt="Art Piece #1 by Zhanerke Arstanbay" />
                            <figcaption className="uk-overlay-panel">
                                <b>Art Piece #1</b> by <b>Zhanerke Arstanbay</b>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="uk-width-1-4@m">
                    <figure>
                        <Img src={Piece2} webp width={640} height={335} alt="Art Piece #2 by Zhanerke Arstanbay" />
                        <figcaption className="uk-overlay-panel">
                            <b>Art Piece #2</b> by <b>Zhanerke Arstanbay</b>
                        </figcaption>
                    </figure>
                    </div>
                    <div className="uk-width-1-4@m">
                    <figure>
                        <Img src={Piece3} webp width={640} height={335} alt="Art Piece #3 by Zhanerke Arstanbay" />
                        <figcaption className="uk-overlay-panel">
                            <b>Art Piece #3</b> by <b>Zhanerke Arstanbay</b>
                        </figcaption>
                    </figure>
                    </div>
                </div>
            </div>

            <div className="row">
                <br />
                <h2>Joana Petushi</h2>
                <div className="uk-grid">
                    <div className="uk-width-1-3@m">
                        <YouTubeEmbed width={453} height={320} id="NCmzDARYmgk" title="Art Auction 2020 - Art Piece from Joana Petushi" />
                    </div>
                    <div className="uk-width-1-3@m">
                        <figure>
                            <Img src={Piece4} webp width={453} height={453} alt="Art Piece #4 by Joana Petushi" />
                            <figcaption className="uk-overlay-panel">
                                <b>Art Piece #4</b> by <b>Joana Petushi</b>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            <div className="row">
                <br />
                <h2>Adriana Margarita Martinez</h2>

                <div className="uk-grid">
                    <div className="uk-width-1-3@m">
                    <figure>
                        <YouTubeEmbed width={320} height={453} id="Yaa62c7CKnQ" title="Art Auction 2020 - Art Piece from Adriana Margarita Martinez" />
                    </figure>
                    </div>
                    <div className="uk-width-1-3@m">
                        <figure>
                            <Img src={Piece5} webp width={320} height={453} alt="Art Piece #5 by Adriana Margarita Martinez" />
                            <figcaption>
                                <b>Art Piece #5</b> by <b>Adriana Margarita Martinez</b>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            <div className="row">
                <br />
                <h2>Predrag Tapavicki</h2>

                <div className="uk-grid">
                    <div className="uk-width-1-3@m">
                        <YouTubeEmbed width={320} height={453} id="PNsqrrQV_hk" title="Art Auction 2020 - Art Piece from Predrag Tapavicki" />
                    </div>
                    <div className="uk-width-1-3@m">
                    <figure>
                        <Img src={Piece6} webp width={320} height={453} alt="Art Piece #6 by Predrag Tapavicki" />
                        <figcaption>
                            <b>Art Piece #6</b> by <b>Predrag Tapavicki</b>
                        </figcaption>
                    </figure>
                    </div>
                </div>
            </div>

            <div className="row">
                <br />
                <h2>Nhi Dang Uyen Nguyen</h2>

                <div className="uk-grid">
                    <div className="uk-width-2-3@m">
                    <p>
                        My name is Nhi Dang Uyen Nguyen from Vietnam (International Business, 2022).
                    </p>
                    <p>
                        I am a hobbyist, freelancing digital artist under the name of luavatre on twitter and Instagram. It is my pleasure to contribute to the homecoming and the scholarship fund. 
                    </p>
                    <p>
                        Dark and oriental aesthetics are my biggest inspirations, but I had never combine both themes to make any artwork before. This one is my first.
                        The woman in the drawing is wearing a ngũ thân (five-part) dress—one of Vietnam's traditional dresses. Her full-red attire is commonly seen on traditional Vietnamese brides.
                    </p>
                    <p>
                        However, if she is soon-to-get married, why is she drawn in such a gloomy atmosphere? Some say she is a ghost bride coming to take revenge on the husband. Some say she is a living woman conducting a cross-world wedding with her dead groom.
                    </p>
                    <p>
                        If you ask me, I would tell you truthfully that signaling a wedding was not my original intention. I just use red because it contrasts nicely with the moss-green background. 
                    </p>
                    </div>
                    <div className="uk-width-1-3@m">
                        <figure>
                            <Img src={Piece7} webp width={320} height={453} alt="Art Piece #7 by Nhi Dang Uyen Nguyen" />
                            <figcaption>
                                <b>Art Piece #7</b> by <b>Nhi Dang Uyen Nguyen</b>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>

        </Layout>
    }
}