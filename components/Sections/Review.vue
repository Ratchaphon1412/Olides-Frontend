<template>
  <main class="py-10 bg-black">
    <section class="mb-10 text-center font-semibold text-Gray">
      <p class="text-2xl">Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet</p>
    </section>
    <Slider :autoplay="0">
      <slide v-for="n in 5" :key="n">
        <CardReview />
      </slide>
    </Slider>
  </main>
</template>
