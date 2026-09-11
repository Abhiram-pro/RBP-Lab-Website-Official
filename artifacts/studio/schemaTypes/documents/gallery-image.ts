import {defineField, defineType} from 'sanity'

/** A single photograph on the gallery page. */
export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Gallery image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) =>
            rule.required().warning('Describe the photograph for screen readers.'),
        }),
      ],
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional. Shown beneath the photograph.',
    }),
    defineField({
      name: 'takenAt',
      title: 'Taken at',
      type: 'datetime',
      description: 'Controls ordering. Newest first.',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {title: 'Newest first', name: 'takenAtDesc', by: [{field: 'takenAt', direction: 'desc'}]},
  ],
  preview: {
    select: {title: 'image.alt', subtitle: 'caption', media: 'image'},
    prepare({title, subtitle, media}) {
      return {title: title || 'Untitled photograph', subtitle, media}
    },
  },
})
