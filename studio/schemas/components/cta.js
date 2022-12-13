export default {
  title: 'Call to action',
  name: 'cta',
  type: 'object',
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
      description: 'Only the first value of these will be used'
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Internal',
      name: 'internal',
      type: 'reference',
      fieldset: 'link',
      to: [{ type: 'page' }]
    },
    {
      title: 'External',
      name: 'external',
      type: 'string',
      fieldset: 'link'
    }
  ],
  preview: {
    select: {
      title: 'title',
      route: 'internal',
      link: 'link'
    },

    prepare({ title }) {
      return {
        title
      }
    }
  }
}
