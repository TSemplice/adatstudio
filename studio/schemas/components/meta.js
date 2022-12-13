export default {
  name: 'meta',
  title: 'SEO Meta',
  type: 'object',
  description: 'Add SEO meta data',
  options: {
    collapsed: true,
    collapsible: true,
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Meta Title',
      description: 'Meta title'
    },
    {
      type: 'text',
      name: 'description',
      title: 'Meta Description',
      description: 'Meta description'
    },
    {
      type: 'image',
      name: 'image',
      title: 'Meta Image',
      description: 'Use image 1200x630'
    }
  ]
}
