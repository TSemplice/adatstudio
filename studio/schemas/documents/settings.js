import { MdSettings } from 'react-icons/md'

export default {
  type: 'document',
  name: 'settings',
  title: 'Site Settings',
  __experimental_actions: ['update','create', 'delete', 'publish'],
  initialValue: {
    title: 'Site Settings'
  },
  preview: {
    select: {
      title: 'title'
    },

    prepare({ title }) {
      return {
        title,
        media: MdSettings
      }
    }
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Website Settings',
      readOnly: true
    },
    {
      name: 'instagram',
      type: 'url',
      title: 'Instagram Url'
    },
    {
      name: 'linkedin',
      type: 'url',
      title: 'Linkedin Url'
    },
    {
      name: 'privacy',
      type: 'url',
      title: 'Privacy Url'
    },
    {
      name: 'cookies',
      type: 'url',
      title: 'Cookies Url'
    },
    {
      name: 'copyright',
      type: 'string',
      title: 'Copiryght Label that appears in footer.'
    }
    // {
    //   name: 'translations',
    //   type: 'object',
    //   title: 'Page translations',
    //   options: {
    //     i18n: true
    //   },
    //   fields: [
    //     {
    //       name: 'allergenes',
    //       type: 'allergenes'
    //     },
    //     {
    //       name: 'footer',
    //       type: 'footer'
    //     }

    //   ]
    // }
  ]
}
