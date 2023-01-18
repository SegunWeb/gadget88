<template>
  <Hero/>
  <About/>
  <Articles/>
  <Instagram/>
</template>

<script>
import Hero from "@/scenes/Home/components/Hero/Hero";
import About from "@/scenes/Home/components/About/About";
import Services from "@/scenes/Home/components/Services/Services";
import Articles from "@/scenes/Home/components/Articles/Articles";
import Instagram from "@/scenes/Home/components/Instagram/Instagram";

export default {
  name: "Home",
  components: {Instagram, Articles, Services, About, Hero}
}
</script>

<style scoped>

</style>