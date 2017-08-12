require('dotenv').config();

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Neocratia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' } // FIXME
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, // FIXME
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#9c27b0' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify', 'firebase']
  },
  plugins: ['~plugins/vuetify.js', '~plugins/firebase.js'],
  css: [
    { src: '~assets/style/app.styl', lang: 'styl' }
  ],
  env: {
    firebase_url: process.env.XFIREBASE_URL
  }
}
