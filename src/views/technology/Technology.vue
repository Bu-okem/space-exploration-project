<template>
	<main
		class="bg-[url('../src/assets/technology/background-technology-mobile.jpg')] bg-no-repeat bg-cover h-full text-white sm:bg-[url('../src/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('../src/assets/technology/background-technology-desktop.jpg')]">
		<div
			class="w-[95%] mx-auto text-center md:text-left lg:w-[100%] lg:ml-[2em] lg:relative lg:top-[25px]">
			<h3
				class="font-['Barlow_Condensed'] uppercase tracking-[2.7px] md:text-[1.25rem] md:tracking-[3.4px] lg:tracking-[4.7px]">
				<span class="pr-[1em] opacity-[0.25] tracking-[0px]">03</span>Space
				launch 101
			</h3>
		</div>
		<section class="mt-[2em] pb-[2.5em] lg:flex lg:flex-row-reverse">
			<div class="w-[calc(100vw+1vw)]">
				<img
					:src="`/src/${technology[index].images.landscape}`"
					alt=""
					class="w-full" />
			</div>
			<div class="">
				<InlineNav
					:list="technology"
					itemIndicatorType="number"
					@index="getIndex" />
				<div class="text-center mt-[1.6em]">
					<h3
						class="font-['Barlow_Condensed'] text-[0.8rem] text-[#D0D6F9] tracking-[2.4px] uppercase">
						The Terminology...
					</h3>
					<h2 class="font-['Bellefair'] text-[1.5rem] uppercase">
						{{ technology[index].name }}
					</h2>
					<p
						class="font-['Barlow'] text-[0.94rem] text-[#D0D6F9] leading-[25px] mt-[1em] mx-auto w-[80%] max-w-[458px]">
						{{ technology[index].description }}
					</p>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import InlineNav from "../../components/nav/InlineNav.vue";
import { ref } from "vue";
import data from "../../data.json";

export default {
	name: "Technology",
	components: {
		InlineNav,
	},
	setup() {
		const technology = data.technology;
		let index = ref(0);
		let currentTab = ref(0);

		const getIndex = (value) => {
			index.value = value.value;
		};

		return {
			technology,
			index,
			currentTab,
			getIndex,
		};
	},
};
</script>
