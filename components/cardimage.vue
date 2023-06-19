<script setup>
import { ref } from 'vue';

const num = ref(6)
</script>
<template>
    <div class="relative h-[350px] min-w-[191px] lg:min-w-[381px] mr-12" v-for="n in num">
        <img class="rounded-full mx-auto" src="@/assets/css/images/unsplash_boat.jpg" alt="">
        <div class="text-center text-[#A0ABC0] mt-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima</p>
        </div>
    </div>
</template>