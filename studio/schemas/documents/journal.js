import { MdArticle } from 'react-icons/md'

import SlugInput from 'sanity-plugin-better-slug'

export default {
  type: 'document',
  name: 'journal',
  title: 'Journal',
  preview: {
    select: {
      title: 'title',
      image: 'image'
    },

    prepare({ title, image }) {
      return {
        title: `${title}`,
        media: image ? image : MdArticle
      }
    }
  },
  fields: [
    {
      title: 'Relelase Date',
      name: 'releaseDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'title',
      type: 'string',
      title: 'Journal Title',
      description: 'Used only for CMS purposes (search on CMS)'
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
    },
    {
      name: 'image',
      type: 'altImage',
      title: 'Journal Image',
      description: 'Image used to show the journal (eg. launcher cards).'
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
          name: 'title',
          type: 'string',
          title: 'Translated Journal Title'
        },
        {
          name: 'components',
          type: 'array',
          title: 'Journal Components',
          of: [
            // { type: 'customBlockText' }
            { type: 'hero' },
            { type: 'menuGallery' },
            { type: 'backgroundedGalleryLauncher' },
            { type: 'news' },
            { type: 'centeredParagraph' },
            // { type: 'galleryLauncher' },
            { type: 'doubleImageText' },
            { type: 'quote' },
            { type: 'doubleText' },
            { type: 'hours' },
            { type: 'videoPlayer' }
          ]
        }
      ]
    }
  ]
}
