import { MdViewQuilt } from 'react-icons/md'

export default {
  name: 'hero',
  type: 'object',
  title: 'Page Hero',
  description: 'Component with small title, big title, double text and image.',
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'Choose between Hero Layout (Normal or Journal)',
      options: {
        list: [
          {title: 'Normal', value: 'normal'},
          {title: 'Journal', value: 'journal'}
        ],
        layout: 'radio'
      },
      initialValue: 'normal'
    },
    {
      name: 'smallTitle',
      title: 'Page Hero Small Title',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Page Hero Big Title',
      type: 'array',
      description: 'Set text to h1 type',
      of: [{ type: 'block' }]
    },
    {
      name: 'leftText',
      title: 'Page Hero left text',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'rightText',
      title: 'Page Hero right text',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'image',
      title: 'Page Hero image',
      type: 'altImage'
    }
  ],
  preview: {
    select: {
      smallTitle: 'smallTitle',
      title: 'title',
      subtitle: 'leftText',
      image: 'image'
    },

    prepare({ subtitle, title, smallTitle, image }) {
      const block = (subtitle || []).find(block => block._type === 'block')
      const blockT = (title || []).find(block => block._type === 'block')

      return {
        title: `Page Hero: ${smallTitle ? smallTitle : 'No Small Title'} ${blockT ? block.children.filter(child => child._type === 'span').map(span => span.text).join('') : 'No Big TItle'}`,
        media: image ? image : MdViewQuilt,
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
