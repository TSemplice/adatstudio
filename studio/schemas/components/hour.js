import { MdOutlineHistoryToggleOff } from 'react-icons/md'

export default {
  name: 'hour',
  title: 'Hour Item',
  type: 'object',
  fields: [
    {
      name: 'day',
      type: 'string',
      title: 'Day'
    },
    {
      name: 'range',
      title: 'Hours range',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'day',
      subtitle: 'range'
    },

    prepare({ title, subtitle }) {
      return {
        title: `Day: ${title ? title : 'No Day Set'}`,
        media: MdOutlineHistoryToggleOff,
        subtitle: `Hour range: ${subtitle ? subtitle : 'No hour range set'}`
      }
    }
  }
}
