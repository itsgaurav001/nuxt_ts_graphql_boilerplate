export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      getImageUrl: (url: string) : string => useRuntimeConfig().public.useS3 ? url?.replace('.digitaloceanspaces.com', '.cdn.digitaloceanspaces.com') : `${useRuntimeConfig().public.apiEndpoint}${url}`
    }
  }
})