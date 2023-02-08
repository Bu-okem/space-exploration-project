<template>
	<main
		class="bg-[url('../src/assets/crew/background-crew-mobile.jpg')] bg-no-repeat bg-cover text-white sm:bg-[url('../src/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('../src/assets/crew/background-crew-desktop.jpg')]">
		<div
			class="w-[95%] mx-auto text-center md:text-left lg:w-[100%] lg:ml-[2em] lg:relative lg:top-[25px]">
			<h3
				class="font-['Barlow_Condensed'] uppercase tracking-[2.7px] md:text-[1.25rem] md:tracking-[3.4px] lg:tracking-[4.7px]">
				<span class="pr-[1em] opacity-[0.25] tracking-[0px]">02</span>Meet your
				crew
			</h3>
		</div>
		<section>
			<div class="">
				<img :src="`/src/${crew[index].images.png}`" alt="" />
			</div>
			<div class="">
				<InlineNav :list="crew" @index="getIndex" />
				<h3>{{ crew[index].role }}</h3>
				<h3>{{ crew[index].name }}</h3>
				<p>{{ crew[index].bio }}</p>
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
