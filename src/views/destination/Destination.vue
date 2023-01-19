<template>
	<main
		class="bg-[url('../src/assets/destination/background-destination-mobile.jpg')] bg-no-repeat bg-cover h-screen text-white sm:bg-[url('../src/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('../src/assets/destination/background-destination-desktop.jpg')]">
		<div class="text-center">
			<h3 class="font-['Barlow_Condensed'] uppercase">
				<span class="pr-[1em]">01</span>Pick your destination
			</h3>
		</div>

		<div class="h-[170px] w-[170px] mx-auto mt-[2.5em]">
			<img :src="`/src/${destinations[index].images.png}`" alt="" />
		</div>

		<div class="mt-[2em]">
			<ul class="flex justify-evenly w-[60%] mx-auto">
				<li
					v-for="destination in destinations"
					:key="destination"
					@click="changeIndex"
					class="font-['Barlow_Condensed'] cursor-pointer md:hover:border-b-[3px] border-solid border-b-white"
					:class="`active${destination.id}`"
					:id="destination.id">
					{{ destination.name }}
				</li>
			</ul>
		</div>

		<div class="text-center mt-[1em]">
			<h2 class="text-[3em] font-[Bellefair]">
				{{ destinations[index].name }}
			</h2>
		</div>

		<div>
			<p class="text-[#D0D6F9]">{{ destinations[index].description }}</p>
		</div>
	</main>
</template>

<script>
import DestinationNav from "../../components/nav/DestinationNav.vue";
import { ref, watch } from "vue";
import data from "../../data.json";

export default {
	name: "Destination",
	components: {
		DestinationNav,
	},
	setup() {
		const destinations = data.destinations;
		let index = ref(0);
		const changeIndex = function (e) {
			index.value = e.target.id;
		};

		watch(index, (newValue, oldValue) => {
			console.log("Old Value", oldValue);
			console.log("New Value", newValue);
		});

		return {
			destinations,
			changeIndex,
			index,
		};
	},
};
</script>
