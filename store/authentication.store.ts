import { parse, stringify } from 'zipson'
export const authStore =defineStore('authStore',() => {
    let refresh = ref("");
    let access = ref("");
    let user = ref(null);
    let isAuth = ref(false);
    let veridate = ref("");

    // ฟังชั่นที่รับมาเก็บใน store refreanh token 
    function register(email:string, user:string, password:string){
        const axios_instance = useNuxtApp().$axios;
        let data = JSON.stringify({
            "username": user,
            "email": email,
            "password": password,
            "service": "Local"
        });

        axios_instance.post('/api/register/',data=data)
        .then(async function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    async function login(email:string, password:string){
        const axios_instance = useNuxtApp().$axios;
        let data = JSON.stringify({
            "email": email,
            "password": password
        });

        await axios_instance.post('/api/login/',data=data)
        .then(async function (response) {
            refresh.value = response.data.refresh
            access.value = response.data.access
           await me();
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function verify(token:string){
        const axios_instance = useNuxtApp().$axios;
        let data = JSON.stringify({
            "uid": token
        });

        axios_instance.post('/api/verify/email/',data=data)
        .then(function (response) {
            // console.log(typeof(response.status))
            veridate.value = response.status + ""
            // veridate.value = 404 + ""
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    async function me(){
        const axios_instance = useNuxtApp().$axios;
        
       let header = {
        headers:{
            'Authorization': "Bearer " + access.value 
        }
       }
        await axios_instance.get('/api/auth/verify/',header)
        .then(async function (response) {
            let roles = useRolePlugins();
            roles.value = response.data.role
            user.value = response.data
            isAuth.value = true
            


        })
        .catch(function (error) {
            console.log(error);
        });

    }

    function refreshAccessToken (){
        const axios_instance = useNuxtApp().$axios;
        let data = JSON.stringify({
            "refresh":refresh.value
        })

        axios_instance.post('/api/token/refresh/',data=data)
        .then(async function(response){
            access.value = response.data.access
        })
    }

    function getIsAuth(){
        return isAuth.value
    }
    function getAccessToken(){
        return access.value
    }

    return {register, verify, login,user,refreshAccessToken,getIsAuth,getAccessToken, veridate,me}
},{
    persist:{
            key:'OldiesAuthStore', // ชื่อ key ที่จะเก็บใน localstorage
            paths:['user','isAuth','refresh','access'],
            storage: persistedState.sessionStorage,
            serializer:{
                deserialize:parse,
                serialize: stringify
            }

    }
})