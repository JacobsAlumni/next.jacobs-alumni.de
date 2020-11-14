import Link from "next/link";
import * as React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
    allowDangerousHtml?: boolean;
    children: string;
}

export default class Markdown extends React.Component<MarkdownProps> {
    render() {
        const { children, allowDangerousHtml } = this.props;
        return <ReactMarkdown allowDangerousHtml={allowDangerousHtml} renderers={{"link": MarkdownLink}}>{children}</ReactMarkdown>
    }
}

interface LinkProps {
    href: string
}

class MarkdownLink extends React.Component<LinkProps> {
    render() {
        const {href, children} = this.props;

        if (!href.startsWith("/")) {
            return <a href={href} rel="noreferrer noopener">{children}</a>;
        }

        return <Link href={href}><a>{children}</a></Link>;
    }
}