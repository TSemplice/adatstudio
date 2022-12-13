import { MdArticle } from 'react-icons/md'
import journal from '../documents/journal'

export default {
  name: 'newsItem',
  type: 'object',
  title: 'News Item',
  fields: [
    {
      name: 'internal',
      type: 'reference',
      title: 'Reference to a journal item or a resource',
      description: 'choose between an iternal journal item, internal resource or build a custom news that points to a external source, only the first available value will be used.',
      to: [{ type: 'journal' }, { type: 'press' }]
    }
    // {
    //   name: 'customNews',
    //   type: 'customNews'
    // }
  ],

  preview: {
    select: {
      title: 'internal.title',
      otherTitle: 'customNews.title',
      jImage: 'internal.image',
      cImage: 'customNews.image'
    },

    prepare({ otherTitle, title, jImage, cImage }) {
      return {
        title: title ? title : otherTitle,
        media: jImage || cImage ? (jImage ? jImage : cImage) : MdArticle
      }
    }
  }
}
