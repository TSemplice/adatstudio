import { MdFilePresent } from 'react-icons/md'

export default {
  type: 'document',
  name: 'press',
  title: 'Press / Release',
  preview: {
    select: {
      title: 'title',
      image: 'image'
    },

    prepare({ title, image }) {
      return {
        title: `${title}`,
        media: image ? image :  MdFilePresent
      }
    }
  },
  fields: [
    {
      title: 'Press / Relelase Date',
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
      title: 'Press / Release Title',
      description: 'Used only for CMS purposes (search on CMS)'
    },
    {
      name: 'image',
      type: 'altImage',
      title: 'Press / Release Image',
      description: 'Image used to show the resource (eg. news block).'
    },
    {
      name: 'file',
      type: 'file',
      title: 'Press / Release Resource File',
      description: "Upload file if it's needed for this press. Notice that only the first value available between Resource File and External Link will be used for the News Card in the website."
    },
    {
      name: 'url',
      type: 'url',
      title: 'Press / Release External Link',
      description: "External Link if it's needed for this press. Notice that only the first value available between Resource File and External Link will be used for the News Card in the website."
    },
    {
      name: 'translations',
      type: 'object',
      title: 'Page translations',
      options: {
        i18n: true
      },
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Press / Release Translated Title'
        }
      ]
    }
  ]
}
