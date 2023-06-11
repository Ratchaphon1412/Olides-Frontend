<script setup>

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
    <nav class="border-gray-200" id="glass">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <!-- show logo and banners-->
            <a href="#" class="flex items-center">
                <img src="@/assets/css/images/Oldies_Logo_1.png" class="h-8 mr-3" alt="Logo OLDIES" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-[#39CCCC]">OLDIES</span>
            </a>
            
            <!-- new search web-->
            <div class="flex grow px-4">
                <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only hidden lg:flex">Your
                    Email</label>
                <button id="dropdown-button" data-dropdown-toggle="dropdown"
                    class="flex-shrink-0 z-10 lg:inline-flex hidden items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 border  rounded-l-lg focus:ring-4 focus:outline-none focus:ring-gray-100"
                    type="button" style="background: rgba(255, 255, 255, 0.32); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(6.1px); -webkit-backdrop-filter: blur(6.1px);">
                    All categories 
                    <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg></button>
                <div id="dropdown"
                    class="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    style="background: rgba(255, 255, 255, 0.32); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(6.1px); -webkit-backdrop-filter: blur(6.1px);">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                        <li>
                            <button type="button"
                                class="inline-flex w-full px-4 py-2">Mockups</button>
                        </li>
                        <li>
                            <button type="button"
                                class="inline-flex w-full px-4 py-2">Templates</button>
                        </li>
                        <li>
                            <button type="button"
                                class="inline-flex w-full px-4 py-2">Design</button>
                        </li>
                        <li>
                            <button type="button"
                                class="inline-flex w-full px-4 py-2">Logos</button>
                        </li>
                    </ul>
                </div>
                <div class="relative w-full hidden lg:block">
                    <input type="search" id="search-dropdown"
                        class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        style="background: rgba(255, 255, 255, 0.32); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(6.1px); -webkit-backdrop-filter: blur(6.1px);"
                        placeholder="Search Mockups, Logos, Design Templates..." required>
                    <button type="submit"
                        class="absolute top-0 right-0 p-2.5 text-sm font-medium bg-[#39CCCC] text-white rounded-r-lg border focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </div>
            <!-- search web -->
            <!-- <div class="relative grow px-4">
                <div class="absolute inset-y-0 left-0 hidden items-center pl-7 pointer-events-none lg:flex">
                    <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar"
                    class="hidden w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 lg:block"
                    placeholder="Search...">
            </div> -->

            <!-- button show when mobile -->
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false"
                class="lg:hidden text-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Search</span>
            </button>
            <button data-collapse-toggle="navbar-dropdown" type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-dropdown" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>

            <!-- new search from search icon-->
            <div class="hidden w-full lg:block lg:w-auto" id="navbar-search">
                <div class="flex">
                    <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only flex lg:hidden">Your
                        Email</label>
                    <button id="dropdown-button" data-dropdown-toggle="dropdown"
                        class="flex-shrink-0 z-10 lg:hidden inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                        style="background: rgba(255, 255, 255, 0.32); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(6.1px); -webkit-backdrop-filter: blur(6.1px);"
                        type="button">
                        All categories 
                        <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg></button>
                    <div id="dropdown"
                        class="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        style="background: rgba(255, 255, 255, 0.32); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(6.1px); -webkit-backdrop-filter: blur(6.1px);">
                        <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button"
                                    class="inline-flex w-full px-4 py-2">Mockups</button>
                            </li>
                            <li>
                                <button type="button"
                                    class="inline-flex w-full px-4 py-2">Templates</button>
                            </li>
                            <li>
                                <button type="button"
                                    class="inline-flex w-full px-4 py-2">Design</button>
                            </li>
                            <li>
                                <button type="button"
                                    class="inline-flex w-full px-4 py-2">Logos</button>
                            </li>
                        </ul>
                    </div>
                    <div class="relative w-full block lg:hidden">
                        <input type="search" id="search-dropdown"
                            class="block p-2.5 w-full z-20 text-sm text-gray-900  rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            style="background: rgba(255, 255, 255, 0.32); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(6.1px); -webkit-backdrop-filter: blur(6.1px);"
                            placeholder="Search Mockups, Logos, Design Templates..." required>
                        <button type="submit"
                            class="absolute top-0 right-0 p-2.5 text-sm font-medium bg-[#39CCCC] text-white  rounded-r-lg border focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- search from search icon-->
            <!-- <div class="hidden w-full lg:block lg:w-auto" id="navbar-search">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none lg:hidden">
                        <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbar"
                        class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 lg:hidden"
                        placeholder="Search...">
                </div>
            </div> -->

            <!-- show web and mobile -->
            <div class="hidden w-full lg:block lg:w-auto" id="navbar-dropdown">
                <ul
                    class="flex flex-col font-medium p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0">
                    <li class="mt-1">
                        <!-- dropdown country -->
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                            class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:w-auto">
                            <Icon name="flag:us-4x3" class="h-[20px] w-[20px] mr-2" /> English (US)
                            <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <!-- Dropdown menu country-->
                        <div id="dropdownNavbar"
                            style="background: rgba(255, 255, 255, 0.32); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(6.1px); -webkit-backdrop-filter: blur(6.1px); border: 1px solid rgb(0, 0, 0);"
                            class="z-10 hidden font-normal divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="#" class="block px-4 py-2">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2">Earnings</a>
                                </li>
                            </ul>
                            <div class="py-1">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700">Sign out</a>
                            </div>
                        </div>
                    </li>

                    <li class="mt-1">
                        <!-- dropdown currency -->
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                            class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:w-auto">
                            <Icon name="ant-design:dollar-outlined" class="h-[20px] mr-2" />USD
                            <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <!-- Dropdown menu currency -->
                        <div id="dropdownNavbar"
                            style="background: rgba(255, 255, 255, 0.32); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(6.1px); -webkit-backdrop-filter: blur(6.1px); border: 1px solid rgba(0,0,0);"
                            class="z-10 hidden font-normal divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="#" class="block px-4 py-2">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2">Earnings</a>
                                </li>
                            </ul>
                            <div class="py-1">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700">Sign out</a>
                            </div>
                        </div>
                    </li>

                    <li class="mt-1">
                        <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">Login</a>
                </li>

                <li>
                    <button type="button"
                        class="text-white bg-[#39CCCC] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 lg:mr-0">Create
                        Account</button>
                </li>
            </ul>
        </div>
    </div>
</nav></template>

<style scoped>#glass {
    background: rgba(255, 255, 255, 0);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
}</style>