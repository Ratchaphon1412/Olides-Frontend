<template>
	<main class="bg-[#001F3F] px-10 pb-10">
		<div class="flex container mx-auto md:justify-center">
			<p class="text-white text-2xl md:text-3xl font-extrabold my-5 px-20">Choose Services</p>
			<button class="bg-transparent border-white rounded-lg border-2 text-white my-4 px-5 md:px-5 md:my-5 md:mx-20">See More</button>
		</div>
		<!-- show slide -->
		<section class="w-screen items-center container m-auto overflow-x-auto flex">
			<card/>
		</section>
	</main>
	<main class="bg-[#101529] px-10">
		<div class="flex justify-between pb-10 px-10">
			<p class="text-white text-2xl md:text-3xl font-extrabold my-5 md:px-20">Top Facilities</p>
			<button class="bg-transparent border-white rounded-lg border-2 text-white my-4 px-5 md:px-5 md:my-5 md:mx-20">See More</button>
		</div>
		<!--show slide -->
		<section class="w-screen items-center container m-auto overflow-x-auto flex">
			<cardimage/>
		</section>
	</main>
</template>

<style scoped>
section::-webkit-scrollbar{
	display: none;
}
</style>