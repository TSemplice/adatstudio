import { MdViewCarousel } from 'react-icons/md'

export default {
  name: 'menuGallery',
  title: 'Menu Gallery',
  type: 'object',
  description: 'Gallery used to showcase menus.',
  fields: [
    {
      type: 'boolean',
      name: 'backgrounded',
      title: 'Gallery with light background',
      initialValue: false
    },
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
      name: 'smallTitle',
      title: 'Gallery Small title'
    },
    {
      type: 'string',
      name: 'mainTitle',
      title: 'Gallery Main title'
    },
    {
      name: 'menus',
      type: 'array',
      title: 'Menus',
      validation: Rule => Rule.required().min(4),
      of: [
        {
          name: 'menu',
          type: 'reference',
          to: [{ type: 'category' }]
        }
      ]
    }
  ],
  preview: {
    select: {
      smallTitle: 'smallTitle',
      title: 'mainTitle',
      image: 'menus.0.image'
    },

    prepare({ smallTitle, title, image }) {
      // const block = (blocks || []).find(block => block._type === 'block')

      return {
        title: 'Menu Gallery',
        subtitle: `${smallTitle} ${title}`,
        media: image ? image : MdViewCarousel
        // subtitle: block
        //   ? block.children
        //     .filter(child => child._type === 'span')
        //     .map(span => span.text)
        //     .join('')
        //   : 'No Text Content'
      }
    }
  }
}
