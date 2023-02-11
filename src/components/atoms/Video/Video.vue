<template>
  <video
      :src="vid_src"


      buffered
      muted="false"
      class="video-container"
      :poster="vid_poster"
  />
</template>

<script>
export default {
  name: "Video",
  props: {
    vid_src: String,
    vid_poster: String,
  }
}
</script>

<style scoped>
  .video-container {
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
    outline: 0;
  }
</style>