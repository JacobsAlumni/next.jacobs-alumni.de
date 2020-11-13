import * as React from "react";
import styles from "./youtube.module.css";

interface YouTubeEmbedProps {
    id: string;
    title: string;
}

export class YouTubeEmbed extends React.Component<YouTubeEmbedProps, {consent: boolean}> {
    state = {consent: false};

    private readonly onConsent = () => {
        this.setState({consent: true});
    }

    render() {
        const { consent } = this.state;
        return consent ? <YouTubeIframe {...this.props} /> : <YouTubeConsent {...this.props} onClick={this.onConsent} />;
    }
}

interface YouTubeConsentProps extends YouTubeEmbedProps {
    onClick: () => void
}

class YouTubeConsent extends React.Component<YouTubeConsentProps> {
    private handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        this.props.onClick();
    }
    render() {
        const { title, id } = this.props;
        const href = `https://www.youtube.com/watch?v=${id}`;
        return <div className={styles.embedContainer}>
            <div>
                <p>
                    This page embeds a YouTube video titled <a href={href} target="_blank" rel="noreferrer noopener">{title}</a>.
                    <br />
                    To show this video you need to accept the <a href="https://www.youtube.com/t/terms" target="_blank" rel="noreferrer noopener">YouTube Terms of Service</a>.
                </p>
                <button className="uk-button uk-button-secondary" onClick={this.handleClick}>Agree To YouTube Terms of Service and Show Video</button>
            </div>
        </div>
    }
}

class YouTubeIframe extends React.Component<YouTubeEmbedProps> {
    render() {
        const { id } = this.props;
        const src = `https://www.youtube.com/embed/${id}`;
        return <div className={styles.embedContainer}>
            <iframe src={src} frameBorder={0} allowFullScreen></iframe>
        </div>;
    }
}