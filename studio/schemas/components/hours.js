import { MdOutlineHistoryToggleOff } from 'react-icons/md'

export default {
  name: 'hours',
  title: 'Hours Block',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Hours Block Title'
    },
    {
      name: 'items',
      type: 'array',
      title: 'Hours Block Items',
      of: [{ type: 'hour' }]
    }
  ],
  preview: {
    select: {
      title: 'items.0.day',
      subtitle: 'items.0.range'
    },

    prepare({ title, subtitle }) {
      return {
        title: `Hours Block`,
        media: MdOutlineHistoryToggleOff,
        subtitle: `${title ? title : 'No Day Set'}: ${subtitle ? subtitle : 'No hour range set'}`
      }
    }
  }
}
