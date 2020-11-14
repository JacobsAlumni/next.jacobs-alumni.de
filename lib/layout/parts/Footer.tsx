import Link from "next/link";
import * as React from "react";

const year = new Date().getFullYear().toString();

class FooterLegal extends React.Component {
    render() {
        return (<>
            <p>
                The <Link href="/"><a>Jacobs Alumni Association</a></Link> is the growing network of former <a href="https://jacobs-university.de/" rel="noreferrer noopener">Jacobs University</a> students and friends.
            </p>
            <p>
                Copyright © 2017-{year} Jacobs University Alumni Association. All Rights Reserved. <br />
                <Link href="/privacy/"><a>Datenschutzerklärung / Privacy Policy</a></Link>
                {" "}
                <Link href="/imprint/"><a>Impressum / Imprint</a></Link>
            </p>
        </>);
    }
}

export default class Footer extends React.Component {
    render() {
        return (<footer className="footer uk-background-secondary uk-light uk-padding">
        <div className="uk-grid uk-margin-small-bottom uk-child-width-1-2@m uk-child-1-1@s" uk-grid="true">
           <div className="uk-visible@m">
               <FooterLegal />
           </div>
           <div className="alumni-socials">
                 <a className="uk-icon-button bg-facebook" target="_blank" href="https://www.facebook.com/jacobsalumni" uk-icon="facebook"></a>
                 {" "}
                 <a className="uk-icon-button bg-twitter" target="_blank" href="https://twitter.com/JacobsAlumni" uk-icon="twitter"></a>
                 {" "}
                 <a className="uk-icon-button bg-instagram" target="_blank" href="https://www.instagram.com/jacobsalumni/" uk-icon="instagram"></a>
                 {" "}
                 <a className="uk-icon-button bg-linkedin" target="_blank" href="https://www.linkedin.com/groups/77362/profile" uk-icon="linkedin"></a>
           </div>
           <div className="uk-hidden@m">
               <FooterLegal />
           </div>
        </div>
     </footer>);
    }
}