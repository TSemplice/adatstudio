import { MdArticle } from 'react-icons/md'

export default {
  name: 'customNews',
  type: 'object',
  title: 'Custom news item',
  description: 'Build your custom news items used in the last news block',
  fields: [
    {
      title: 'Custom news item relelase date',
      name: 'releaseDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'title',
      type: 'string',
      title:'Custom news item title'
    },
    {
      name: 'image',
      type: 'altImage',
      title:'Custom news item image'
    },
    {
      name: 'url',
      type: 'url',
      title:'Custom news item external link'
    }
  ]
}
