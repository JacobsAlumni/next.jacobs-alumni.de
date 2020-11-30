import * as React from "react";
import Layout from "../lib/layout/index";
/* import styles from "./donate.module.css"; */
import Paypal from "../data/images/paypal.png";

export default class Home extends React.Component {
    render() {
        return <Layout title="Donate">
            <p>
                The Jacobs University Bremen Alumni Association e.V. is a non-profit organisation that works on membership fees and donations. 
                The membership costs go towards the administrative costs of the association.
            </p>
            <p>
                Donations are multipurpose: they go towards the annual scholarship handed out at the Homecoming Gala Dinner and to cover running costs of the association. 
                By granting an annual scholarship, the JAA does not only help create the next generation of Jacobs students, it also establishes its presence as an influential shareholder of the university. 
                This enables the Association to have an impact on the future path that Jacobs University Bremen will take.
            </p>
            <p>
                As the Alumni Association is a non-profit, all donations and membership fees can be deducted from (German and some other) taxes - if you require a receipt simply <a target="_blank" rel="noreferrer noopener" href="mailto:support@jacobs-alumni.de">contact us</a>.
            </p>
                <p>Donations to the Association can be made in several different ways.
                You can pick the cause you would like to donate to and that’s exactly where your donation will go!
                We are also looking into other causes that you can support as well as new ways for you to make a difference.
                If you have any questions or ideas do not hesitate to reach out via email to <a target="_blank" rel="noreferrer noopener" href="mailto:fundraising@jacobs-alumni.de">fundraising@jacobs-alumni.de</a>.
            </p>
            <h3>Donate via Paypal</h3>
            <p>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="3BMMTLGA99298" />
                    <input type="image" src={Paypal as unknown as string} width="200" height="60" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                </form>
            </p>
            {/*
                <!--
                ### Donate via Spendow

                <div class="${styles.spendowEmbed}"><iframe src="https://www.spendow.com/JacobsAlumni/shop?embed=1" frameborder="0"></iframe></div>
                -->
            */}
            <h3>Donate to the Annual Alumni Scholarship</h3>
            <p>
                Every year, a candidate based on financial need, merit, social engagement and their full profile is granted an Alumni scholarship amounting to currently 9,000 EUR. 
                
                Take a look at the <a target="_blank" rel="noreferrer noopener" href="https://www.jacobs-university.de/news/alumni-scholarship-kazakhstan-bremen">2018 Scholarship Recipient</a>.
            </p>
            <p>
                If you reside in the United States, please donate to the <a target="_blank" rel="noreferrer noopener" href="http://www.jacobs-university-foundation.org/ronny-wells-scholarship.html">JUFA Alumni Fund</a> instead.
            </p>
            <h3>Donate while you shop on Amazon!</h3>
            <ul>
                <li>
                    Simply go to <a target="_blank" rel="noreferrer noopener" href="https://smile.amazon.de">https://smile.amazon.de</a>
                </li>
                <li>
                    Pick <code>Jacobs University Bremen Alumni Association e.V.</code> as the organization that you would like to support.
                </li>
                <li>
                    Now just continue shopping!</li>
                <li>
                    If you shop, in the product description under the price, it should say qualifies for Amazon Smile.</li>
                <li>
                    Simply buy what you need and Amazon donates 0.5% or sometimes a slightly different percentage of what you spend to the Association.
                    No extra fees are incurred on your purchase!
                </li>
            </ul>
            <h3>Donate while booking your trips or shopping! Wecanhelp.de</h3>
            <ul>
                <li>
                    Go to the website: <a target="_blank" rel="noreferrer noopener" href="https://wecanhelp.de">wecanhelp.de</a> (Yes, it is all in German but you can easily follow the instructions).
                </li>
                <li>
                    Click on <code>Einkaufen</code> and the list of shops will appear.
                </li>
                <li>
                    You have to switch off your Adblocker or pause it for this purchase.
                </li>
                <li>
                    Click on the online store you want to purchase from. Popular choices include Booking.com, Deutsche Bahn and even IKEA. 
                    You can also use the search button and look for your favorite products or shops out of the 1726 partner shops!
                </li>
                <li>
                    Click on <code>Zum Shop</code> and you will be forwarded to the store of your choice.
                    And now just book, order, or SHOP TILL YOU DROP!
                    The prices will remain the same whether you book directly from the store or go through the wecanhelp.de link.
                    A percentage of what you buy will be donated by the shops to our Alumni Scholarship Fund!
                    You will be helping a prospective student fund their Jacobs education.
                </li>
            </ul>
        </Layout>
    }
}