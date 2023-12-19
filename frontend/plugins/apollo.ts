import { createHttpLink, from } from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

export default defineNuxtPlugin((nuxtApp) => {
  
  // Get Nuxt runtimeConfig and apollo instance
  const runtimeConfig = useRuntimeConfig();
  const { $apollo } = useNuxtApp();

  const authLink = setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers
      },
    };
  });

  const uri = `${ process.server ? runtimeConfig.public.internalApiEndpoint : runtimeConfig.public.apiEndpoint }/graphql`
  const httpLink = authLink.concat(
    createHttpLink({ uri })
  );

  const errorLink = onError((err) => {
    nuxtApp.callHook('apollo:error', err);
  });

  // Set custom links in the apollo client (in this case, the default apollo client)
  $apollo.defaultClient.setLink(from([errorLink, httpLink]));

  nuxtApp.hook('apollo:error', (error) => {
    console.error(error);
  });
});