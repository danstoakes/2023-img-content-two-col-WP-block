import { __ } from '@wordpress/i18n';

import { RichText } from '@wordpress/block-editor';

export default function save ({ attributes }) {
    const { title, mediaURL, layout } = attributes;

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
                {title && (<RichText.Content
					tagName='h2'
					value={title}
				/>)}
            </div>
        </section>
    );
}