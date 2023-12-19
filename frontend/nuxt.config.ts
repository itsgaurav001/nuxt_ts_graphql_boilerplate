// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/apollo'],
	apollo: {
    clients: {
      default: {
        httpEndpoint: ''
      },
    },
  },
  runtimeConfig: {
		public: {
      // Overwritten with ENV variables (on local these are set in docker-compose)
			apiEndpoint: '',
			internalApiEndpoint: '',
      useS3: false
    }
	}
})