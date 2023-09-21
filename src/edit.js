import { __ } from '@wordpress/i18n';

import {
    useBlockProps,
    MediaUpload,
    MediaUploadCheck,
    RichText,
    InspectorControls,
    URLInputButton
} from '@wordpress/block-editor';

import {
    PanelBody,
    PanelRow,
    TextControl,
    Button,
    SelectControl
} from '@wordpress/components';

import './editor.scss';

export default function edit({ attributes, setAttributes, isSelected }) {
    const { buttonText, buttonURL, title, mediaID, mediaURL, layout, content } = attributes;

    const blockProps = useBlockProps();

    const onChangeButtonURL = (newURL) => {
        setAttributes({ buttonURL: newURL });
    };

    const onChangeButtonText = (newText) => {
        setAttributes({ buttonText: newText });
    };

    const onChangeContent = (newContent) => {
        setAttributes({ content: newContent });
    };

    const onChangeLayout = (newValue) => {
        setAttributes({ layout: newValue });
    };

    const onChangeTitle = (newTitle) => {
        setAttributes({ title: newTitle });
    };

    const onImageRemove = () => {
        setAttributes({
            mediaID: null,
            mediaURL: '',
        });
    };

    const onSelectImage = (media) => {
        setAttributes({
            mediaID: media.id,
            mediaURL: media.url,
        });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Settings')}>
                    <TextControl
                        label={__('Title')}
                        value={title}
                        onChange={onChangeTitle}
                    />
                    <PanelRow>
                        <SelectControl
                            label={__('Layout')}
                            value={layout}
                            options={[
                                { label: __('Image First'), value: 'image-first' },
                                { label: __('Content First'), value: 'content-first' },
                            ]}
                            onChange={onChangeLayout}
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <section className={`${layout}`}>
                <div className="image">
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectImage}
                            allowedTypes={['image']}
                            value={mediaID}
                            render={({ open }) => (
                                <div>
                                    {mediaID ? (
                                        <>
                                            <img
                                                src={mediaURL}
                                                alt=""
                                                style={{
                                                    maxWidth: '100%',
                                                }}
                                            />
                                            {isSelected && (
                                                <Button
                                                    isLink
                                                    isDestructive
                                                    onClick={onImageRemove}
                                                >
                                                    {__('Delete Image', 'danstoakes-img-content-two-col')}
                                                </Button>
                                            )}
                                        </>
                                    ) : (
                                        <Button onClick={open}>
                                            {__('Select Image', 'danstoakes-img-content-two-col')}
                                        </Button>
                                    )}
                                </div>
                            )}
                        />
                    </MediaUploadCheck>
                </div>
                <div className="section-content">
                    <RichText
                        tagName="h2"
                        placeholder={__('Enter title...', 'danstoakes-img-content-two-col')}
                        value={title}
                        onChange={onChangeTitle}
                    />
                    <RichText
                        {...blockProps}
                        className="content"
                        tagName="div"
                        placeholder={__('Enter content...', 'danstoakes-img-content-two-col')}
                        value={content}
                        onChange={onChangeContent}
                    />
                    <div>
                        <RichText
                            tagName="div"
                            value={buttonText}
                            onChange={onChangeButtonText}
                            placeholder={__('Button Text', 'your-text-domain')}
                        />
                        {isSelected && (
                            <URLInputButton
                                url={buttonURL}
                                onChange={onChangeButtonURL}
                            />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}