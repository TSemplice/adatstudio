export default {
  title: 'Custom Block Text',
  name: 'customBlockText',
  type: 'object',
  fields: [
    {
      title: 'Custom Block Text Content',
      name: 'content',
      type: 'array',
      of:[
        {type: 'block'},
        {type: 'altImage'}
      ]
    }
  ]
}
