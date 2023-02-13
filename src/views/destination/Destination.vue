<template>
	<main
		class="lg:h-full bg-[url('../src/assets/destination/background-destination-mobile.jpg')] bg-no-repeat bg-cover text-white sm:bg-[url('../src/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('../src/assets/destination/background-destination-desktop.jpg')]">
		<div
			class="w-[95%] mx-auto text-center md:text-left lg:w-[100%] lg:ml-[2em] lg:relative lg:top-[25px]">
			<h3
				class="font-['Barlow_Condensed'] uppercase tracking-[2.7px] md:text-[1.25rem] md:tracking-[3.4px] lg:tracking-[4.7px]">
				<span class="pr-[1em] opacity-[0.25] tracking-[0px]">01</span>Pick your
				destination
			</h3>
		</div>
		<section class="lg:flex lg:justify-around lg:items-center lg:mt-[4em]">
			<section class="lg:w-[445px] lg:h-fit">
				<div
					class="h-[170px] w-[170px] mx-auto mt-[2.5em] md:h-[300px] md:w-[300px] lg:h-fit lg:w-[445px] lg:mt-0">
					<img :src="`./src/${destinations[index].images.png}`" alt="" />
				</div>
			</section>

			<section class="lg:w-[445px]">
				<InlineNav
					:list="destinations"
					itemIndicatorType="name"
					@index="getIndex" />

				<div class="text-center mt-[1em] lg:text-left">
					<h2
						class="text-[3.5rem] font-[Bellefair] uppercase md:text-[5rem] lg:ml-[0.25em]">
						{{ destinations[index].name }}
					</h2>
				</div>

				<div>
					<p
						class="text-[#D0D6F9] w-[87%] mx-auto text-center text-[15px] leading-[25px] max-w-[573px] lg:text-left">
						{{ destinations[index].description }}
					</p>
				</div>

				<div
					class="w-[86.3%] max-w-[573px] h-[1px] bg-[#979797] mt-[2em] mx-auto"></div>
				<section
					class="h-[180px] max-w-[573px] mx-auto mt-[2em] pb-[2em] flex flex-col justify-between md:flex-row md:h-[90px] md:justify-around lg:justify-between lg:w-[75%] lg:mx-0 lg:ml-[1.65em] lg:pb-0">
					<div class="">
						<h3
							class="text-[14px] text-[#D0D6F9] font-['Barlow_Condensed'] text-center uppercase tracking-[2.4px] lg:text-left">
							Avg. Distance
						</h3>
						<h3
							class="text-[28px] text-center font-['Bellefair'] uppercase lg:text-left">
							{{ destinations[index].distance }}
						</h3>
					</div>

					<div class="">
						<h3
							class="text-[14px] text-center text-[#D0D6F9] font-['Barlow_Condensed'] uppercase tracking-[2.4px] lg:text-left">
							Est. Travel Time
						</h3>
						<h3
							class="text-[28px] text-center font-['Bellefair'] uppercase lg:text-left">
							{{ destinations[index].travel }}
						</h3>
					</div>
				</section>
			</section>
		</section>
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
