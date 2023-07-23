<script setup lang="ts">
import axios from "axios"

// import store
import { authStore } from "~/store/authentication.store";

let email = ref("")
let user = ref("")
let password = ref("")
let confrimpassword = ref("")

// password
let realtypepassword = ref("")
realtypepassword.value = "password"
let contypepassword = ref("")
contypepassword.value = "password"

let openrealimage = ref("")
openrealimage.value = "/_nuxt/assets/css/images/eye-svgrepo.png"
let openconfrimimage = ref("")
openconfrimimage.value = "/_nuxt/assets/css/images/eye-svgrepo.png"
const { register } = authStore();

function sendData(){
    if (password.value === confrimpassword.value){
        register(email.value, user.value, password.value);
    }else{
        // show idalock
    }
}

function openreal(){
  if(realtypepassword.value === "password"){
    realtypepassword.value = "text"
    openrealimage.value = "/_nuxt/assets/css/images/eye-closed-svgrepo.png"
  }else{
    realtypepassword.value = "password"
    openrealimage.value = "/_nuxt/assets/css/images/eye-svgrepo.png"
  }
}

function openconfrim(){
    if(contypepassword.value === "password"){
    contypepassword.value = "text"
    openconfrimimage.value = "/_nuxt/assets/css/images/eye-closed-svgrepo.png"
  }else{
    contypepassword.value = "password"
    openconfrimimage.value = "/_nuxt/assets/css/images/eye-svgrepo.png"
  }
}
</script>
<template>
    <NuxtLayout>
        <main class="flex-col md:grid md:grid-cols-2 bg-Light">
            <section class="flex flex-col justify-center w-[65%] mx-auto md:w-full h-screen">
                <p class="text-3xl text-Dark font-bold text-center mb-5">Create account</p>
                <!-- logo -->
                <div class="flex justify-center">
                    <a href="#">
                        <Icon name="logos:google-icon" class="w-[30px] h-[30px]" />
                    </a>
                    <a href="#">
                        <Icon name="logos:facebook" class="w-[30px] h-[30px] mr-24 ml-24" />
                    </a>
                    <a href="#">
                        <Icon name="logos:apple" class="w-[30px] h-[30px]" />
                    </a>
                </div>
                <!-- horizon line-->
                <div class="inline-flex items-center justify-center w-full relative">
                    <hr class="w-5/6 md:w-3/6 h-px my-8 bg-black border-0 ">
                    <span class="absolute px-3 font-medium text-Dark -translate-x-1/2 bg-white left-1/2">Or create account with</span>
                </div>
    
                <!-- input box -->
                <form class="w-5/6 md:w-3/6 self-center my-5" @submit.prevent="sendData">
                    <!-- email login -->
                    <div class="mb-6">
                        <input type="email" id="email" 
                        class="shadow-sm border border-black text-Dark bg-Light text-sm rounded-full block w-full p-2.5 focus:ring-0 focus:border-Dark" 
                        placeholder="your@gmail.com" v-model="email" required>
                    </div>
                    <!-- username -->
                    <div class="mb-6">
                        <input id="username"
                        class="shadow-sm border border-black text-Dark bg-Light text-sm rounded-full block w-full p-2.5 focus:ring-0 focus:border-Dark"
                        placeholder="username" v-model="user" required>
                    </div>
                    <!-- password -->
                    <div class="mb-6 relative flex">
                        <input :type="realtypepassword"
                            class="shadow-sm border border-black text-Dark bg-Light text-sm rounded-full block w-full p-2.5 focus:ring-0 focus:border-Dark"
                            placeholder="password" v-model="password" required>
                        <img :src="openrealimage" @click="openreal" class="absolute cursor-pointer w-5 h-5 my-auto inset-y-0 right-3"/>
                    </div>
    
                    <!-- confrim password -->
                    <div class="mb-6 relative flex">
                        <input :type="contypepassword"
                            class="shadow-sm border border-black text-Dark text-sm rounded-full block w-full p-2.5 focus:ring-0 focus:border-Dark"
                            placeholder="comfrim password" v-model="confrimpassword" required>
                        <img :src="openconfrimimage" @click="openconfrim" class="absolute cursor-pointer w-5 h-5 my-auto inset-y-0 right-3"/>
                    </div>
    
                    <!-- bottom to submit -->
                    <button type="submit"
                        class="text-Light bg-Primary hover:ring-2 font-medium rounded-full text-sm px-5 py-2.5 text-center w-full focus:ring-0 focus:border-Dark">
                        Create an Account
                    </button>
                </form>
                <p class="text-center">
                    <NuxtLink href="/login" class="text-Primary">Back to login</NuxtLink>
                </p>
            </section>
            <img src="@/assets/css/images/backgroundRegister.png" alt="" class="h-screen w-full md:h-screen">
        </main>
    </NuxtLayout>

</template>