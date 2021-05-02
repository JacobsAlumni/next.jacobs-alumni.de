import * as React from "react";
import Layout from "../../lib/layout/index";

import {BoardMember, getCompositionAt, getMemberWithRole, getTimePoints} from "../../data/board";
import { getRoles, isRegular, isAssessor, englishNames, germanNames } from "../../data/board/roles";
import { GetStaticProps } from "next";


export default class Imprint extends React.Component<{board: Array<BoardMember>}>{
    render() {
        const { board } = this.props;

        const regulars = getRoles().filter(isRegular).map(r => getMemberWithRole(board, r)).filter(x => typeof x !== "undefined").map(x => x!);
        const assessors = getRoles().filter(isAssessor).map(r => getMemberWithRole(board, r)).filter(x => typeof x !== "undefined").map(x => x!);

        return <Layout title="Imprint / Impressum">
            <p>
                Jacobs University Bremen Alumni Association e.V.<br />
                Campus Ring 1<br />
                28759 Bremen<br />
                Germany / Deutschland
            </p>

            <p>
                <a href="mailto:board@jacobs-alumni.de">board@jacobs-alumni.de</a><br />
                <a href="https://jacobs-alumni.de">https://jacobs-alumni.de</a>
            </p>

            <p>
                Jacobs University Bremen Alumni Association e.V. is a non-profit association. <br />
                Jacobs University Bremen Alumni Association e.V. ist ein gemeinnütizger Verein.
            </p>

            <p>
                {regulars.map(({role, name}) => <React.Fragment key={role}>{englishNames[role]} / {germanNames[role]}: {name}<br /></React.Fragment>)}
                Assessors / Beisitzer: {assessors.map(m => m.name).sort().join(", ")}
            </p>

            <p>
                Handelsregister <br />
                Amtsgericht Bremen, HRB 18117 <br />
                Steuer-Nr. 60 145 14056
            </p>

            <h3>Disclaimer</h3>

            <p>
                Despite careful checking of our content we assume no liability for the content of external links. 
                The content of the linked pages are the sole responsibility of their operators.
            </p>

            <h3>Haftungshinweis</h3>

            <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
                Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. 
            </p>    

            <h3>Copyright Information</h3>

            <p>
                The content of this website is protected by copyright.
                All images and photos on the websites of Jacobs University Bremen Alumni Association e.V. may not be used, reproduced or distributed without permission.
            </p>

            <h3>Informationen zum Copyright</h3>

            <p>
                Der Inhalt dieser Webseiten ist urheberrechtlich geschützt.
                Alle Abbildungen und Fotos auf den Webseiten der Jacobs University Bremen Alumni Association e.V. dürfen nicht ohne Genehmigung übernommen, vervielfältigt und verbreitet werden.
            </p>


            <h3>Software unter Lizenz Dritter</h3>

            <p>
                legal.min.js (<a href="https://github.com/tkw1536/inform.everyone.wtf">https://github.com/tkw1536/inform.everyone.wtf</a>) wird unter der folgenden Lizenz verwendet:
                <pre>
Copyright 2020 Tom Wiesing<br></br>
<br></br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br></br>
<br></br>
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br></br>
<br></br>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.<br></br>
                </pre>

            </p>

        </Layout>
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const points = await getTimePoints();
    const board = await getCompositionAt(points[0]);
    return {
        props: { board },
    }
}