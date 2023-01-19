<template>
  <div class="hero">
<!--    <div class="hero_img">-->
<!--      <Image :pic_alt="img.alt" :pic_src="img.url"/>-->
<!--    </div>-->

    <div class="hero_video filter">
      <Video :vid_src="video.url" :vid_poster="video.poster" autoplay loop/>
    </div>

    <div class="hero_title">
      <HeroTitle>Gadget 88</HeroTitle>
    </div>
  </div>

</template>

<script>



import Header from "@/components/organisms/Header/Header";
import Image from "@/components/atoms/Image/Image";
import heroBg from '@/assest/images/man.jpg'
import HeroTitle from "@/components/molecules/HeroTitle/HeroTitle";
import videoDemo from '@/assest/video/video.mp4'
import Video from "@/components/atoms/Video/Video";

export default {
  name: "Hero",
  components: {Video, HeroTitle, Image, Header},

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
  .hero {
    overflow: hidden;
  }
  .hero_img {
    position: relative;
    z-index: 1;
  }
  .filter:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0, .7);
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .hero_video {
    width: 100vw;
    position: relative;
    z-index: 1;
  }

  .hero_title {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%,-50%);
    z-index: 3;
  }
</style>