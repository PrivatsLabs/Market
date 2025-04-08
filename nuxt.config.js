import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'LafyShop',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Découvrez une large sélection de téléphones, tablettes et accessoires mobiles à des prix compétitifs. Livraison rapide et paiement sécurisé.' },
      { name: 'format-detection', content: 'telephone=no' },
      
      // Balises Open Graph pour Facebook, LinkedIn, etc.
      { hid: 'og:title', property: 'og:title', content: 'LafyShop - Ventes de Téléphones et Accessoires' },
      { hid: 'og:description', property: 'og:description', content: 'Découvrez une large sélection de téléphones, tablettes et accessoires mobiles à des prix compétitifs. Livraison rapide et paiement sécurisé.' },
      { hid: 'og:image', property: 'og:image', content: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/79/12/04/17044089/1540-1/tsp20241022182702/Apple-iPhone-13-6-1-5G-128-Go-Double-SIM-Noir-minuit.jpg' },
      { hid: 'og:url', property: 'og:url', content: 'https://lafyshop.com' },
      
      // Balises Twitter Cards pour Twitter
      { hid: 'twitter:title', name: 'twitter:title', content: 'LafyShop - Ventes de Téléphones et Accessoires' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Découvrez une large sélection de téléphones, tablettes et accessoires mobiles à des prix compétitifs. Livraison rapide et paiement sécurisé.' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://example.com/path/to/image.jpg' },
    
      // Autres balises SEO classiques
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'keywords', name: 'keywords', content: 'téléphones, accessoires, smartphones, tablettes, montre, électronique, achat téléphones' },
      { hid: 'author', name: "Privat's Labs", content: "Privat's Labs " },
      { hid: 'language', name: 'language', content: 'fr-FR' },
    
      // Icones et favicon
      { hid: 'icon', rel: 'icon', href: '/logo.ico' },
      { hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    
      // Données structurées pour le menu
      {
        hid: 'structured-data-menu',
        type: 'application/ld+json',
        content: `{
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          "name": "Accueil",
          "url": "https://lafyshop.com",
          "hasMenu": [
            {
              "@type": "WebPage",
              "name": "Téléphones",
              "url": "https://lafyshop.com/telephones"
            },
            {
              "@type": "WebPage",
              "name": "montres",
              "url": "https://lafyshop.com/montres"
            },
            {
              "@type": "WebPage",
              "name": "samsung",
              "url": "https://lafyshop.com/samsung"
            },
            {
              "@type": "WebPage",
              "name": "iphone",
              "url": "https://lafyshop.com/iphone"
            },
            {
              "@type": "WebPage",
              "name": "redmi",
              "url": "https://lafyshop.com/redmi"
            }
          ]
        }`
      }
    ]
    ,
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@400;600;700&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/firebase.js',
    // '~/plugins/auth.js',
    { src: "~/plugins/vue-toastification.js", mode: "client" }, // Charge uniquement côté client
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap', // Ajout du module sitemap
  ],

  sitemap: {
    hostname: 'https://www.lafyshops.com/', // Assurez-vous que l'URL est valide et ne contient pas de caractères invalides
    gzip: true,
    routes: async () => {
      try {
        // Routes statiques
        const staticRoutes = [
          '/',
          '/telephones',
          '/montres',
          '/samsung',
          '/iphone',
          '/redmi',
        ];

        // Ajoutez ici des routes dynamiques si nécessaire
        // Exemple : récupération des routes dynamiques depuis une API ou une base de données
        const dynamicRoutes = []; // Remplacez par vos routes dynamiques si nécessaire

        // Combinez les routes statiques et dynamiques
        return [...staticRoutes, ...dynamicRoutes].filter(route => {
          // Vérifiez que la route n'est pas nulle ou indéfinie
          return route && typeof route === 'string';
        });
      } catch (error) {
        console.error('Erreur lors de la génération des routes pour le sitemap :', error);
        return []; // Retournez un tableau vide en cas d'erreur
      }
    },
    exclude: [
      '/admin/**', // Exemple : exclure des routes spécifiques
      '/login',
    ],
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  buildDir: 'dist', // Indique à Nuxt.js d'utiliser le dossier 'dist' pour les fichiers buildés

  publicRuntimeConfig: {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  },

  env: {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  },

  render: {
    static: {
      cacheControl: false
    }
  },

  router: {
  },
}
