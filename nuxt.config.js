export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'social-network-legion-frontend',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: []
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '@/assets/scss/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.ts' },
    { src: '~/plugins/api.ts' },
    { src: '~/plugins/font-awesome.ts' },
    { src: '~/plugins/echo.ts' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: 8888
  },

  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
    echo: {
      key: process.env.ECHO_KEY,
      cluster: process.env.ECHO_CLUSTER,
      endpoint: process.env.ECHO_ENDPOINT
    }
  },

  loading: '~/components/LoadingBar.vue',

  toast: {
    position: 'top-center',
    duration: 1500,
    theme: 'bubble'
  },

  /**
   * @url https://auth.nuxtjs.org/
   */
  auth: {
    redirect: {
      login: '/auth',
      logout: '/auth',
      callback: '/auth',
      home: '/'
    },
    strategies: {
      default: {
        scheme: '~/schemes/DefaultScheme',
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/users/me', method: 'get' },
        },
        token: {
          property: 'token'
        },
        user: {
          property: 'data'
        }
      }
    }
  }
}
