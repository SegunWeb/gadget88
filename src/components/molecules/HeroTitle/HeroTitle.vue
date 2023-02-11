<template>
  <h4 class="text"><slot></slot></h4>
</template>

<script>



export default {
  name: "HeroTitle",
}
</script>

<style scoped>

.text {
  color: #fff;
  font-size: 34px;
  padding: 10px;
  border-bottom: 1px solid red;
}

</style>