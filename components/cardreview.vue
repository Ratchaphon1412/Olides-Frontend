<script setup>
import { ref } from 'vue';

const num = ref(6)
</script>
<template>
    <div class="carousel carousel-center w-full p-4 space-x-9 rounded-box">
        <div class="carousel-item bg-Light flex-col rounded-3xl w-[30vw] p-10" v-for="n in num">
            <div class="text-center text-Dark mb-5">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <p class="w-11/12 text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aperiam illo similique dolore dolorem facere quos? Aperiam et illo possimus.</p>
            <div class="flex">
                <img src="@/assets/css/images/unsplash_boat.jpg" class="rounded-full w-[80px] h-[80px] mr-5" alt="profile">
                <p class="w-2/4">Lorem ipsum dolor sit amet consectetur</p>
            </div>
        </div>
    </div>
</template>