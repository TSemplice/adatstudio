import { MdAssignment } from 'react-icons/md'

import SlugInput from 'sanity-plugin-better-slug'

export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  preview: {
    select: {
      title: 'title'
    },

    prepare({ title }) {
      return {
        title: `${title}`,
        media: MdAssignment
      }
    }
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      validation: Rule => Rule.required()
      // description: 'Used only for CMS purposes (search on CMS)'
    },
    {
      type: 'slug',
      name: 'slug',
      options: {
        source: (doc, options) => {
          console.log(doc, options)
          return doc.title
        }
      },
      title: 'Page Identifier',
      description: 'Used only for api reference',
      validation: Rule => Rule.required()
    },
    {
      name: 'translations',
      type: 'object',
      title: 'Page translations',
      options: {
        i18n: true
      },
      fields: [
        {
          name: 'meta',
          type: 'meta',
        },
        {
          name: 'components',
          type: 'array',
          title: 'Page Components',
          of: [
            // { type: 'customBlockText' }
            // { type: 'hero' },
            // { type: 'menuGallery' },
            // { type: 'backgroundedGalleryLauncher' },
            // { type: 'news' },
            // { type: 'centeredParagraph' },
            // { type: 'galleryLauncher' },
            // { type: 'doubleImageText' },
            // { type: 'quote' },
            // { type: 'doubleText' },
            // { type: 'hours' },
            // { type: 'titleSubtitle' },
            // { type: 'videoPlayer' }
            { type: 'textBlock' },
            { type: 'projectsGallery' },
            { type: 'contactBlock' }
          ]
        }
      ]
    }
  ]
}
