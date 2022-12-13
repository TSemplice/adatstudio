import { MdViewList } from 'react-icons/md'

export default {
  name: 'list',
  type: 'object',
  title: 'List of labeled items.',
  fields: [
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [
        {
          name: 'labeledItem',
          type: 'object',
          title: 'LabeledItem',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Item Label'
            },
            {
              name: 'content',
              type: 'string',
              title: 'Item Content'
            }
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'content'
            },
        
            prepare({ title, subtitle }) {
              return {
                title: `List Item: ${title}`,
                subtitle,
                media: MdViewList
              }
            }
          }
        }
      ]
    }
  ]
}