// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import page from './documents/page'
// import category from './documents/category'
import menu from './documents/menu'
import settings from './documents/settings'
import product from './documents/project'
// import journal from './documents/journal'
// import press from './documents/press'

import meta from './components/meta'
import nav from './components/nav'
import cta from './components/cta'
import altImage from './components/altImage'
// import customBlockText from './components/customBlockText'
import footer from './components/footer'
import textBlock from './components/textBlock'
import projectsGallery from './components/projectsGallery'
import contactBlock from './components/contactBlock'
import list from './components/list'
// import menuGallery from './components/menuGallery'
// import backgroundedGalleryLauncher from './components/backgroundedGalleryLauncher'
// import news from './components/news'
// import newsItem from './components/newsItem'
// import customNews from './components/customNews'
// import hero from './components/hero'
// import centeredParagraph from './components/centeredParagraph'
// import galleryLauncher from './components/galleryLauncher'
// import doubleImageText from './components/doubleImageText'
// import quote from './components/quote'
// import doubleText from './components/doubleText'
// import labeledText from './components/labeledText'
// import hours from './components/hours'
// import hour from './components/hour'
// import titleSubtitle from './components/titleSubtitle'
// import allergenes from './components/allergenes'
// import videoPlayer from './components/videoPlayer'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    page,
    // category,
    menu,
    settings,
    product,
    // journal,
    // press,

    meta,
    nav,
    cta,
    altImage,
    textBlock,
    projectsGallery,
    contactBlock,
    list
    // customBlockText,
    // footer,
    // menuGallery,
    // backgroundedGalleryLauncher,
    // news,
    // newsItem,
    // customNews,
    // hero,
    // centeredParagraph,
    // galleryLauncher,
    // doubleImageText,
    // quote,
    // doubleText,
    // labeledText,
    // hours,
    // hour,
    // titleSubtitle,
    // allergenes,
    // videoPlayer
  ]),
})
