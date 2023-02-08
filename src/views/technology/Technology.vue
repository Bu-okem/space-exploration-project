<template>
	<main
		class="bg-[url('../src/assets/technology/background-technology-mobile.jpg')] bg-no-repeat bg-cover h-screen text-white sm:bg-[url('../src/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('../src/assets/technology/background-technology-desktop.jpg')]">
		<div
			class="w-[95%] mx-auto text-center md:text-left lg:w-[100%] lg:ml-[2em] lg:relative lg:top-[25px]">
			<h3
				class="font-['Barlow_Condensed'] uppercase tracking-[2.7px] md:text-[1.25rem] md:tracking-[3.4px] lg:tracking-[4.7px]">
				<span class="pr-[1em] opacity-[0.25] tracking-[0px]">03</span>Space
				launch 101
			</h3>
		</div>
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
		const destinations = data.destinations;
		let index = ref(0);
		let currentTab = ref(0);

		const getIndex = (value) => {
			index.value = value.value;
		};

		return {
			destinations,
			index,
			currentTab,
			getIndex,
		};
	},
};
</script>
