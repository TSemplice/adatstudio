import S from '@sanity/desk-tool/structure-builder'

import {
  MdSettings,
  MdMenu,
  MdAssignment,
  MdCategory,
  MdAllOut,
  MdArticle,
  MdFilePresent
}
from 'react-icons/md'

export default () => {
  return S.list()
  .id('__root__')
  .title('Adat Studio Website Content')
  .items([
    S.listItem()
      .title('Site Settings')
      .icon(MdSettings)
      .child(S.documentTypeList('settings')),
    S.divider(),
    S.listItem()
      .title('Nav')
      .icon(MdMenu)
      .child(S.documentTypeList('menu')),
    S.divider(),
    S.listItem()
      .title('Pages')
      .icon(MdAssignment)
      .child(S.documentTypeList('page')),
    S.divider(),
    // S.listItem()
    //   .title('Menus')
    //   .icon(MdCategory)
    //   .child(S.documentTypeList('category')),
    // S.divider(),
    S.listItem()
      .title('Projects')
      .icon(MdAllOut)
      .child(S.documentTypeList('project')),
    S.divider(),
    // S.listItem()
    //   .title('Journals')
    //   .icon(MdArticle)
    //   .child(S.documentTypeList('journal')),
    // S.divider(),
    // S.listItem()
    //   .title('Press / Release')
    //   .icon(MdFilePresent)
    //   .child(S.documentTypeList('press')),
    ...S.documentTypeListItems().filter(listItem => !['settings', 'menu', 'page', 'category', 'product', 'journal', 'press', 'media.tag', 'project'].includes(listItem.getId()))
  ]
  )
}

