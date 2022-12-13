import { MdCategory } from 'react-icons/md'
import client from 'part:@sanity/base/client';

export default {
  type: 'document',
  name: 'category',
  title: 'Category',
  preview: {
    select: {
      title: 'title',
      image: 'image'
    },

    prepare({ title, image }) {
      return {
        title: `${title}`,
        media: image ? image : MdCategory
      }
    }
  },
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
    {
      name: 'title',
      type: 'string',
      title: 'Category Title',
      description: 'Used only for CMS purposes (search on CMS)'
    },
    {
      name: 'allergenes',
      type: 'boolean',
      title: 'Allergenes',
      description: 'Check is the allergenes modal is necessary in this menu.',
      initialValue: false
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
      title: 'Menù Image',
      description: 'Image used to show the menù (eg. carousels).'
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
      name: 'gallery',
      type: 'array',
      title: 'Menù Gallery',
      description: 'Images used to show Menù in the showcase of the menu.',
      of: [{ type: 'altImage' }],
      options: {
        layout: 'grid'
      }
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
          title: 'Translated Menu Title'
        },
        {
          name: 'shortDesc',
          type: 'array',
          title: 'Menù short description',
          description: 'Short Description used for carousels.',
          of: [{ type: 'block' }]
        },
        {
          name: 'desc',
          type: 'array',
          title: 'Menù description',
          description: 'Description used for Menù showcase.',
          of: [{ type: 'block' }]
        },
        // {
        //   name: 'subCategory',
        //   title: 'Menu Subcategories',
        //   type: 'tags',
        //   options: {
        //     preload: [
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
        // }
        {
          name: 'type',
          title: 'Product types',
          description: '(eg. antipasti, primi, secondi ecc..)',
          type: 'tags',
          options: {
            predefinedTags: async () => {
              let tags = []
              const query = '*[_type == "product"]'
              const products = await client.fetch(query)

              products.forEach(menu => {
                Object.entries(menu.translations).forEach(([key, value]) => {
                  if (value.type) {
                    value.type.forEach(type => {
                      if (tags.some(tag => tag.value === type.value)) return

                      console.log(tags, type, tags.some(tag => tag.value === type.value))

                      tags.push(type)
                    })
                  }
                })
              })

              tags.sort((a, b) => {
                var textA = a.value.toLowerCase()
                var textB = b.value.toLowerCase()
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
              })

              return tags
            }
          }
        }
      ]
    }
  ]
}
