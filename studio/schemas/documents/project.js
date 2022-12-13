import { MdAllOut } from 'react-icons/md'
// import client from 'part:@sanity/base/client'

export default {
  type: 'document',
  name: 'project',
  title: 'Project',
  preview: {
    select: {
      title: 'title',
      image: 'image'
    },

    prepare({ title, image }) {
      return {
        title: `${title}`,
        media: image ? image : MdAllOut
      }
    }
  },
  fields: [
    // {
    //   name: "order",
    //   title: "Order",
    //   type: "number",
    //   hidden: true,
    // },
    // {
    //   name: "menuOrder",
    //   title: "Set the order inside the menu list.",
    //   type: "number",
    //   validation: Rule => Rule.required(),
    //   initialValue: 1
    // },
    // {
    //   name: "vegetarian",
    //   title: "Project is vegetarian",
    //   type: 'boolean',
    //   initialValue: false
    // },
    // {
    //   name: "glutenFree",
    //   title: "Project is Gluten Free",
    //   type: 'boolean',
    //   initialValue: false
    // },
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
      description: 'Used only for CMS purposes (search on CMS)'
    },
    {
      name: 'image',
      type: 'altImage',
      title: 'Project Image',
      description: 'Image used to show the project (eg. carousels).'
    },
    // {
    //   type: 'slug',
    //   name: 'slug',
    //   options: {
    //     source: (doc, options) => {
    //       console.log(doc, options)
    //       return doc.title
    //     }
    //   },
    //   title: 'Page Identifier',
    //   description: 'Used only for api reference',
    // },
    {
      name: 'translations',
      type: 'object',
      title: 'Page translations',
      options: {
        i18n: true
      },
      initialValue: {
        en: {
          title: 'Terminal A at Newark Liberty International Airport',
          subtitle: 'with Grimshaw',
          list: {
            items: [
              {
                label: 'Location',
                content: 'Dubai, United Arab Emirates'
              },
              {
                label: 'Year',
                content: '2022'
              },
              {
                label: 'Status',
                content: 'Complete'
              },
              {
                label: 'Client',
                content: 'Expo Dubai 2020'
              }
            ]
          }
        }
      },
      fields: [
        // {
        //   name: 'meta',
        //   type: 'meta',
        // },
        {
          name: 'title',
          type: 'string',
          title: 'Project Translated Title',
          description: 'This is the title of the Project on the menu translated.'
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Project Translated Subtitle'
        },
        {
          name: 'list',
          type: 'list'
        }
        // {
        //   name: 'description',
        //   type: 'array',
        //   title: 'Project Description',
        //   description: 'Write allergenes part with Emphasis highlight (i button on editor).',
        //   of: [{ type: 'block' }]
        // },
        // {
        //   name: 'price',
        //   type: 'number',
        //   title: 'Project Price'
        // },
        // {
        //   name: 'category',
        //   type: 'reference',
        //   title: 'Select to wich Menù it belongs',
        //   to: [{ type: 'category' }]
        // },
        // {
        //   name: 'subCategory',
        //   title: 'Menu Subcategories',
        //   description: '(e. brunch, lunch, dinner ecc..)',
        //   type: 'tags',
        //   options: {
        //     predefinedTags: [
        //       {label: 'brunch', value: 'brunch'},
        //       {label: 'pranzo', value: 'pranzo'},
        //       {label: 'cena', value: 'cena'},
        //       {label: 'colazione', value: 'colazione'},
        //       {label: 'snack pomeridiano', value: 'snack pomeridiano'},
        //       {label: 'distillati', value: 'distillati'},
        //       {label: 'vini', value: 'vini'},
        //       {label: 'cocktail', value: 'cocktail'},
        //       {label: 'bollicine', value: 'bollicine'},
        //       {label: 'bianchi', value: 'bianchi'},
        //       {label: 'rosati', value: 'rosati'},
        //       {label: 'rossi', value: 'rossi'},
        //       {label: 'lunch', value: 'lunch'},
        //       {label: 'dinner', value: 'dinner'},
        //       {label: 'breakfast', value: 'breakfast'},
        //       {label: 'afternoon snack', value: 'afternoon snack'},
        //       {label: 'distillates', value: 'distillates'},
        //       {label: 'wines', value: 'wines'},
        //       {label: 'bubbles', value: 'bubbles'},
        //       {label: 'whites', value: 'whites'},
        //       {label: 'rosé', value: 'rosé'},
        //       {label: 'reds', value: 'reds'}
        //     ]
        //   }
        // },
        // {
        //   name: 'type',
        //   title: 'Project types',
        //   description: '(eg. antipasti, primi, secondi ecc..)',
        //   type: 'tags',
        //   options: {
        //     predefinedTags: async () => {
        //       let tags = []
        //       const query = '*[_type == "category"]'
        //       const menus = await client.fetch(query)

        //       menus.forEach(menu => {
        //         Object.entries(menu.translations).forEach(([key, value]) => {
        //           if (value.type) {
        //             value.type.forEach(type => {
        //               if (tags.some(tag => tag.value === type.value)) return

        //               console.log(tags, type, tags.some(tag => tag.value === type.value))

        //               tags.push(type)
        //             })
        //           }
        //         })
        //       })

        //       tags.sort((a, b) => {
        //         var textA = a.value.toLowerCase()
        //         var textB = b.value.toLowerCase()
        //         return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
        //       })

        //       return tags
        //     }
        //   }
        // }
      ]
    }
  ],
  orderings: [
    {
      title: "Title",
      name: "title",
      by: [{ field: "title", direction: "asc" }],
    },
  ]
}
