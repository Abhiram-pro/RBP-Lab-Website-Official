import {defineField, defineType} from 'sanity'

/** A piece of lab instrumentation, with the grant it was procured under. */
export const equipment = defineType({
  name: 'equipment',
  title: 'Equipment',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'model',
      title: 'Model and cost',
      type: 'string',
      description: 'e.g. "BioRad ChemiDoc — ₹10,80,625". Shown in the accent colour.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'What it is used for, and the project it was procured under.',
    }),
    defineField({
      name: 'funding',
      title: 'Funded by',
      type: 'string',
      description: 'e.g. "SERB · DST (ECR/2015/000166)". Shown in the card footer.',
    }),
    defineField({name: 'photo', title: 'Photograph', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'accent',
      title: 'Accent colour',
      type: 'string',
      description: 'Hex value for the bar above the name, e.g. #4EA8DE.',
      validation: (r) =>
        r.regex(/^#[0-9a-fA-F]{6}$/, {name: 'hex colour'}).warning('Use a 6-digit hex value.'),
    }),
    defineField({name: 'order', title: 'Sort order', type: 'number', initialValue: 100}),
  ],
  orderings: [{title: 'Manual order', name: 'order', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'name', subtitle: 'model', media: 'photo'}},
})
