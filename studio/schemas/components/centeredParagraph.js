import { MdFormatAlignJustify } from 'react-icons/md'

export default {
  name: 'centeredParagraph',
  title: 'Centered Paragraph',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Centered Paragraph Content',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      content: 'content'
    },

    prepare({ content }) {
      const block = (content || []).find(block => block._type === 'block')

      return {
        title: 'Centered Paragraph',
        subtitle: block
          ? block.children
            .filter(child => child._type === 'span')
            .map(span => span.text)
            .join('')
          : 'No Text Content',
        media: MdFormatAlignJustify
      }
    }
  }
}
