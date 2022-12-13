export default {
  name: 'allergenes',
  type: 'object',
  title: 'Allergenes Settings',
  fields: [
    {
      name: 'title',
      title: 'Allergenes List Title',
      type: 'string',
      initialValue: 'Lista Allergeni*'
    },
    {
      name: 'content',
      title: 'Allergenes List Content',
      type: 'array',
      description: 'Set in bold for important notes.',
      of: [{ type: 'block' }]
    }
  ]
}
