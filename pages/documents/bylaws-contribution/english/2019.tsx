import * as React from "react";
import Layout from "../../../../layout";
import Link from "next/link";
export default class English extends React.Component {
    render() {
        return <Layout title="Contribution By-Laws (valid from 21st September 2019)">
            <div className="uk-alert-success" uk-alert="">
                <a className="uk-alert-close" uk-close=""></a>
                <p>
                    This is the english version of the contribution by-laws.
                    This is only a curtesy translation, meaning it is not legally binding. <br />
                    These by-laws were last changed during the General Assembly 2019 on 12<sup>st</sup> September 2019. <br />
                    See <Link href="/documents/bylaws-contribution/german/2019/"><a>the german version</a></Link> for the legally binding copy of this document. <br />
                    See <Link href="/documents/bylaws-contribution/english/2015/"><a>the previous version</a></Link> of this document.
                </p>
            </div>

            <p><strong>§1 Contributions and admission to the association</strong></p>
            <p>(1) According to the decision made in the General Assembly of 2008, members of the association will contribute a membership fee.</p>
            <p>(2) The contribution is an obligation (‘Bringschuld‘). The process of collection of contributions is determined and communicated by the alumni board. In particular, the board should decide on payment methods available and external providers used (if any). The contribution is due annually. If the payment processor or provider charges a fee for unsuccessful payment collection to the Alumni Association, that cost will be transferred to the member.</p>
            <p>(3) The annual fees for regular members (according to § 4.1 of the Charter) are based on three categories and look like this:</p>

            <div className="uk-overflow-auto">
                <table className="uk-table uk-table-divider uk-width-auto">
                    <thead>
                        <tr>
                            <th className="uk-table-shrink">Starter</th>
                            <th className="uk-table-shrink">Contributor</th>
                            <th className="uk-table-shrink">Patron</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>No contribution</td>
                            <td>39€</td>
                            <td>249€</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>Each member must choose one of these categories, in order to complete the payment of contributions and membership. All three categories grant each member the right to vote within the association and access to the alumni database. Members can change the category of contribution (“upgrading” or “downgrading”) in prior consultation with the Board. Once a payment is made, a cancellation is no longer possible. Third parties are allowed to pay a member’s contribution.</p>
            <p>(4) After 2 years of Starter membership, regular members need to decide if they wish to upgrade to the ‘Contributor’ category or request an extension of the ‘Starter’ period for one additional year. This extension can be repeated indefinitely.</p>
            <p>(5) Associated members according to §4.2 of the charter may only choose between categories ‘Contributor’ and ‘Patron’, and must therefore pay a contribution.</p>
            <p>(6) Honorary members according to §4.2 of the charter have no obligation to pay contributions, but may choose to do so at own will.</p>
            <p>(7) The amount of the contribution for supporting members, natural persons and legal entities is set by the Board.</p>
        </Layout>
    }
}