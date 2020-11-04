import Link from "next/link";
import * as React from "react";
import Layout from "../../../../layout";
export default class ByLaws extends React.Component {
    render() {
        return <Layout title="Beitragsordnung (valid from 21st September 2019)">
            <div className="uk-alert-success" uk-alert="">
                <a className="uk-alert-close" uk-close=""></a>
                <p>
                    This is the german, legally binding version of the contribution by-laws. <br />
                    These by-laws were last changed during the General Assembly 2019 on 21<sup>st</sup> September 2019. <br />
                    See <Link href="/documents/bylaws-contribution/english/2019/"><a>the english version</a></Link> for a translation of this document. <br />
                    See <Link href="/documents/bylaws-contribution/german/2015/"><a>the previous version</a></Link> of this document.
                </p>
            </div>

            <p><strong>§1 Beiträge und Aufnahme in den Verein</strong></p>
            <p>(1) Von den Mitgliedern wird, auf Beschluss der Vereinsversammlung im Jahr 2008/ General§ Assembly 2008, ein Mitgliedsbeitrag erhoben.</p>
            <p>(2) Der Beitrag ist eine Bringschuld. Der Prozess des Beitragseinzugs wird vom Vorstand festgelegt und kommuniziert. Insbesondere sollte der Vorstand entscheiden, welche Zahlungsmethoden zur Verfügung stehen und ob und welche externen Zahlungsdienstleister eingesetzt werden. Der Beitrag ist jährlich fällig, in der Regel zum Jahrestag der Mitgliedschaft. Falls die Zahlung am Jahrestag der Mitgliedschaft fehlschlägt und der Zahlungsdienstleister der Alumni Association eine Gebühr in Rechnung stellt, werden diese Kosten dem Mitglied in Rechnung gestellt.</p>
            <p>(3) Die jährlichen Beiträge für ordentliche Mitglieder (nach §4.1 der Vereinssatzung) basieren auf drei Kategorien und sehen wie folgt aus:</p>

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
                            <td>Kein Beitrag</td>
                            <td>39€</td>
                            <td>249€</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>Jedes Mitglied muss sich eine dieser Kategorien aussuchen, um die Beitragszahlung und die Mitgliedschaft zu vollenden. Alle drei Kategorien ermöglichen das Wahlrecht eines jeden Mitglieds innerhalb des Vereins und den Zugang zur Alumni-Datenbank. Mitglieder können in vorheriger Absprache mit dem Vorstand Beitrags- Kategorien wechseln („upgrading“ bzw. „downgrading“). Sobald die Zahlung erfolgt, ist eine Stornierung nicht mehr möglich. Dritte Parteien können einem Mitglied die Mitgliedschaft durch Zahlung der Beiträge ermöglichen.</p>
            <p>(4) Nach 2 Jahren Starter-Mitgliedschaft haben ordentliche Mitglieder die Möglichkeit sich zu entscheiden, ob sie in die ‚Contributor‘ Kategorie  aufsteigen oder eine Verlängerung der ‚Starter‘-Periode um ein weiteres Jahr beantragen möchten. Diese Verlängerung kann auf unbestimmte Zeit wiederholt werden.</p>
            <p>(5) Assoziierte Mitglieder nach §4.2 der Vereinssatzung dürfen nur zwischen Kategorien ‚Contributor‘ und ‚Patron‘ wählen, müssen somit einen Beitrag zahlen.</p>
            <p>(6) Ehrenmitglieder nach §4.2 der Vereinssatzung haben keine Beitragspflicht, können jedoch auf Eigeninitiative auch beitragen.</p>
        </Layout>
    }
}