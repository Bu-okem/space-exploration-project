<template>
	<div ref="nav" class="nav">
		<div @click="navOpen = !navOpen" class="cursor-pointer md:hidden">
			<img src="../../assets/shared/icon-hamburger.svg" alt="" />
		</div>
		<nav
			class="text-white w-[67%] fixed top-0 h-screen bg-transparent backdrop-blur-md duration-700 md:hidden"
			:class="[navOpen ? 'right-0' : 'right-[-80%]']">
			<div class="py-[1.6em]" @click="navOpen = !navOpen">
				<img
					src="../../assets/shared/icon-close.svg"
					alt=""
					class="mr-[1.3em] float-right cursor-pointer" />
			</div>
			<ul class="list-none h-[35%] flex flex-col justify-evenly pl-[2em]">
				<li
					v-for="item in navLinks"
					:key="item"
					@click="navOpen = !navOpen"
					class="flex font-['Barlow_Condensed'] text-[1rem] uppercase leading-1">
					<router-link :to="item.link" class="flex w-full">
						<span class="mr-[0.4em] font-bold">{{ item.id }}</span>
						{{ item.name }}
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
	<nav
		class="text-white w-[60vw] h-[60px] bg-[#8080801c] backdrop-blur-md hidden items-center md:flex lg:hidden">
		<ul class="flex list-none justify-evenly w-full">
			<li
				v-for="item in navLinks"
				:key="item"
				class="font-['Barlow_Condensed'] text-[1rem] uppercase">
				<router-link
					:to="item.link"
					class="pb-[1.1em] lg:hover:border-b-[3px] lg:hover:border-solid lg:hover:border-[#D0D6F9]">
					{{ item.name }}
				</router-link>
			</li>
		</ul>
	</nav>
	<nav
		class="text-white w-[75vw] h-[60px] bg-[#8080801c] backdrop-blur-md hidden items-center px-[2em] lg:flex">
		<ul class="flex list-none justify-evenly w-full">
			<li
				v-for="item in navLinks"
				:key="item"
				class="font-['Barlow_Condensed'] text-[1rem] uppercase">
				<router-link
					:to="item.link"
					class="pb-[1.1em] hover:border-b-[3px] hover:border-solid hover:border-[#D0D6F9]">
					<span class="mr-[0.4em] font-bold">{{ item.id }}</span>
					{{ item.name }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
import useDetectOutsideClick from "../../composables/useDetectOutsideClick";
import { ref } from "vue";
export default {
	name: "Nav",
	setup() {
		const nav = ref(null);
		const navOpen = ref(false);
		const navLinks = [
			{
				id: "00",
				name: "Home",
				link: "/",
			},
			{
				id: "01",
				name: "Destination",
				link: "/destination",
			},
			{
				id: "02",
				name: "Crew",
				link: "/crew",
			},
			{
				id: "03",
				name: "Technology",
				link: "/technology",
			},
		];

		useDetectOutsideClick(nav, () => {
			navOpen.value = false;
		});

		return {
			nav,
			navLinks,
			navOpen,
		};
	},
};
</script>
