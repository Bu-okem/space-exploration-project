<template>
    <div class="cursor-pointer md:hidden" @click="toggleNav">
        <img src="../../assets/shared/icon-hamburger.svg" alt="">
    </div>
    <nav class="
    text-white w-[67%] absolute top-0 h-screen bg-transparent backdrop-blur-md duration-700
    md:hidden
    " :class="[open ? 'right-0' : 'right-[-80%]']">
        <div class="py-[1.6em]" @click="toggleNav">
            <img src="../../assets/shared/icon-close.svg" alt="" class="mr-[1.3em] float-right cursor-pointer">
        </div>
        <ul class="list-none h-[35%] flex flex-col justify-evenly pl-[2em]">
            <li v-for="item in navLinks" :key="item" class="flex font-['Barlow_Condensed'] text-[1rem] uppercase leading-1">
                <router-link  :to="item.link" class="flex w-full">
                    <span class="mr-[0.4em] font-bold">{{ item.id }}</span>
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </nav>
    <nav class="text-white w-[60vw] h-[60px] bg-[#8080801c] backdrop-blur-md hidden items-center md:flex lg:hidden">
        <ul class="flex list-none justify-evenly w-full">
            <li v-for="item in navLinks" :key="item" class="font-['Barlow_Condensed'] text-[1rem] uppercase">
                <router-link :to="item.link">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </nav>
    <nav class="text-white w-[75vw] h-[60px] bg-[#8080801c] backdrop-blur-md hidden items-center px-[2em] lg:flex">
        <ul class="flex list-none justify-evenly w-full">
            <li v-for="item in navLinks" :key="item" class="font-['Barlow_Condensed'] text-[1rem] uppercase">
                <router-link :to="item.link">
                    <span class="mr-[0.4em] font-bold">{{ item.id }}</span>
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </nav>

</template>

<script>
    import useToggleNav from '../../composables/useToggleNav'
    export default {
        name: 'Nav',
        setup () {

            const navLinks = [
                {
                    id: '00',
                    name: 'Home',
                    link: '/'
                },
                {
                    id: '01',
                    name: 'Destination',
                    link: '/destination'
                },
                {
                    id: '02',
                    name: 'Crew',
                    link: '/crew'
                },
                {
                    id: '03',
                    name: 'Technology',
                    link: '/technology'
                }
            ]

            const { open, toggleNav } = useToggleNav()

        return {
            navLinks,
            open,
            toggleNav
            }
        }
    }
</script>