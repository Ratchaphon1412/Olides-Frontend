<template>
  <div
    class="relative h-52 w-full p-6 duration-50 bg-cover bg-center rounded-3xl mr-8 ml-8"
    id="background"
  >
    <div
      class="absolute bottom-0 left-0 right-0 flex flex-col rounded-3xl"
      id="linear"
    >
      <p class="text-Light text-4xl font-extrabold mb-3">Lorem</p>
      <p class="text-Light mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, atque
        repellendus magni
      </p>
    </div>
  </div>
</template>

<style scoped>
#background {
  background-image: url("@/assets/css/images/unsplash-slide.jpg");
}
#linear {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 20%,
    rgba(0, 0, 0, 0.7) 100%
  );
}
</style>
