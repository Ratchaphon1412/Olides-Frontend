<template>
    <Navbar />
    <main class="grid grid-cols-2 bg-white">
        <section class="flex flex-col justify-center">
            <p class="text-3xl text-[#101529] font-bold text-center mb-5">Create account</p>
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
                <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2">Or create account with</span>
            </div>

            <!-- input box -->
            <form class="w-5/6 md:w-3/6 self-center my-5">
                <!-- email login -->
                <div class="mb-6">
                    <input type="email" id="email" 
                    class="shadow-sm border border-black text-gray-900 text-sm rounded-full block w-full p-2.5" 
                    placeholder="your@gmail.com" required>
                </div>
                <!-- username -->
                <div class="mb-6">
                    <input id="username"
                    class="shadow-sm border border-black text-gray-900 bg-white text-sm rounded-full block w-full p-2.5"
                    placeholder="username" required>
                </div>
                <!-- password -->
                <div class="mb-6">
                    <input type="password"
                        class="shadow-sm border border-black text-gray-900 text-sm rounded-full block w-full p-2.5"
                        placeholder="password" required>
                </div>

                <!-- password -->
                <div class="mb-6">
                    <input type="password"
                        class="shadow-sm border border-black text-gray-900 text-sm rounded-full block w-full p-2.5"
                        placeholder="password" required>
                </div>

                <!-- bottom to submit -->
                <button type="submit"
                    class="text-white bg-[#39CCCC] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center w-full">
                    Create an Account
                </button>
            </form>
            <p class="text-center">
                New User?
                <a href="#" class="text-[#39CCCC]">Create account</a>
            </p>
        </section>
        <img src="@/assets/css/images/backgroundRegister.png" alt="" class="h-screen w-full">
    </main>
    <Footer />
</template>