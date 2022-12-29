<template>
  <section class="flex justify-between items-center p-[1.2em] bg-transparent absolute z-10 w-[100vw] md:pt-0 md:pr-0 md:pb-0 lg:mt-[1.2em]">
    <div>
      <img src="./assets/shared/logo.svg" alt="logo" class="w-[70%]">
    </div>

    <span class="hidden lg:block w-[49%] h-[1px] bg-white relative left-5 z-20"></span>
  
    <Nav />
  </section>
  <router-view class="pt-[80px]"/>
</template>

<script >
import Nav from "./components/nav/Nav.vue"

export default {
  name: 'Home',
  components: {
    Nav
  }
}
</script>