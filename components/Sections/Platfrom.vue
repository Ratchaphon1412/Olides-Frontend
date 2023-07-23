<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
const itemsShow = 1;
const breakpointsDefault = {
  480: {
    itemsToShow: 1,
    snapAlign: "center",
  },
};
const paragraph = [
  {
    title: "PRICING",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, veniam obcaecati, atque, sit explicabo laboriosam doloribus enim iure officia excepturi esse consequuntur est! Tenetur quaerat commodi",
  },
  {
    title: "EASY",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis facere voluptas impedit non enim corporis. Fugiat, non unde pariatur ex itaque aliquid, odit quaerat molestias facilis, facere deserunt nostrum excepturi.",
  },
  {
    title: "SECURITY",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat expedita tempore nesciunt quis eveniet illo vitae at assumenda inventore, est nostrum mollitia saepe. Illo iure itaque numquam id in.",
  },
];
</script>

<template>
  <main class="bg-black">
    <p class="text-center text-Light text-4xl font-semibold p-24">
      Why Choose ODLES
    </p>
    <section class="flex md:flex-row flex-col justify-around">
      <!-- image IphoneX ODLES -->
      <img
        src="@/assets/css/images/iPhoneX.png"
        class="w-fit self-center"
        alt=""
      />
      <div class="self-center md:w-1/2 w-2/3">
        <Slider :itemsShow="itemsShow" :breakpointsSetup="breakpointsDefault">
          <slide v-for="para in paragraph" :key="para">
            <div class="text-Light w-full m-8">
              <p class="text-3xl font-semibold text-center">{{ para.title }}</p>
              <p class="text-left">{{ para.text }}</p>
            </div>
          </slide>
          <template #control>
            <pagination />
          </template>
        </Slider>
      </div>
    </section>
  </main>
</template>
