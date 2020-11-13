import * as React from "react";
import Layout from "../lib/layout";
import Markdown from "../lib/markdown";

const GetInvolvedText = `The easiest way to get involved is to __vote__ in elections and at the General Assembly to shape the future of the Association!
Check our [Charter](/documents/charter/english/2019/) to learn more. 
If you would like to donate your time and expertise, you can find several more ways to participate below. 

### Mentoring Program

__What is it?__

The Mentoring Program connects current Jacobs students (mentees) and Jacobs Alumni (mentors). In a semi-structured program spanning ~11 months, alumni contribute their experience and time to students and provide advice in different areas of life after Jacobs. 

__How do I get involved?__

Check the Mentor box in your Alumni Portal account or e-mail the Jacobs Career Services Coordinator (currently Christin Klähn) at [csc@jacobs-university.de](mailto:csc@jacobs-university.de). 

### Chapters

__What is it?__

Chapters are little Jacobs bubbles all over the world. 
Led by usually two alumni, they connect Jacobs Alumni in one city/region or with a common interest, providing a platform to ask questions, meet up, reconnect, and help each other.
There are three types of alumni chapters: local chapters, club chapters, subject chapters.
At the moment, most chapters are organized as Facebook or WeChat groups. 

__How do I get involved?__

Check out the page on [Alumni Chapters](/chapters/) for more detailed information.
Most Alumni Chapters can be joined by searching on Facebook for "Jacobs Alumni Chapter ...".
If you do not find your chapter - or even would like to found your own one - get in touch with the [Assessor for Network Development](/board/) of the Alumni Board. 



### Alumni Portal Development

__What is it?__

All our technical infrastructure has been developed and is being maintained by dedicated alumni volunteers. Our current Assessor for IT, Tom Wiesing, is always grateful for feedback or other volunteers to share the work with.

__How do I get involved?__

Get in contact with the [Assessor for Information Technology](/board/) of the Alumni Board. 

### Starducks

__What is it?__

The Starducks initiative links up admitted students with our alumni all across the globe, and gives them a chance to talk to you and discover Jacobs University over coffee. 

__How do I get involved?__

<!-- TODO: We need to have a general email here -->
Contact Cristina Trifon-Calvopina at [c.calvopina@jacobs-university.de](mailto:c.calvopina@jacobs-university.de).

### Events for Alumni by Alumni

__What is it?__

With this initiative we want to tap into the great talent and experience Jacobs Alumni have to offer. Alumni share their knowledge with fellow alumni at a workshop or other event.

__How do I get involved?__

Send us your event ideas (whether you want to volunteer for it or just want to share an idea about a potential topic or alumni speaker) at [board@jacobs-alumni.de](mailto:board@jacobs-alumni.de).  

### Jacobs Career Fair

__What is it?__

The annual Jacobs Career Fair is not just a place for established companies but also for our own alumni start-ups to present themselves to Jacobs students. Share your entrepreneurial spirit with the younger generations or make connections with other exhibitors. Do you have a startup, and are interested in recruiting Jacobs talent, while networking with a variety of other companies? Join us at the Fair! Alumni startups get the Silver Package (worth 850 EUR) for free. Plus all companies that find out about the Fair via our alumni network get a 20% discount from any package.  Alumni Association members receive a free Silver package (worth 850€) to take part in the fair. 

__How do I get involved?__

Contact the Alumni Relations Office, currently filled by Daisy Juknischke-Heinsen, at [alumni@jacobs-university.de](mailto:alumni@jacobs-university.de) to participate as exhibitor or alumni guest.

### Success Stories

Want to share a __success story__? Tell us at [alumni@jacobs-university.de](mailto:alumni@jacobs-university.de), get featured in the newsletter and inspire fellow alumni! `;

export default class GetInvolved extends React.Component {
    render() {
        return <Layout title="Get Involved">
        <Markdown allowDangerousHtml>{GetInvolvedText}</Markdown>
    </Layout>
    }
}