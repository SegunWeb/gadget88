<template>
  <div class="hero">
      <div>
        <h1 class="hero_title">
          Introducing the new innovative product
          <br>
          <span class="product">GADGET 88</span>
        </h1>
        <a href="#about" class="rainbow">Watch the announcement</a>
      </div>
  </div>
</template>

<script>
import Header from "@/components/organisms/Header/Header";
import Image from "@/components/atoms/Image/Image";
import heroBg from '@/assest/images/man.jpg'
import HeroTitle from "@/components/molecules/HeroTitle/HeroTitle";
import videoDemo from '@/assest/video/video2.mp4'
import Video from "@/components/atoms/Video/Video";

export default {
  name: "Hero",
  components: {HeroTitle, Image, Header},

  data() {
    return {
      img: {
        alt: 'image',
        url: heroBg
      },
      video: {
        url: videoDemo,
        cover: heroBg
      }
    }
  },
}
</script>

<style scoped>
.rainbow {
  display: block;
  margin: 24px auto;
  background: none;
  text-decoration: inherit;
  padding: 12px 24px;
  width: 280px;
  border-radius: 100px;
  border: 3px solid transparent;
  border-image-slice: 1;
  border-width: 3px;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
  color: #fff;
  text-align: center;
}
.rainbow:hover {
  opacity: .8;
}



  .hero {
    overflow: hidden;
    background: #000;
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero_title {
    color: #fff;
    text-align: center;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    .hero {
      height: 60vh;
    }

    .title {
      font-size: 16px;
    }
  }


</style>