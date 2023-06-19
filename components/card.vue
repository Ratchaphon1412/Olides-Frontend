<script setup>
import { ref } from 'vue';

const num = ref(6);
</script>
<template>
    <div class="relative h-[300px] min-w-[191px] lg:min-w-[381px] duration-50 bg-cover bg-center rounded-3xl mr-12" id="background" v-for="n in num">
        <div class="absolute bottom-0 left-0 rounded-3xl px-10" id="linear">
            <p class="text-[#ffffff] text-4xl font-extrabold mb-3">Lorem</p>
            <p class="text-[#ffffff] mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, atque repellendus
                magni</p>
        </div>
    </div>
</template>

<style scoped>
#background{
    background-image: url('@/assets/css/images/unsplash-slide.jpg');
}
#linear{
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.7) 100%);
}
</style>