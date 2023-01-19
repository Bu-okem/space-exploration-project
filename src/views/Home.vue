<template>
	<main
		class="h-screen bg-[url('/src/assets/home/background-home-mobile.jpg')] bg-cover bg-no-repeat bg-center sm:bg-[url('/src/assets/home/background-home-tablet.jpg')] text-white md:h-fit lg:bg-[url('/src/assets/home/background-home-desktop.jpg')] lg:flex lg:items-center lg:h-screen">
		<div
			class="text-center h-[276px] md:h-[334px] lg:h-[382px] mt-[3em] mx-auto max-w-[330px] md:max-w-[450px] lg:max-w-[480px] lg:text-left">
			<h3
				class="uppercase font-['Barlow_Condensed'] font-extralight text-[1rem] md:text-[1.25rem] lg:text-[1.75rem]">
				So, you want to travel to
			</h3>
			<h1 class="uppercase text-[5rem] md:text-[9.4rem] font-[Bellefair]">
				Space
			</h1>
			<p
				class="text-[0.94rem] text-[#D0D6F9] mx-auto md:max-w-[400px] md:text-[1rem] lg:text-[1.13rem] lg:mx-0 font-[Barlow]">
				Let's face it; if you want to go to space, you might as well genuinely
				go to outer space and not hover kind of on the edge of it. Well sit
				back, and relax because we'll give a truly out of this world experience!
			</p>
		</div>

		<div class="mt-[1em] mx-auto max-w-fit md:mt-[11em] md:pb-[2em]">
			<router-link to="/destination">
				<button
					class="h-[150px] w-[150px] md:h-[242px] md:w-[242px] lg:h-[274px] lg:w-[274px] bg-white text-center text-black rounded-full">
					<h2
						class="uppercase text-[1.25rem] md:text-[2rem] lg:text-[2rem] font-[Bellefair]">
						Explore
					</h2>
				</button>
			</router-link>
		</div>
	</main>
</template>

<script>
import Nav from "../components/nav/Nav.vue";

export default {
	name: "Home",
	components: {
		Nav,
	},
};
</script>
