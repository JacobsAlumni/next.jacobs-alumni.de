import * as React from "react";

interface ImageProps {
    webp: string,
    jpeg: string,
    alt?: string,
}

export default class Image extends React.Component<ImageProps> {
    render() {
        const {webp, jpeg, alt} = this.props;
        return (
            <picture>
                <source srcSet={webp} type="image/webp" />
                <source srcSet={jpeg} type="image/jpeg" />
                <img src={jpeg} alt={alt} />
            </picture>
        );
    }
}