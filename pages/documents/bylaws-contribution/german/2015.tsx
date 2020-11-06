import Link from "next/link";
import * as React from "react";
import Layout from "../../../../lib/layout";
export default class ByLaws extends React.Component {
    render() {
        return <Layout title="Beitragsordnung (valid 26th September 2015 - 21st September 2019)">
            <div className="uk-alert-success" uk-alert="">
                <a className="uk-alert-close" uk-close=""></a>
                <p>
                    This is the german, legally binding version of the contribution by-laws valid until September 21st 2019. <br />
                    This version document has been archived and is no longer valid. <br />
                    These by-laws were last changed during the General Assembly 2015 on 26<sup>th</sup> September 2015. <br />
                    See <Link href="/documents/bylaws-contribution/english/2015/"><a>the old english translation</a></Link> of this document. <br />
                    See <Link href="/documents//bylaws-contribution/german/2019/"><a>the currently valid by-laws</a></Link>.
                </p>
            </div>

            <p><strong>§1 Beiträge und Aufnahme in den Verein</strong></p>
            <p>(1) Von den Mitgliedern wird, auf Beschluss der Vereinsversammlung im Jahr 2008/ General§ Assembly 2008, ein Mitgliedsbeitrag erhoben.</p>
            <p>(2) Der Beitrag ist eine Bringschuld. Die Regelverfahren sind der Beitragseinzug mit dem Lastschriftverfahren oder individuelle Überweisung per Bank, Paypal oder andere elektronische Zahlungsanbieter. Der Betrag wird in einem vom Vorstand festzulegenden und zu publizierenden Zeitraum eines jeden Jahres per Lastschriftverfahren abgebucht, wenn das Mitglied sich entschieden hat dieses Zahlungsverfahren zu benutzen. Jedes Mitglied muss in diesem Fall dafür sorgen, dass das Konto ausreichend gedeckt ist, oder vor Ende des Zeitraums auf eine andere, wie oben beschriebene Art, den Beitrag bezahlen. Im Falle von Rücklastschriften wird eine Gebühr von fünf Euro fällig.</p>
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

            <p>Jedes Mitglied muss sich eine dieser Kategorien aussuchen, um die Beitragszahlung und die Mitgliedschaft zu vollenden. Alle drei Kategorien ermöglichen das Wahlrecht eines jeden Mitglieds innerhalb des Vereins und den Zugang zur Alumni-Datenbank. Mitgliederkönnen in vorheriger Absprache mit dem Vorstand Beitrags- Kategorien wechseln („upgrading“ bzw. „downgrading“), normalerweise aber mit Beginn des folgenden Beitragjahres. Es ist möglich, die Beitragszahlungen für mehrere Jahre im Voraus zu tätigen. Sobald die Zahlung erfolgt, ist eine Stornierung nicht mehr möglich. Dritte Parteien können einem Mitglied die Mitgliedschaft durch Zahlung der Beiträge ermöglichen.</p>
            <p>(4) Ordentliche Mitglieder dürfen bis zu 2 Jahre nach Graduierung in der ‚Starter‘ Kategorie verbleiben. Mit Ablauf der ersten 2 Jahre werden ordentliche Mitglieder automatisch in die ‚Contributor‘ Kategorie eingestuft. Auf Anfrage wird eine Verlängerung der 2 Jahre ‚Starter‘ Periode um 1 Jahr genehmigt. Dies kann jedes Jahr wiederholt werden, ohne zeitliche Begrenzung.</p>
            <p>(5) Assoziierte Mitglieder nach §4.2 der Vereinsatzung dürfen nur zwischen Kategorien ‚Contributor‘ und ‚Patron‘ wählen, müssen somit einen Beitrag zahlen.</p>
            <p>(6) Ehrenmitglieder nach §4.2 der Vereinsatzung haben keine Beitragspflicht, können jedoch auf Eigeninitiative auch beitragen.</p>
            <p>(7) Über die Höhe der Beiträge für Fördermitglieder, natürliche Personen und juristische Personen entscheidet der Vorstand.</p>
        </Layout>
    }
}