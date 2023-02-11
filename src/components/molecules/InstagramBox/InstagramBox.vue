<template>
    <div class="img">
      <a href="/">
        <Image :pic_alt="img.pic_alt" :pic_src="img.pic_url"/>
      </a>
    </div>
</template>

<script>
import Image from "@/components/atoms/Image/Image";
import Demo from "@/assest/images/demo-inst.jpg";
export default {
  name: "InstagramBox",
  components: {Image},

  data() {
    return {
      img: {
        pic_alt: 'picture',
        pic_url: Demo
      },
    }
  }
}
</script>

<style scoped>
.img {
  cursor: pointer;
  max-width: 245px;
  width: 100%;
}
</style>