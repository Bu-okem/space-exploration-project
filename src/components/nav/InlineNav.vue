<template>
	<div class="mt-[2em]">
		<ul class="flex justify-evenly mx-auto lg:mx-0" :class="width">
			<li
				v-for="(item, tabIndex) in list"
				:key="tabIndex"
				@click="
					currentTab = tabIndex;
					index = tabIndex;
					emitIndex();
				"
				class="font-['Barlow_Condensed'] text-[14px] w-fit cursor-pointer uppercase md:text-[16px] border-solid"
				:class="[
					currentTab === tabIndex ? [active] : 'text-[#D0D6F9]',
					itemIndicatorType === 'name'
						? 'pb-[1px] md:pb-[7px] lg:hover:border-b-[3px]'
						: '',
				]">
				<template v-if="itemIndicatorType === 'name'">
					{{ item.name }}
				</template>
				<template v-else-if="itemIndicatorType === 'number'">
					<div
						:class="currentTab === tabIndex ? [active] : 'text-white'"
						class="bg-transparent w-[40px] h-[40px] text-[1rem] flex items-center justify-center border rounded-full lg:flex-col">
						{{ tabIndex + 1 }}
					</div>
				</template>
				<template v-else>
					<div
						:class="currentTab === tabIndex ? [active] : 'bg-[#979797]'"
						class="w-[10px] h-[10px] rounded-full bg-white opacity-[0.17] hover:opacity-[0.5]"></div>
				</template>
			</li>
		</ul>
	</div>
</template>

<script>
import { ref, computed } from "vue";

export default {
	name: "InlineNav",
	props: {
		list: Array,
		itemIndicatorType: String,
	},
	setup(props, context) {
		let currentTab = ref(0);
		let index = ref(0);
		const itemIndicatorType = props.itemIndicatorType;

		const width = computed(() => {
			let widthValue;
			if (itemIndicatorType === "name") {
				widthValue = "w-[60%] max-w-[285.5px]";
			} else if (itemIndicatorType === "number") {
				widthValue = "w-[50%] max-w-[210px] lg:flex-col";
			} else {
				widthValue = "w-[88px]";
			}
			return widthValue;
		});

		const active = computed(() => {
			let activeValue;
			if (itemIndicatorType === "name") {
				activeValue = "border-b-[3px] border-b-white border-solid text-white";
			} else if (itemIndicatorType === "number") {
				activeValue = "bg-white rounded-full text-black";
			} else {
				activeValue = "bg-white rounded-full";
			}
			return activeValue;
		});

		const emitIndex = () => {
			context.emit("index", index);
		};

		return {
			currentTab,
			index,
			width,
			active,
			emitIndex,
		};
	},
};
</script>
