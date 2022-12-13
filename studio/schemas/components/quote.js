import { MdFormatQuote } from 'react-icons/md'

export default {
  name: 'quote',
  title: 'Quote Block',
  type: 'object',
  fields: [
    {
      name: 'content',
      type: 'array',
      title: 'Quote Content',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      subtitle: 'content',
      image: 'vImage'
    },

    prepare({ image, subtitle }) {
      const block = (subtitle || []).find(block => block._type === 'block')

      return {
        title: `Quote block`,
        media: MdFormatQuote,
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
