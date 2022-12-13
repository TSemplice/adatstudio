import { MdViewCarousel } from 'react-icons/md'

export default {
  name: 'projectsGallery',
  title: 'Projects Gallery Component',
  type: 'object',
  description: 'Gallery used to showcase projects.',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Gallery title'
    },
    {
      name: 'projects',
      type: 'array',
      title: 'Related Projects',
      validation: Rule => Rule.required().min(4),
      of: [
        {
          name: 'project',
          type: 'reference',
          to: [{ type: 'project' }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      image: 'menus.0.image'
    },

    prepare({ smallTitle, title, image }) {
      // const block = (blocks || []).find(block => block._type === 'block')

      return {
        title: 'Projects Gallery',
        subtitle: `${title ? title : 'No title set'}`,
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
