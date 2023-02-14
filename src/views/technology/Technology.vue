<template>
	<main
		class="bg-[url('../src/assets/technology/background-technology-mobile.jpg')] bg-no-repeat bg-cover h-full text-white sm:bg-[url('../src/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('../src/assets/technology/background-technology-desktop.jpg')] lg:h-fit">
		<div
			class="w-[95%] mx-auto text-center md:text-left lg:w-[100%] lg:ml-[2em] lg:mt-[4em] lg:mb-[1.5em]">
			<h3
				class="font-['Barlow_Condensed'] uppercase tracking-[2.7px] md:text-[1.25rem] md:tracking-[3.4px] lg:tracking-[4.7px]">
				<span class="pr-[1em] opacity-[0.25] tracking-[0px]">03</span>Space
				launch 101
			</h3>
		</div>
		<section
			class="mt-[2em] pb-[2.5em] lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:pb-[6.6em]">
			<div class="w-[calc(100vw+1vw)] lg:w-fit">
				<picture class="">
					<source
						media="(min-width: 1024px)"
						:srcset="`${imageListPortrait[index]}`" />
					<img
						:src="`${imageListLandscape[index]}`"
						alt=""
						class="w-full h-full" />
				</picture>
			</div>
			<div class="lg:flex lg:items-center lg:ml-[10em]">
				<InlineNav
					:list="technology"
					itemIndicatorType="number"
					@index="getIndex" />
				<div class="text-center mt-[1.6em] lg:text-left">
					<h3
						class="font-['Barlow_Condensed'] text-[0.8rem] text-[#D0D6F9] tracking-[2.4px] uppercase ml-[4em]">
						The Terminology...
					</h3>
					<h2 class="font-['Bellefair'] text-[1.5rem] uppercase ml-[2em]">
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
import techImg1Portrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import techImg2Portrait from "../../assets/technology/image-spaceport-portrait.jpg";
import techImg3Portrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import techImg1Landscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import techImg2Landscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import techImg3Landscape from "../../assets/technology/image-space-capsule-landscape.jpg";

export default {
	name: "Technology",
	components: {
		InlineNav,
	},
	setup() {
		const technology = data.technology;
		let index = ref(0);
		let currentTab = ref(0);
		const imageListLandscape = [
			techImg1Landscape,
			techImg2Landscape,
			techImg3Landscape,
		];
		const imageListPortrait = [
			techImg1Portrait,
			techImg2Portrait,
			techImg3Portrait,
		];

		const getIndex = (value) => {
			index.value = value.value;
		};

		return {
			technology,
			index,
			currentTab,
			imageListLandscape,
			imageListPortrait,
			getIndex,
		};
	},
};
</script>
