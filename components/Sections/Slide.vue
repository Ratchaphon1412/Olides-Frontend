<template>
	<main class="bg-Light px-10 pb-10">
		<div class="flex md:justify-between">
			<p class="text-Dark text-2xl md:text-3xl font-extrabold my-5 grow md:grow-0 md:mx-14">Choose Services</p>
			<button class="bg-transparent border-Dark rounded-lg border-2 text-Dark my-4 w-[20%] md:my-5 md:mx-14">See More</button>
		</div>
		<!-- show slide -->
		<section class="w-[95%] items-center mx-auto overflow-x-auto flex">
			<card v-for="n in 6"/>
		</section>
	</main>
	<main class="bg-Light px-10">
		<div class="flex justify-center pb-10 px-10">
			<p class="text-Dark text-2xl md:text-3xl font-extrabold my-5 md:px-20">Top Facilities</p>
			<!-- <button class="bg-transparent border-Dark rounded-lg border-2 text-Dark my-4 px-5 md:px-5 md:my-5 md:mx-20">See More</button> -->
		</div>
		<!--show slide -->
		<section class="w-[95%] items-center container m-auto overflow-x-auto flex">
			<cardimage/>
		</section>
	</main>
</template>

<style scoped>
section::-webkit-scrollbar{
	display: none;
}
</style>