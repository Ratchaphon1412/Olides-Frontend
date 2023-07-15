import axios from "axios"; 

export default defineNuxtPlugin(() => {
  // Doing something with nuxtApp
  const config = useRuntimeConfig();
  const axios_instance = axios.create({
    baseURL : config.public.URL_ENDPOINT,
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
      }
  });

  return {
    provide: {
      axios: axios_instance
    }
  }
})


