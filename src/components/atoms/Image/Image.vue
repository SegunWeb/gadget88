<template>
  <img :src="pic_src" :alt="pic_alt">
</template>

<script>
export default {
  name: "Image",
  props: {
    pic_src: String,
    pic_alt: String
  }
}
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>