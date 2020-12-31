import Link from "next/link";
import * as React from "react";

interface PolicyVersionProps {
    date?: string; // date, e.g. 15th August 2020
    nextDate?: string; // date for next version, e.g. 15th August 2020

    before?: string; // url to policy valid before this date
    after?: string; // url to policy valid after this date
}

export default class PrivacyPolicyVersion extends React.Component<PolicyVersionProps> {
    render() {
        const { date, nextDate, before, after } = this.props;

        const nextDefined = typeof nextDate === 'string';
        const dateDefined = typeof date === 'string';

        let effectText: React.ReactNode = <></>;
        if(nextDefined && dateDefined) {
            effectText = <>
                This policy came into effect on {date} and was replaced by a new privacy policy on {nextDate}.
            </>;
        } else if(dateDefined) {
            effectText = <>
                This policy came into effect on {date}.
            </>;
        } else if(nextDefined) {
            effectText = <>
                This policy was in effect before {nextDate}.
            </>;
        }

        const beforeDefined = typeof before === 'string';
        const afterDefined = typeof after === 'string';

        let versionLinks: React.ReactNode = <></>;
        if (beforeDefined && afterDefined) {
            versionLinks = <>
                Please see <Link href={after!}><a>the policy valid after this date</a></Link> and <Link href={before!}><a>the policy valid before this date</a></Link>.
            </>;
        } else if(beforeDefined) {
            versionLinks = <>
                Please see <Link href={before!}><a>the policy valid before this date</a></Link>.
            </>;
        } else if(afterDefined) {
            versionLinks = <>
                Please see <Link href={after!}><a>the policy valid after this date</a></Link>.
            </>;
        }
        
        return <div className="uk-alert-success" uk-alert="">
            <a className="uk-alert-close" uk-close=""></a>
            <p>
                {effectText}
                {" "}
                {versionLinks}
            </p>
        </div>;
    }
}