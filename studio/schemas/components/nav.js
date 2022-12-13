import { MdLink } from 'react-icons/md'

export default {
  title: 'Navigation Block',
  name: 'nav',
  type: 'object',
  fields: [
    {
      title: 'Resource Link',
      description: 'Select the resource you want to link',
      name: 'cta',
      type: 'cta',
    },
    // {
    //   title: 'Sub Navigation Block',
    //   name: 'items',
    //   type: 'array',
    //   of: [{ type: 'nav' }],
    //   description: 'Sub navigation (optional)'
    // },
  ],
  preview: {
    select: {
      title: 'cta.title',
    },

    prepare({ title }) {
      return {
        title,
        media: MdLink
      }
    }
  }
}
