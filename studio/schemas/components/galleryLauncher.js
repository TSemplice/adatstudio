import { MdOutlineFilterBAndW } from 'react-icons/md'

export default {
  name: 'galleryLauncher',
  title: 'Gallery Launcher',
  type: 'object',
  fields: [
    // {
    //   name: 'position',
    //   type: 'string',
    //   title: 'Title and Description vertical position',
    //   options: {
    //     list: [
    //       {title: 'Top', value: 'top'},
    //       {title: 'Bottom', value: 'bottom'}
    //     ],
    //     layout: 'radio'
    //   },
    //   initialValue: 'top'
    // },
    {
      name: 'ratio',
      type: 'string',
      title: 'Select ratio of the images.',
      options: {
        list: [
          {title: 'Vertical', value: 'vertical'},
          {title: 'Horizontal', value: 'horizontal'},
          {title: 'Squared', value: 'squared'},
        ]
      },
      initialValue: 'vertical'
    },
    {
      type: 'string',
      name: 'title',
      title: 'Gallery launcher title'
    },
    {
      type: 'array',
      name: 'description',
      title: 'Gallery launcher description',
      of: [{ type: 'block' }]
    },
    {
      name: 'images',
      type: 'array',
      title: 'Gallery launcher images',
      description: 'At leat 4 images required',
      of: [
        {
          type: 'altImage'
        }
      ]
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Gallery launcher link'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      image: 'images.0'
    },

    prepare({ image, subtitle, title }) {
      const block = (subtitle || []).find(block => block._type === 'block')

      return {
        title: `Gallery Launcher: ${title ? title : 'No Title'}`,
        media: image ? image : MdOutlineFilterBAndW,
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
