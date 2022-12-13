import { MdShortText } from 'react-icons/md'

export default {
  name: 'titleSubtitle',
  title: 'Title and Subtitlle Block',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'smallTitle',
      title: 'Small Title'
    },
    {
      name: 'mainTitle',
      type: 'array',
      title: 'Main Title',
      description: 'Set main title to h1.',
      of: [{ type: 'block' }]
    }
  ],

  preview: {
    select: {
      title: 'mainTitle',
      subtitle: 'smallTitle'
    },

    prepare({ subtitle, title }) {
      const block = (title || []).find(block => block._type === 'block')

      return {
        subtitle: block
        ? block.children
          .filter(child => child._type === 'span')
          .map(span => span.text)
          .join('')
        : 'No Text Content',
        title: `Title and Subtitle Block: ${subtitle}`,
        media: MdShortText
      }
    }
  }
}
