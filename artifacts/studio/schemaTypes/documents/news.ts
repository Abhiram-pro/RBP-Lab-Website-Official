import {defineField, defineType} from 'sanity'

/**
 * A single lab announcement. One document feeds both the home-page carousel
 * and the /news list, so posting once is enough — the two surfaces differ only
 * in which fields they render.
 */
export const news = defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      description: 'One or two sentences. Shown on the news page.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'kind',
      title: 'Kind',
      type: 'string',
      initialValue: 'publication',
      options: {
        list: [
          {title: 'Publication', value: 'publication'},
          {title: 'Funding', value: 'funding'},
          {title: 'Award', value: 'award'},
          {title: 'Announcement', value: 'announcement'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
      description: 'Journal, funding body, or host. Shown beside the year.',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Displayed large on the carousel card. Use the funder name for grants.',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'Controls ordering. Newest first.',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Figure or photograph for the carousel card.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) =>
            rule.required().warning('Describe the image for screen readers.'),
        }),
      ],
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Optional DOI or external page.',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
  ],
  orderings: [
    {
      title: 'Newest first',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', kind: 'kind', venue: 'venue', media: 'image'},
    prepare({title, kind, venue, media}) {
      return {
        title,
        subtitle: [kind, venue].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
