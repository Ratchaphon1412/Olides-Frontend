import {authStore} from '~/store/authentication.store'

export default defineNuxtRouteMiddleware(async (to, from) => {
 
    const auth = authStore();

    if(!auth.getIsAuth()){
        return navigateTo('/login')
    }

})