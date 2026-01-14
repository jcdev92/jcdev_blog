import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        blog: collection({
            label: 'Blog',
            slugField: 'title',
            path: 'src/blog/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                pubDate: fields.date({ label: 'Publication Date' }),
                description: fields.text({ label: 'Description', multiline: true }),
                author: fields.text({ label: 'Author' }),
                image: fields.object(
                    {
                        url: fields.text({ label: 'URL' }),
                        alt: fields.text({ label: 'Alt Text' }),
                    },
                    {
                        label: 'Image',
                    }
                ),
                tags: fields.array(fields.text({ label: 'Tag' }), {
                    label: 'Tags',
                    itemLabel: props => props.value,
                }),
                content: fields.markdoc({
                    label: 'Content',
                }),
            },
        }),
    },
});
