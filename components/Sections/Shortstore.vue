<template>
    <main class="bg-Light py-32 px-4">
        <section class="text-center mb-5">
            <div class="mx-auto text-gray-900 text-xl md:w-[400px] mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div class="mx-auto text-gray-800 text-md md:w-[575px] mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vero officiis, corporis hic omnis inventore quos rerum, repudiandae voluptatem adipisci, necessitatibus expedita reprehenderit. Mollitia fuga nisi voluptatem voluptas saepe tempore.</div>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-5 overflow-hidden">
            <!-- start card-->
            <div class="justify-self-center" v-for="n in 6"> 
                <a href="#">
                    <img src="@/assets/css/images/WFPlaceholder.png" alt="" />
                </a>
                <div class="p-3">
                    
                    <span class="mb-2 text-2xl font-bold tracking-tight text-Secondary">Heading M</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bookmark float-right w-[10%] h-[10%] mt-1" viewBox="0 0 16 16"> <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/> </svg>
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bookmark-fill float-right" viewBox="0 0 16 16"> <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/> </svg> -->
                    <!-- width="27" height="37" -->
                    <!-- star 5.0 -->
                    <div class="flex items-start"> <!-- text-[#2D3648] -->
                        <svg aria-hidden="true" class="w-5 h-5 text-Warning" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span class="text-xs mr-5 ml-3 text-DarkGray">5.0 (12,000)</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                            <title>ionicons-v5-n</title>
                            <path d="M256,48c-79.5,0-144,61.39-144,137,0,87,96,224.87,131.25,272.49a15.77,15.77,0,0,0,25.5,0C304,409.89,400,272.07,400,185,400,109.39,335.5,48,256,48Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><circle cx="256" cy="192" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
                        </svg>
                        <span class="text-xs text-DarkGray">Shinjuku,Tokyo</span>
                    </div>
                    <span class="bg-[#CBD2E0] text-Dark text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Tag</span>
                    <span class="bg-[#CBD2E0] text-Dark text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Tag</span>
                    <p class="mt-2 text-Dark">฿3,000.00</p>
                </div>
            </div>
            <!-- end card -->
        </section>

    </main>
</template>