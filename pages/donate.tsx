import * as React from "react";
import Markdown from "../lib/markdown";
import Layout from "../lib/layout/index";

const DonateText = `The Jacobs University Bremen Alumni Association e.V. is a non-profit organisation that works on membership fees and donations. 
The membership costs go towards the administrative costs of the association. 

Donations are multipurpose: they go towards the annual scholarship handed out at the Homecoming Gala Dinner and to cover running costs of the association. 
By granting an annual scholarship, the JAA does not only help create the next generation of Jacobs students, it also establishes its presence as an influential shareholder of the university. 
This enables the Association to have an impact on the future path that Jacobs University Bremen will take.

As the Alumni Association is a non-profit, all donations and membership fees can be deducted from (German and some other) taxes - if you require a receipt simply [contact us](mailto:support@jacobs-alumni.de).

Donations to the Association can be made in several different ways.
You can pick the cause you would like to donate to and that’s exactly where your donation will go!
We are also looking into other causes that you can support as well as new ways for you to make a difference.
If you have any questions or ideas do not hesitate to reach out via email to [fundraising@jacobs-alumni.de](mailto:fundraising@jacobs-alumni.de). 

### Donate via Spendow

<div class="spendow-i-container2"><iframe src="https://www.spendow.com/JacobsAlumni/shop?embed=1" frameborder="0"></iframe></div><script type="text/javascript" src="https://www.spendow.com/spendow-embed.js"></script>

### Donate to the Annual Alumni Scholarship

Every year, a candidate based on financial need, merit, social engagement and their full profile is granted an Alumni scholarship amounting to currently 9,000 EUR. 
Take a look at the [2018 Scholarship Recipient](https://www.jacobs-university.de/news/alumni-scholarship-kazakhstan-bremen). 

If you reside in the United States, please donate to the [JUFA Alumni Fund](http://www.jacobs-university-foundation.org/ronny-wells-scholarship.html) instead. 

### Donate while you shop on Amazon!

- Simply go to [https://smile.amazon.de](https://smile.amazon.de)
- Pick \`Jacobs University Bremen Alumni Association e.V.\` as the organization that you would like to support.
- Now just continue shopping!
- If you shop, in the product description under the price, it should say qualifies for Amazon
Smile.
- Simply buy what you need and Amazon donates 0.5% or sometimes a slightly different percentage of what you spend to the Association.
No extra fees are incurred on your purchase!

### Donate while booking your trips or shopping! Wecanhelp.de

- Go to the website: [wecanhelp.de](https://wecanhelp.de) (Yes, it is all in German but you can easily follow the instructions).
- Click on \`Einkaufen\` and the list of shops will appear.
- You have to switch off your Adblocker or pause it for this purchase.
- Click on the online store you want to purchase from. Popular choices include Booking.com,
Deutsche Bahn and even IKEA. You can also use the search button and look for your favorite
products or shops out of the 1,726 partner shops!
- Click on \`Zum Shop\` and you will be forwarded to the store of your choice.
And now just book, order, or SHOP TILL YOU DROP!
The prices will remain the same whether you book directly from the store or go through the
wecanhelp.de link.
A percentage of what you buy will be donated by the shops to our Alumni Scholarship Fund!
You will be helping a prospective student fund their Jacobs education.`;

export default class Home extends React.Component {
    render() {
        return <Layout title="Donate">
            <Markdown allowDangerousHtml>{DonateText}</Markdown>
        </Layout>
    }
}