import {defineField, defineType} from 'sanity'

/** An external or cross-department research collaborator. */
export const collaborator = defineType({
  name: 'collaborator',
  title: 'Collaborator',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'institution',
      title: 'Institution',
      type: 'string',
      description: 'Department and university, as it should read on the card.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Nature of the collaboration',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      options: {hotspot: true},
      description: 'Falls back to a monogram plate when absent.',
    }),
    defineField({
      name: 'accent',
      title: 'Monogram colour',
      type: 'string',
      description: 'Hex value used only by the fallback plate, e.g. #134074.',
      validation: (r) =>
        r.regex(/^#[0-9a-fA-F]{6}$/, {name: 'hex colour'}).warning('Use a 6-digit hex value.'),
    }),
    defineField({name: 'order', title: 'Sort order', type: 'number', initialValue: 100}),
  ],
  orderings: [{title: 'Manual order', name: 'order', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'name', subtitle: 'institution', media: 'portrait'}},
})
