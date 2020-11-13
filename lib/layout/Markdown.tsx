import * as React from "react";
import Layout, { LayoutProps } from ".";
import { default as RenderMarkdown } from "../markdown";

export default function Markdown(content: string, props: LayoutProps): React.ComponentClass<{}> {
    return class MarkdownPage extends React.Component {
        render() {
            return <Layout {...props}>
                <RenderMarkdown>{content}</RenderMarkdown>
            </Layout>
        }
    }
}