require('dotenv').config();

const meta_title = 'Neocratia'
const meta_description = 'If Democracy wre to be invented today, what would it be like? Meet neocratia'
const meta_image = '/img/manifesto.png'
const meta_twitter = '@neocratia1'
const meta_url = 'https://www.neocratia.org'

/*
<!-- Facebook -->
<meta property="og:description" content="If Democracy wre to be invented today, what would it be like? Meet neocratia">
<meta property="og:image" content="/img/manifesto.png">
<meta property="og:title" content="Neocratia">
<meta property="og:type" content="article">
<meta property="og:url" content="https://swapps.io/">
<!-- End Facebook -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:creator" content="@neocratia1">
<meta name="twitter:description" content="If Democracy wre to be invented today, what would it be like? Meet neocratia">
<meta name="twitter:image" content="/img/manifesto.png">
<meta name="twitter:site" content="@neocratia1">
<meta name="twitter:title" content="Neocratia">
<!-- End Twitter -->
*/
module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Neocratia',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Let\'s reinvent the way our laws are created.' // FIXME
      },
      {
        property: 'og:title',
        value: meta_title
      },
      {
        property: 'og:description',
        value: meta_description
      },
        {
        property: 'og:image',
        value: meta_image
      },
        {
        property: 'og:type',
        value: 'article'
      },
      {
        property: 'og:url',
        value: meta_url
      },
      {
        property: 'twitter:card',
        value: 'summary_large_image'
      },
      {
        property: 'twitter:creator',
        value: meta_twitter
      },
      {
        property: 'twitter:image',
        value: meta_image
      },
      {
        property: 'twitter:site',
        value: meta_twitter
      },
      {
        property: 'twitter:title',
        value: meta_title
      },
      {
        property: 'twitter:description',
        value: meta_description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/neo.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Muli:300,400,500,700|Material+Icons',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href: '//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css',
        integrity: 'sha384-NWR7tyUSPWhdW2+LEk+AIUBeuaYSuSVqWnAOkUTZzeMZA5IFw/SzFcpkUnDCjnu8',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#9c27b0'
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['vuetify', 'firebase']
  },
  plugins: ['~plugins/vuetify.js', '~plugins/firebase.js'],
  css: [{
    src: '~assets/style/app.styl',
    lang: 'styl'
  }, {
    src: '~assets/style/custom.styl',
    lang: 'styl'
  }],
  env: {
    firebase_url: process.env.FIREBASE_URL
  }
}
