<template>
	<main
		class="bg-[url('../src/assets/crew/background-crew-mobile.jpg')] bg-no-repeat bg-cover text-white sm:bg-[url('../src/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('../src/assets/crew/background-crew-desktop.jpg')]">
		<div
			class="w-[95%] mx-auto text-center md:text-left lg:w-[30%] lg:ml-[2em] lg:relative lg:top-[25px]">
			<h3
				class="font-['Barlow_Condensed'] uppercase tracking-[2.7px] md:text-[1.25rem] md:tracking-[3.4px] lg:tracking-[4.7px]">
				<span class="pr-[1em] opacity-[0.25] tracking-[0px]">02</span>Meet your
				crew
			</h3>
		</div>
		<section
			class="mt-[2em] md:flex md:flex-col-reverse lg:flex-row-reverse lg:items-center lg:justify-center">
			<div class="w-[80%] mx-auto border-b-[1px] border-b-[#383B4B] lg:w-fit">
				<img
					:src="`./src/${crew[index].images.png}`"
					alt=""
					class="h-[222px] mx-auto md:h-[572px] lg:h-[712px]" />
			</div>
			<div
				class="text-center pb-[6.5em] mx-auto w-[90.4%] relative md:flex md:flex-col md:items-center md:pb-[5.62em] lg:block lg:text-left lg:h-fit lg:w-[55%] lg:max-w-[500px]">
				<InlineNav
					:list="crew"
					@index="getIndex"
					class="md:absolute md:bottom-[40px]" />
				<h3
					class="text-[1rem] font-['Bellefair'] opacity-[0.5] uppercase mt-[2em] md:text-[1.5rem] lg:text-[2rem]">
					{{ crew[index].role }}
				</h3>
				<h3
					class="text-[1.75rem] font-['Bellefair'] uppercase md:text-[2.5rem] lg:text-[3.5rem]">
					{{ crew[index].name }}
				</h3>
				<p
					class="text-[0.94rem] text-[#D0D6F9] font-['Barlow'] leading-[25px] mt-[1em] mx-auto max-w-[313px] md:max-w-[458px] md:text-[1rem] lg:text-[1.13rem] lg:mx-0">
					{{ crew[index].bio }}
				</p>
			</div>
		</section>
	</main>
</template>

<script>
import InlineNav from "../../components/nav/InlineNav.vue";
import { ref } from "vue";
import data from "../../data.json";

export default {
	name: "Crew",
	components: {
		InlineNav,
	},
	setup() {
		const crew = data.crew;
		let index = ref(0);
		let currentTab = ref(0);

		const getIndex = (value) => {
			index.value = value.value;
		};

		return {
			crew,
			index,
			currentTab,
			getIndex,
		};
	},
};
</script>
