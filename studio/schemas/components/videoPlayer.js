import { MdVideocam } from 'react-icons/md'

export default {
  name: 'videoPlayer',
  title: 'Video Player',
  type: 'object',
  fields: [
    {
      name: 'source',
      type: 'string',
      title: 'Select source of the video',
      options: {
        list: [
          {title: 'Youtube', value: 'youtube'},
          {title: 'Vimeo', value: 'vimeo'}
        ]
      },
      initialValue: 'vimeo'
    },
    {
      name: 'url',
      type: 'string',
      title: 'Url of the video',
      description: 'Url video that is in the embed url eg. https://player.vimeo.com/video/163721649?h=7eff968989 for vimeo and https://www.youtube.com/embed/u31qwQUeGuM for youtube'
    }
  ],
  preview: {
    select: {
      type: 'source',
      url: 'url',
    },

    prepare({ type, url }) {
      const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
      return {
        title: `Video Block, Type: ${capitalized}`,
        subtitle: `Video Url: ${url}`,
        media: MdVideocam
      }
    }
  }
}
