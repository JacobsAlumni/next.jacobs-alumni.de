import Link from "next/link";
import * as React from "react";
import ReactMarkdown from "react-markdown";

export default class Markdown extends React.Component<{children: string}> {
    render() {
        const { children } = this.props;
        return <ReactMarkdown renderers={{"link": MarkdownLink}}>{children}</ReactMarkdown>
    }
}

interface LinkProps {
    href: string
}

class MarkdownLink extends React.Component<LinkProps> {
    render() {
        const {href, children} = this.props;

        if (!href.startsWith("/")) {
            return <a href={href}>{children}</a>;
        }

        return <Link href={href}><a>{children}</a></Link>;
    }
}