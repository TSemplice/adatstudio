export default {
  title: 'Footer Content',
  name: 'footer',
  type: 'object',
  fields: [
    {
      title: 'Address Informations',
      name: 'address',
      type: 'array',
      of: [ { type: 'block' } ]
    },
    {
      title: 'Main Telephone Number',
      name: 'telephone',
      type: 'string'
    },
    {
      title: 'Gmaps url',
      description: 'Url used for the "Come raggiungerci" link.',
      name: 'gmaps',
      type: 'url'
    },
    {
      title: 'Main Email Address',
      name: 'email',
      type: 'string'
    },
    {
      title: 'Press Office Telephone Number',
      name: 'poTelephone',
      type: 'string'
    },
    {
      title: 'Press Office Email Address',
      name: 'poEmail',
      type: 'string'
    },
    {
      title: 'Instagram url',
      name: 'instagram',
      type: 'url'
    },
    {
      title: 'Facebook url',
      name: 'facebook',
      type: 'url'
    },
    {
      title: 'Privacy url',
      name: 'privacy',
      type: 'string'
    },
    {
      title: 'Cookies url',
      name: 'cookies',
      type: 'string'
    },
    {
      title: 'Terms url',
      name: 'terms',
      type: 'string'
    },
    // {
    //   title: 'Instagram Url',
    //   name: 'instagram',
    //   type: 'string'
    // },
    // {
    //   title: 'Facebook Url',
    //   name: 'facebook',
    //   type: 'string'
    // },
    // {
    //   title: 'Linkedin Url',
    //   name: 'linkedin',
    //   type: 'string'
    // }
  ]
}
