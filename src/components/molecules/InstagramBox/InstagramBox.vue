<template>
    <div class="img">
      <a class="img_link" :href="href">
        <Image :pic_alt="pic_alt" :pic_src="pic_src"/>
      </a>
    </div>
</template>

<script>
import Image from "@/components/atoms/Image/Image";


export default {
  name: "InstagramBox",
  components: {Image},
  props: {
    pic_alt: String,
    pic_src: String,
    href: String,
  },
}

</script>

<style scoped>
.img {
  cursor: pointer;
  max-width: 255px;
  width: 25vw;
  max-height: 255px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img:hover > a {
  transition: .4s;
  transform: scale(1.6);
}
.img_link {
  display: block;
  transition: .4s;
  transform: scale(1.5);
}


@media screen and (max-width: 768px) {
  .img {
    width: 28vw;
  }
  .img {
    max-height: 165px;
  }
}
@media screen and (max-width: 568px) {
 
  .img {
    max-height: 105px;
  }
}



</style>