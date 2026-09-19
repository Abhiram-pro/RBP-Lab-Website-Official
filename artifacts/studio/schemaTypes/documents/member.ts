import {defineField, defineType} from 'sanity'

/**
 * A person in the lab. One document type covers current members, alumni and
 * interns; `group` decides which section of /members they appear in, so moving
 * someone to alumni is a single field change rather than a code edit.
 */
export const member = defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'e.g. "PhD Scholar · NMD & UPF3B Regulation". Shown under the name.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'group',
      title: 'Group',
      type: 'string',
      initialValue: 'current',
      options: {
        list: [
          {title: 'Current member', value: 'current'},
          {title: 'Alumnus', value: 'alumni'},
          {title: 'Intern', value: 'intern'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      description: 'Used in the profile URL. Generate it from the name.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      options: {hotspot: true},
      description: 'Optional. A neutral placeholder shows when absent.',
    }),
    defineField({
      name: 'order',
      title: 'Sort order',
      type: 'number',
      initialValue: 100,
      description: 'Lower numbers appear first within the group.',
    }),
    defineField({
      name: 'isPrincipalInvestigator',
      title: 'Principal Investigator',
      type: 'boolean',
      initialValue: false,
      description: 'The PI is featured separately, above the roster.',
    }),
  ],
  orderings: [
    {title: 'Group, then order', name: 'groupOrder', by: [{field: 'group', direction: 'asc'}, {field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'name', subtitle: 'role', group: 'group', media: 'portrait'},
    prepare({title, subtitle, group, media}) {
      return {title, subtitle: [group, subtitle].filter(Boolean).join(' · '), media}
    },
  },
})
