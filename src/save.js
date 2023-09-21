import { __ } from '@wordpress/i18n';

import { RichText } from '@wordpress/block-editor';

export default function save ({ attributes }) {
    const { title, content, mediaID, mediaURL, buttonText, layout } = attributes;

    return (
        <section className={`${layout}`}>
            <div className="image">
                {mediaURL && (
                    <img
                        src={mediaURL}
                        alt=""
                        style={{
                            maxWidth: '100%',
                        }}
                    />
                )}
            </div>
            <div className="content">
                <RichText.Content
                    tagName="h2"
                    value={title}
                />
                <RichText.Content
                    tagName="div"
                    value={content}
                />
                {buttonText && (
                    <a href="#" className="custom-button">
                        {buttonText}
                    </a>
                )}
            </div>
        </section>
    );
}