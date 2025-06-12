export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'devfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css',
    '~/assets/css/resume.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/assets/js/main.js', mode: 'client' },
    { src: '~/vendor/php-email-form/validate.js', mode: 'client' },
    { src: '~/vendor/typed.js/typed.min.js', mode: 'client' },
    { src: '~/vendor/swiper/swiper-bundle.min.js', mode: 'client' },
    { src: '~/vendor/glightbox/js/glightbox.min.js', mode: 'client' },
    { src: '~/vendor/bootstrap/js/bootstrap.bundle.min.js', mode: 'client' },
    { src: '~/vendor/purecounter/purecounter_vanilla.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
