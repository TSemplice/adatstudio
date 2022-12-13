import { MdTextFields } from 'react-icons/md'

export default {
  name: 'doubleText',
  title: 'Double Text Block',
  type: 'object',
  fields: [
    {
      name: 'leftText',
      type: 'array',
      title: 'Left Column Content',
      of: [{ type: 'block' }]
    },
    {
      name: 'rightText',
      type: 'array',
      title: 'Right Column Content',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      title: 'leftText.label',
      subtitle: 'leftText.content'
    },

    prepare({ title, subtitle }) {
      const block = (subtitle || []).find(block => block._type === 'block')

      return {
        title: `Double Text`,
        media: MdTextFields,
        subtitle: block
          ? block.children
            .filter(child => child._type === 'span')
            .map(span => span.text)
            .join('')
          : 'No Text Content'
      }
    }
  }
}
