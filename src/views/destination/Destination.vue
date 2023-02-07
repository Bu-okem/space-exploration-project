<template>
	<main
		class="bg-[url('../src/assets/destination/background-destination-mobile.jpg')] bg-no-repeat bg-cover text-white sm:bg-[url('../src/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('../src/assets/destination/background-destination-desktop.jpg')]">
		<div class="text-center">
			<h3 class="font-['Barlow_Condensed'] uppercase">
				<span class="pr-[1em]">01</span>Pick your destination
			</h3>
		</div>

		<div class="h-[170px] w-[170px] mx-auto mt-[2.5em]">
			<img :src="`/src/${destinations[index].images.png}`" alt="" />
		</div>

		<!-- <div class="mt-[2em]">
			<ul class="flex justify-evenly w-[60%] mx-auto">
				<li
					v-for="(destination, tabIndex) in destinations"
					:key="destination"
					@click="
						currentTab = tabIndex;
						index = tabIndex;
					"
					class="font-['Barlow_Condensed'] cursor-pointer md:hover:border-b-[3px] border-solid border-b-[#979797]"
					:class="{ active: currentTab === tabIndex }">
					{{ destination.name }}
				</li>
			</ul>
		</div> -->

		<InlineNav
			:list="destinations"
			itemIndicatorType="name"
			@index="getIndex" />

		<div class="text-center mt-[1em]">
			<h2 class="text-[3em] font-[Bellefair]">
				{{ destinations[index].name }}
			</h2>
		</div>

		<div>
			<p class="text-[#D0D6F9] w-[327px] mx-auto text-center text-[15px]">
				{{ destinations[index].description }}
			</p>
		</div>

		<div>
			<h3 class="text-[14px] text-center">AVG. DISTANCE</h3>
			<h3 class="text-[28px] text-center">
				{{ destinations[index].distance }}
			</h3>
		</div>

		<div>
			<h3 class="text-[14px] text-center">Est. Travel Time</h3>
			<h3 class="text-[28px] text-center">{{ destinations[index].travel }}</h3>
		</div>
	</main>
</template>

<script>
import InlineNav from "../../components/nav/InlineNav.vue";
import { ref } from "vue";
import data from "../../data.json";

export default {
	name: "Destination",
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
