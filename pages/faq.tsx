import { GetStaticProps } from "next";
import * as React from "react";
import readAllFromPath, { DataCollectionFile } from '../lib/collection';
import Image from "../lib/image";
import Layout from "../lib/layout/index";
import Markdown from "../lib/markdown";

interface FAQQuestion {
    order: number,
    title: string,
    subtitle: string,
}
interface FAQProps {
    questions:  Array<DataCollectionFile<FAQQuestion>>
}

export default class Faqs extends React.Component<FAQProps> {
    render() {
        const { questions } = this.props;
        return <Layout title="Membership 2019 FAQs">
            <div>
                {questions.map(q => <FaqLink key={q.filename} question={q} />)}
            </div>
            {questions.map(q => <FaqQuestion key={q.filename} question={q} />)}

            <figure id="figure1">
                <Image
                        jpeg={require('../data/images/faq_figure_1.jpg')}
                        webp={require('../data/images/faq_figure_1.jpg?webp')}
                        alt="Relationship between the Jacobs Alumni Association and other Jacobs University Stakeholders"
                />
                <p>Figure 1: Relationship between the Jacobs Alumni Association and other Jacobs University Stakeholders</p>
            </figure>
        </Layout>
    }
}

class FaqLink extends React.Component<{question: DataCollectionFile<FAQQuestion>}> {
    render() {
        const {question} = this.props;
        return <p><strong>
            <a href={`#q${question.preamble.order}`}>{question.preamble.order}. {question.preamble.title}</a>
        </strong></p>;
    }
}

class FaqQuestion extends React.Component<{question: DataCollectionFile<FAQQuestion>}> {
    render() {
        const {question} = this.props;
        return <div id={`q${question.preamble.order}`}>
            <h3>{question.preamble.order}. {question.preamble.title}</h3>
            <p>
                <strong>
                    <Markdown>{question.preamble.subtitle}</Markdown>
                </strong>
            </p>

            <Markdown>{question.content}</Markdown>
        </div>;
    }
}


export const getStaticProps: GetStaticProps = async (context) => {
    const questions = (await readAllFromPath<FAQQuestion>("data", "content", "faqs")).sort((a, b) => a.preamble.order - b.preamble.order);
    return {
        props: { questions },
    }
}