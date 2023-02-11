<template>
  <div class="g_wrapper box">
    <HeroTitle class="g_title">Instagram</HeroTitle>

    <div class="items">
      <InstagramBox/>
      <InstagramBox/>
      <InstagramBox/>
      <InstagramBox/>
      <InstagramBox/>
      <InstagramBox/>
    </div>
  </div>
</template>

<script>

import HeroTitle from "@/components/molecules/HeroTitle/HeroTitle";
import InstagramBox from "@/components/molecules/InstagramBox/InstagramBox";

export default {
  name: "Instagram",
  components: {InstagramBox, HeroTitle}
}
</script>

<style scoped>

.box {
  background-color: #f1f1f1;
}
.items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

.items > div {
  margin: 0 auto 10px auto;
}
@media screen and (max-width: 1024px) {
  .items > div {

  }
}

</style>