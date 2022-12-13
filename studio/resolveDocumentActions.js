// resolveDocumentActions.js
import React from 'react';
import { EarthGlobeIcon } from '@sanity/icons';
import defaultResolve from 'part:@sanity/base/document-actions';
import client from 'part:@sanity/base/client';
// import asyncGetLink from '...';

const isPreviewable = document => {
  // TODO: implement this function
}

const noTypes = ['product', 'resource', 'setting', 'menu']

export function OpenPreview({ draft, published }) {
  const document = draft || published;

  if (!document) {
    return null;
  }

  if (noTypes.some(type => type === document._type)) {
    return null;
  }

  return {
    label: 'Open Preview',
    shortcut: 'cmd+shift+o',
    icon: () => (
      <EarthGlobeIcon
        style={{ width: 25, height: 25, transform: 'translateX(-4px)' }}
      />
    ),
    // `onHandle` is where we can sneak in `async`
    //          👇
    onHandle: async () => {
      let url = ''
      let slug = ''
      let lang = 'en'

      switch (document._type) {
        case 'page':
          slug = document.slug.current
          url = !slug || slug.includes('homepage') ? '' : `${slug}/`
          break
        // case 'project':
        //   slug = document.slug.current

        //   url = `/${slug}/`
        //   break
        // case 'journal':
        //   slug = document.slug.current

        //   url = `journal/${slug}/`
        //   break
        default:
          url = ''
      }

      window.open(`${process.env.SANITY_STUDIO_PREVIEW_URL}/${lang}/${url}?preview=true`)
    },
  };
}

export default function resolveDocumentActions(props) {
  const [firstDefaultAction, ...restOfDefaultActions] = defaultResolve(props);

  return [firstDefaultAction, OpenPreview, ...restOfDefaultActions];
}
