import { MdFeaturedPlayList } from 'react-icons/md'

export default {
  name: 'doubleImageText',
  type: 'object',
  title: 'Double Image and Text Component',
  fields: [
    {
      name: 'textPosition',
      title: 'Select text position',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'}
        ],
        layout: 'radio'
      },
      initialValue: 'left'
    },
    {
      name: 'text',
      title: 'Text content',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'vImage',
      title: 'Vertical Image',
      type: 'altImage'
    },
    {
      name: 'hImage',
      title: 'Horizontal Image',
      type: 'altImage'
    }
  ],
  preview: {
    select: {
      subtitle: 'text',
      image: 'vImage'
    },

    prepare({ image, subtitle }) {
      const block = (subtitle || []).find(block => block._type === 'block')

      return {
        title: `Double Image and Text`,
        media: image ? image : MdFeaturedPlayList,
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
