import { __ } from '@wordpress/i18n';

import {
    MediaUpload,
    MediaUploadCheck,
    RichText,
    InspectorControls,
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';

import {
    PanelBody,
    PanelRow,
    TextControl,
    Button,
} from '@wordpress/components';

import './editor.scss';

export default function edit ({ attributes, setAttributes, isSelected }) {
    const { title, content, mediaID, mediaURL, alignment, buttonText } = attributes;

    const onChangeTitle = (newTitle) => {
        setAttributes({ title: newTitle });
    };

    const onChangeContent = (newContent) => {
        setAttributes({ content: newContent });
    };

    const onSelectImage = (media) => {
        setAttributes({
            mediaID: media.id,
            mediaURL: media.url,
        });
    };

    const onImageRemove = () => {
        setAttributes({
            mediaID: null,
            mediaURL: '',
        });
    };

    const onChangeButtonText = (newText) => {
        setAttributes({ buttonText: newText });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Block Settings')}>
                    <TextControl
                        label={__('Title')}
                        value={title}
                        onChange={onChangeTitle}
                    />
                    <PanelRow>
                        <strong>{__('Image Alignment')}</strong>
                    </PanelRow>
                    <PanelRow>
                        <AlignmentToolbar
                            value={alignment}
                            onChange={(value) => setAttributes({ alignment: value })}
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <BlockControls>
                <AlignmentToolbar
                    value={alignment}
                    onChange={(value) => setAttributes({ alignment: value })}
                />
            </BlockControls>
            <section className={`align${alignment}`}>
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
                <div className="content">
                    <RichText
                        tagName="h2"
                        placeholder={__('Enter title...', 'danstoakes-img-content-two-col')}
                        value={title}
                        onChange={onChangeTitle}
                    />
                    <RichText
                        tagName="div"
                        placeholder={__('Enter content...', 'danstoakes-img-content-two-col')}
                        multiline="p"
                        value={content}
                        onChange={onChangeContent}
                    />
                    <TextControl
                        label={__('Button Text')}
                        value={buttonText}
                        onChange={onChangeButtonText}
                    />
                </div>
            </section>
        </>
    );
}