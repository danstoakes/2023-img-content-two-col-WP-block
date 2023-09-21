import { __ } from '@wordpress/i18n';

import {
    MediaUpload,
    MediaUploadCheck,
    RichText,
    InspectorControls
} from '@wordpress/block-editor';

import {
    PanelBody,
    PanelRow,
    TextControl,
    Button,
    SelectControl
} from '@wordpress/components';

import './editor.scss';

export default function edit ({ attributes, setAttributes, isSelected }) {
    const { title, mediaID, mediaURL, layout } = attributes;

    const onChangeTitle = (newTitle) => {
        setAttributes({ title: newTitle });
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

    const onChangeLayout = (newValue) => {
        setAttributes({ layout: newValue });
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
                <div className="content">
                    <RichText
                        tagName="h2"
                        placeholder={__('Enter title...', 'danstoakes-img-content-two-col')}
                        value={title}
                        onChange={onChangeTitle}
                    />
                </div>
            </section>
        </>
    );
}