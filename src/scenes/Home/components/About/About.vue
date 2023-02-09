<template>
  <div id="about" class="about">
    <div class="content_wrapper about_wrapper">
      <div class="product_video box">
        <Video :vid_src="video.url" :vid_poster="video.poster" autoplay loop />
      </div>

      <div class="content box">
        <!--    <div class="hero_img">-->
        <!--      <Image :pic_alt="img.alt" :pic_src="img.url"/>-->
        <!--    </div>-->
        <!--    -->

        <div class="description_product">
          <p class="title">GADGET 88</p>
          <p class="text">Описание продукта</p>
          <p class="text">Характеристики продукта</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

import man from '@/assest/images/man.jpg'
import Image from "@/components/atoms/Image/Image";
import Video from "@/components/atoms/Video/Video";
import videoDemo from "@/assest/video/video2.mp4";
import heroBg from "@/assest/images/man.jpg";

export default {
  name: "About",
  components: {Image, Video},

  data() {
    return {
      img: {
        url: man,
        alt: 'man'
      },
      video: {
        url: videoDemo,
        cover: heroBg
      }
    }

  }
}
</script>

<style scoped>
.about {
  background-color: #000;
  padding-bottom: 20px;
}
.about_wrapper {
  display: flex;
  justify-content: space-between;
}
.box {
  width: 48%;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.description_product {
  width: 300px;
  margin: 0 auto;
  color: #fff;
}
.title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 24px;
}
.text {
  font-size: 16px;
  text-align: center;
  color: #a4a4a4;

}

@media screen and (max-width: 1024px) {
  .about {
    margin-top: -1px;
    padding: 0;
  }
  .about_wrapper {
    flex-direction: column-reverse;
  }
  .box {
    width: 100%;
    max-width: 1024px;
    padding: 20px 0;
  }
}

</style>