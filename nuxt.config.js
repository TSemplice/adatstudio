const title = 'Adat Studio'
const description = 'ADAT is a multidisciplinary office focused on the field of Integrated Design, from large scale planning to interactive furniture and devices.'
const og_image = `${process.env.SITE_URL}/og-image.jpg`

export default {
  target: 'static',

  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'HandheldFriendly', content: 'True' },
      { hid: 'description', name: 'description', content: description},
      { key: 'serp_title', itemprop: 'name', content: title },
      { key: 'serp_description', itemprop: 'description', content: description },
      { key: 'serp_image', itemprop: 'image', content: og_image },
      { hid: 'og:title', name: 'og:title', content: title },
      { hid: 'og:description', name: 'og:description', content: description },
      { key: 'og:image', property: 'og:image', content: og_image },
      { key: 'twitter_card', name: 'twitter:card', content: 'summary_large_image' },
      { key: 'twitter_title', name: 'twitter:title', content: title },
      { key: 'twitter_description', name: 'twitter:description', content: description },
      { key: 'twitter_image', name: 'twitter:image', content: og_image },
      { name: 'msapplication-TitleColor', content: '#D60010' },
      { name: 'theme-color', content: '#FF8300' },
      { name: 'og:site_name', content: title },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'MobileOptimized', content: '320' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
    ],
    link: [
      { rel: 'preload', href: '/fonts/Texta-Regular.woff', as: 'font', type: 'font/woff', crossorigin: '' },
      { rel: 'preload', href: '/fonts/Texta-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
      { rel: 'preload', href: '/fonts/Texta-Bold.woff', as: 'font', type: 'font/woff', crossorigin: '' },
      { rel: 'preload', href: '/fonts/Texta-Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
      { rel: 'preload', href: '/fonts/Texta-Black.woff', as: 'font', type: 'font/woff', crossorigin: '' },
      { rel: 'preload', href: '/fonts/Texta-Black.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1E1E1E' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/font-import.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/directives',
    '~/plugins/preview.client',
    '~/plugins/filters',
    '~/plugins/router',
    '~/plugins/lazysizes.client',
    '~/plugins/preview.client',
    '~/plugins/locomotive.client',
    '~/plugins/google-analytics.client'
    // '~/plugins/asset-url'
    // '~/plugins/marquee.client'
  ],

  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/postcss8',
    '@/modules/sitemapRouteGenerator',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-i18n',
    ['nuxt-lazy-load', {
      directiveOnly: true,
      loadingClass: 'loading',
      loadedClass: 'loaded',
      observerConfig: {
        threshold: 0
      }
    }]
  ],

  // iubenda: {
  //   // Defaults:
  //   dev: true, // Activate module in dev environment.
  //   consentMode: true, // Use Google's consent mode.
  //   links: {
  //     enable: true, // Add script to include links to policy pages.
  //     style: 'nostyle', // Add styling to links. (nostyle, white or black)
  //     whiteLabel: true, // White label links.
  //     embed: true // Open links in embedded popup.
  //   },

  //   // Entire iubenda configuration
  //   config: {
  //     siteId: 2874349, // Required
  //     cookiePolicyId: 10302174, // Required

  //     // ...all other config options. (See Iubenda cookie banner script)
  //     // Example defaults:
  //     lang: 'it',
  //     gdprAppliesGlobally: false,
  //     cookiePolicyInOtherWindow: false,
  //     consentOnContinuedBrowsing: false,
  //     perPurposeConsent: true,
  //     banner: {
  //       acceptButtonDisplay: true,
  //       customizeButtonDisplay: true,
  //       rejectButtonDisplay: true,
  //       acceptButtonColor: '#E0E0D1',
  //       acceptButtonCaptionColor: '#323B3D',
  //       customizeButtonColor: '#323B3D',
  //       customizeButtonCaptionColor: '#84B4B7',
  //       rejectButtonColor: '#E0E0D1',
  //       rejectButtonCaptionColor: '#323B3D',
  //       closeButtonDisplay: false,
  //       position: 'float-bottom-right',
  //       textColor: '#E0E0D1',
  //       backgroundColor: '#0D5357',
  //       backgroundOverlay: true
  //     }
  //   }
  // },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: `${process.env.SITE_URL}/sitemap.xml`
  },

  pwa: {
    manifest: {
      name: title,
      short_name: 'Adat Studio',
      description,
      theme_color: '#1E1E1E'
    },
    icon: {
      fileName: 'icon.png'
    },
    workbox: {
      clientsClaim: false
    }
  },

  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    minimal: true,
    useCdn: true,
    additionalClients: {
      preview: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        minimal: true,
        useCdn: false
      }
    }
  },

  sitemap: {
    hostname: process.env.SITE_URL,
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  i18n: {
    seo: false,
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.js'
      },
      // {
      //   code: 'it',
      //   iso: 'it',
      //   name: 'Italiano',
      //   file: 'it.js'
      // }
    ],
    lazy: true,
    strategy: 'prefix',
    langDir: 'locales/',
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: 'en'
    },
    baseUrl: process.env.SITE_URL
  },

  generate: {
    fallback: true
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      'ssr-window',
      'gsap'
    ],
    postcss: {
      plugins: {
        'postcss-nested': {},
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    loaders: {
      cssModules: {
        modules: {
          // localIdentName: '[hash:base64:5]'
        }
      }
    }
  }
}
