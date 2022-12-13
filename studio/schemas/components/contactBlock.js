import { MdOutlineContactless } from 'react-icons/md'

export default {
  name: 'contactBlock',
  type: 'object',
  title: 'Contact Block Component',
  fields: [
    {
      name: 'title',
      title: 'Title Text',
      type: 'string',
      initialValue: 'ROMA'
    },
    {
      name: 'subtitle',
      title: 'Subtitle Text',
      type: 'string',
      initialValue: 'Let’s talk about it...'
    },
    {
      name: 'email',
      title: 'Contact email',
      type: 'string',
      initialValue: 'office@adatstudio.com'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      email: 'email'
    },

    prepare({ title, subtitle, email }) {
      return {
        title: `Contact Block Component: ${title}`,
        media: MdOutlineContactless,
        subtitle: `${subtitle} | ${email}`
      }
    }
  }
}
