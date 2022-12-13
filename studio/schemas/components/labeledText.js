export default {
  name: 'labeledText',
  type: 'object',
  title: 'Labeled Text',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Labeled Text Label'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Labeled Text Content',
      of: [{ type: 'block' }]
    }
  ]
}
