import axios from "axios";
import { authStore } from "~/store/authentication.store"; 

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

  axios_instance.interceptors.response.use((response) =>{
    return response
  },async function (error){
    const originalRequest = error.config;
    console.log(error)
    if (error.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;
        const store = authStore()
        store.refreshAccessToken()
        const accessToken = store.getAccessToken()
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
        return axios_instance(originalRequest);

    }
    return Promise.reject(error);
  })

  return {
    provide: {
      axios: axios_instance
    }
  }
})


