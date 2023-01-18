<template>
  <div class="box">
    <div class="img">
      <Image :pic_alt="img.pic_alt" :pic_src="img.pic_url"/>
    </div>

    <div class="decorator">
      <p class="content">

          <slot></slot>

      </p>
    </div>

  </div>
</template>

<script>
import Image from "@/components/atoms/Image/Image";
import serviceImg from '@/assest/images/servise-img.jpg'
import HeroTitle from "@/components/molecules/HeroTitle/HeroTitle";

export default {
  name: "ServiceBox",
  components: {HeroTitle, Image},

  data() {
    return {
      img: {
        pic_alt: 'service img',
        pic_url: serviceImg
      }

    }
  }

}
</script>

<style scoped>
.box {
  width: 100%;
  position: relative;
  border-bottom: 4px solid red;
  cursor: pointer;
  transition: .4s;
}
.box:hover {
  transform: scale(1.03);
  transition: .4s;
}

.img {
  position: relative;
  z-index: 1;

}
.img > img {
  display: block;
}
.img:before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0,0,0, .6);
  width: 100%;
  height: 100%;
  z-index: 2;
}
.decorator {
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  padding: 10px 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 3;
  width: 70%;
  transition: .4s;

}
.decorator:hover {
  padding: 14px 0;
  transition: .4s;
}
.content {
  color: #fff;
  font-size: 18px;
  text-align: center;

}

</style>