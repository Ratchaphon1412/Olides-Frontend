<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})


</script>

<template>
    <main class="bg-black">
        <p class="text-center text-Light text-4xl font-semibold pt-52 pb-10">Why Choose ODLES</p>
        <section class="flex md:flex-row flex-col justify-around pb-52">
            <!-- image IphoneX ODLES -->
            <img src="@/assets/css/images/iPhoneX.png" class="w-fit self-center" alt="">
            <div class="self-center w-[80vw] md:w-[50vw]">
                <div class="carousel w-full">
                    <div id="slide1" class="carousel-item relative w-full h-96">
                        <div class="text-Light w-full self-center">
                            <p class="text-3xl font-semibold text-center">PRICING</p>
                            <p class="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, veniam obcaecati, atque, sit explicabo laboriosam doloribus enim iure officia excepturi esse consequuntur est! Tenetur quaerat commodi</p>
                        </div>
                        <div class="absolute flex justify-center transform translate-y-20 left-5 right-5 top-1/2">
                            <a href="#slide3" class="btn btn-circle btn-ghost">❮</a>
                            <div class="self-center">
                                <Icon name="fad:armrecording"/>
                                <Icon name="fad:mono"/>
                                <Icon name="fad:mono"/>
                            </div>
                            <a href="#slide2" class="btn btn-circle btn-ghost">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full h-96">
                        <div class="text-Light w-full self-center">
                            <p class="text-3xl font-semibold text-center">PRICING</p>
                            <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis facere voluptas impedit non enim corporis. Fugiat, non unde pariatur ex itaque aliquid, odit quaerat molestias facilis, facere deserunt nostrum excepturi.</p>
                        </div>
                        <div class="absolute flex justify-center transform translate-y-20 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle btn-ghost">❮</a>
                            <div class="self-center">
                                <Icon name="fad:mono"/>
                                <Icon name="fad:armrecording"/>
                                <Icon name="fad:mono"/> 
                            </div>
                            <a href="#slide3" class="btn btn-circle btn-ghost">❯</a>
                        </div>
                    </div>
                
                    <div id="slide3" class="carousel-item relative w-full h-96">
                        <div class="text-Light w-full self-center">
                            <p class="text-3xl font-semibold text-center">PRICING</p>
                            <p class="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat expedita tempore nesciunt quis eveniet illo vitae at assumenda inventore, est nostrum mollitia saepe. Illo iure itaque numquam id in.</p>
                        </div>
                        <div class="absolute flex justify-center transform translate-y-20 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle btn-ghost">❮</a>
                            <div class="self-center">
                                <Icon name="fad:mono"/>
                                <Icon name="fad:mono"/> 
                                <Icon name="fad:armrecording"/>
                            </div>
                            <a href="#slide1" class="btn btn-circle btn-ghost">❯</a>
                        </div>
                    </div>

                </div>
            </div>

    </section>
</main>
</template>