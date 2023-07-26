<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

import { authStore } from "~/store/authentication.store";
// initialize components based on data attribute selectors

const { login } = authStore();
const google = () => {
  navigateTo(useRuntimeConfig().public.URL_ENDPOINT + "/api/auth/google/",{
    external: true
  })
};
onMounted(() => {
  initFlowbite();
});

let email = ref("");
let password = ref("");
let typepassword = ref("password");
let showPasswordToggle = ref(false);

async function sendData() {
  await login(email.value, password.value);
  await navigateTo(email.value);
}

function open() {
  if (showPasswordToggle.value) {
    typepassword.value = "password";
  } else {
    typepassword.value = "text";
  }
  showPasswordToggle.value = !showPasswordToggle.value;
}
</script>

<template>
  <NuxtLayout>
    <!-- box of login image and tag login -->
    <main class="flex-col md:grid md:grid-cols-2 bg-Light">
      <section
        class="flex flex-col justify-center h-screen w-[65%] mx-auto md:w-full"
      >
        <p class="text-3xl text-Dark font-bold text-center mb-5">Login</p>
        <!-- logo -->
        <div class="flex justify-around md:justify-center">
          <div @click="google">
            <Icon name="logos:google-icon" class="w-[30px] h-[30px]" />
          </div>
          <a href="#">
            <Icon
              name="logos:facebook"
              class="w-[30px] h-[30px] md:mr-20 md:ml-20"
            />
          </a>
          <a href="#">
            <Icon name="logos:apple" class="w-[30px] h-[30px]" />
          </a>
        </div>
        <!-- horizon line-->
        <div class="inline-flex items-center justify-center w-full relative">
          <hr class="w-5/6 md:w-3/6 h-px my-8 bg-black border-0" />
          <span
            class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-Light left-1/2"
            >Or login with</span
          >
        </div>
        <!-- input box-->

        <form class="w-5/6 md:w-3/6 self-center" @submit.prevent="sendData">
          <!-- username -->
          <div class="mb-6">
            <input
              id="username"
              class="shadow-sm border border-Dark bg-Light text-Dark text-sm rounded-full block w-full p-2.5 focus:ring-5 focus:ring-SuperDark focus:outline-offset-2"
              placeholder="email"
              v-model="email"
              required
            />
          </div>
          <!-- password -->
          <div class="mb-6 relative flex">
            <input
              :type="typepassword"
              class="shadow-sm border border-Dark bg-Light text-Dark text-sm rounded-full block w-full p-2.5 focus:outline-0 focus:outline-offset-2 focus:outline-SuperDark"
              placeholder="password"
              v-model="password"
              required
            />

            <div
              class="absolute cursor-pointer w-5 h-5 inset-y-0 right-3 my-auto"
            >
              <Icon
                name="mdi:eye"
                class="text-black"
                @click="open"
                v-if="showPasswordToggle"
              />
              <Icon
                name="iconoir:eye-close"
                class="text-back"
                @click="open"
                v-else
              />
            </div>
            <!-- <img :src="open_image" @click="open" class="absolute cursor-pointer w-5 h-5 my-auto inset-y-0 right-3"/> -->
          </div>
          <!-- remember me -->
          <div class="flex items-center mb-4 justify-between">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 rounded-full bg-Gray focus:ring-0 focus:border-Dark"
                />
              </div>
              <label for="remember" class="ml-2 text-sm font-medium text-Dark"
                >Remember me</label
              >
            </div>

            <!-- model popup for forgive the password -->
            <button
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              class="text-Primary no-underline text-right"
              type="button"
            >
              Forget your password?
            </button>

            <div
              id="popup-modal"
              tabindex="-1"
              class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative w-full max-w-md max-h-full">
                <div class="relative bg-Light rounded-2xl shadow">
                  <!-- close the menu -->
                  <button
                    type="button"
                    class="absolute top-3 right-2.5 text-Dark bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    data-modal-hide="popup-modal"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                  <!-- in the menu -->
                  <div class="p-6">
                    <h3 class="mb-5 text-2xl font-semibold text-Dark">
                      Recover Password
                    </h3>
                    <p class="text-left w-[50vh] mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Totam
                    </p>
                    <input
                      id="email"
                      type="email"
                      data-modal-hide="popup-model"
                      class="shadow-sm border border-Dark text-Dark text-sm rounded-full block w-full p-2.5 mb-8 focus:ring-0 focus:border-Dark"
                      placeholder="Enter your email"
                    />
                    <button
                      data-modal-hide="popup-modal"
                      type="button"
                      class="text-Light bg-Primary font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 w-full"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- bottom to submit -->
          <button
            type="submit"
            class="text-Light bg-Primary hover:ring-2 font-medium rounded-full text-sm px-5 py-2.5 text-center w-full"
          >
            Login
          </button>
        </form>
        <!-- under login -->
        <div class="text-center my-5">
          <p class="mb-5 text-Dark">
            New User?
            <NuxtLink href="register" class="no-underline text-Primary"
              >Create accout</NuxtLink
            >
          </p>
          <p class="text-Dark">
            By login, I agree to Oldies's
            <a href="#" class="no-underline text-Primary">Terms of Use</a>
            and
            <a href="#" class="no-underline text-Primary">Privacy Policy</a>
            .
          </p>
        </div>
      </section>

      <img
        src="@/assets/css/images/backgroundLogin.png"
        alt=""
        class="h-[65vh] md:h-screen w-full md:order-first"
      />
    </main>
  </NuxtLayout>
</template>
