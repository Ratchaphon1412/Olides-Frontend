export const authStore =defineStore('authStore',() => {
    let token = ref("");
    let access = ref("");

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

    function login(email:string, password:string){
        console.log(email, password)
        const axios_instance = useNuxtApp().$axios;
        let data = JSON.stringify({
            "email": email,
            "password": password
        });

        axios_instance.post('/api/login/',data=data)
        .then(function (response) {
            token.value = response.data.refresh
            access.value = response.data.access

            console.log(token.value)
            console.log(access.value)
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
        .then(async function (response) {
            await alert(JSON.stringify(response.data))
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return {register, verify, login, token, access}
},{
    persist: true
})