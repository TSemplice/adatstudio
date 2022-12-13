import { MdMenu } from 'react-icons/md'

export default {
  type: 'document',
  name: 'menu',
  title: 'Navigation Menu',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title,
        media: MdMenu
      }
    }
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Menu Title',
      description: 'I.e. Main nav, Footer nav...',
    },
    {
      type: 'slug',
      name: 'slug',
      options: {
        source: 'title'
      },
      title: 'Menu Identifier',
      description: 'Used only for api reference',
    },
    {
      name: 'translations',
      type: 'object',
      title: 'Nav translations',
      options: {
        i18n: true
      },
      fields: [
        {
          type: 'array',
          name: 'items',
          title: 'Navigation Items',
          of: [{ type: 'nav' }]
        }
      ]
    }
  ]
}
