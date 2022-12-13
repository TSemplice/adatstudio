import { MdTextFormat } from 'react-icons/md'

export default {
  name: 'textBlock',
  type: 'object',
  title: 'Text Block Component',
  fields: [
    {
      name: 'text',
      title: 'Text content',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      subtitle: 'text'
    },

    prepare({ image, subtitle }) {
      const block = (subtitle || []).find(block => block._type === 'block')

      return {
        title: `Text Block Component`,
        media: MdTextFormat,
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
