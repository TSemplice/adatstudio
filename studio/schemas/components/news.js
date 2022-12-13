import { MdDns } from 'react-icons/md'

export default {
  name: 'news',
  title: 'News Block',
  type: 'object',
  description: 'Block used to display the last news.',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'News Block title',
      initialValue: 'Last News'
    },
    {
      name: 'news',
      type: 'array',
      title: 'News',
      of: [
        {
          type: 'reference',
          name: 'reference',
          to: [{ type: 'press' }, { type: 'journal' }]
        }
      ]
    },
    {
      type: 'cta',
      name: 'cta'
    }
  ],

  preview: {
    select: {
      title: 'title'
    },

    prepare({ subtitle, title }) {
      return {
        title,
        media: MdDns
      }
    }
  }
}
