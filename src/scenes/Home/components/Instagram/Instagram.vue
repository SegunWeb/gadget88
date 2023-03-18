<template>
  <div class="g_wrapper box">
    <HeroTitle class="g_title">Instagram</HeroTitle>

    <div class="items">
      <InstagramBox :href="link"  :pic_alt="picture" :pic_src="el.pic_url" v-for="el in img" key="el.img"/>
    </div>
  </div>
</template>

<script>

import HeroTitle from "@/components/molecules/HeroTitle/HeroTitle";
import InstagramBox from "@/components/molecules/InstagramBox/InstagramBox";

import one from "@/assest/images/insta/1.jpg";
import two from "@/assest/images/insta/2.jpg";
import three from "@/assest/images/insta/3.jpg";
import four from "@/assest/images/insta/4.jpg";
import five from "@/assest/images/insta/5.jpg";
import six from "@/assest/images/insta/6.jpg";
import seven from "@/assest/images/insta/7.jpg";
import eight from "@/assest/images/insta/8.jpg";
import nine from "@/assest/images/insta/9.jpg";
import ten from "@/assest/images/insta/10.jpg";
import eleven from "@/assest/images/insta/11.jpg";
import twelve from "@/assest/images/insta/12.jpg";


export default {
  name: "Instagram",
  components: {InstagramBox, HeroTitle},

  data() {
    return {
      img: [
        {pic_url: one}, 
        {pic_url: two}, 
        {pic_url: three}, 
        {pic_url: four}, 
        {pic_url: five}, 
        {pic_url: six}, 
        {pic_url: seven}, 
        {pic_url: eight}, 
        {pic_url: nine}, 
        {pic_url: ten}, 
        {pic_url: eleven}, 
        {pic_url: twelve}, 
      ],
      link: 'https://www.instagram.com/gadget88.official/?igshid=YmMyMTA2M2Y%3D'
    }
  }
}
</script>

<style scoped>

.box {
  background-color: #f1f1f1;
}
.items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

.items > div {
  margin: 5px;
}
@media screen and (max-width: 768px) {
  .items > div {
    margin: 2px;
  }
}

</style>