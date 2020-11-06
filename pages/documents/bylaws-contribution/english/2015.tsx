import * as React from "react";
import Layout from "../../../../lib/layout";
import Link from "next/link";
export default class English extends React.Component {
    render() {
        return <Layout title="Contribution By-Laws (valid 26th September 2015 - 21st September 2019)">
            <div className="uk-alert-success" uk-alert="">
                <a className="uk-alert-close" uk-close=""></a>
                <p>
                    This is the english version of the contribution by-laws valid until 21st September 2019. <br />
                    This version document has been archived and is no longer valid.  <br />
                    This is only a curtesy translation, meaning it is not legally binding. <br />
                    These by-laws were last changed during the General Assembly 2015 on 26<sup>th</sup> September 2015. <br />
                    See <Link href="/documents/bylaws-contribution/german/2015/"><a>the german version</a></Link> for the old legally binding copy of this document. <br />
                    See <Link href="/documents/bylaws-contribution/english/2019"><a>the currently valid by-laws</a></Link>.
                </p>
            </div>

            <p><strong>§1 Contributions and admission to the association</strong></p>
            <p>(1) According to the decision made in the General Assembly of 2008, members of the association will contribute a membership fee.</p>
            <p>(2) The contribution is an obligation. The collection of contributions is usually done by direct debit or individual payment via transfer, Paypal or other electronic payment providers. The timeframe by which the contribution is due is determined and announced annually by the Alumni Board. Each member must ensure that their account has sufficient funds in case of direct debit, or decide for another payment method described above. In case of unsuccessful direct debit a fee of five euros will be charged.</p>
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

            <p>Each member must choose one of these categories, in order to complete the payment of contributions and membership. All three categories grant each member the right to vote within the association and access to the alumni database. Members can change the category of contribution (“upgrading” or “downgrading”) in prior consultation with the Board, but usually at the beginning of the following membership year. It is possible to make the contributions for several years in advance. Once a payment is made, a cancellation is no longer possible. Third parties are allowed to pay a member’s contribution.</p>
            <p>(4) Regular members may remain in the ‘Starter’ category up to 2 years after graduation. At the end of the first two years, regular members are then automatically upgraded to the ‘Contributor’ category. Upon request, an extension of the ‘Starter’ period by 1 year may be granted. This can be repeated annually, with no time limit.</p>
            <p>(5) Associated members according to §4.2 of the charter may only choose between categories ‘Contributor’ and ‘Patron’, and must therefore pay a contribution.</p>
            <p>(6) Honorary members according to §4.2 of the charter have no obligation to pay contributions, but may choose to do so at own will.</p>
            <p>(7) The amount of the contribution for supporting members, natural persons and legal entities is set by the Board.</p>

        </Layout>
    }
}