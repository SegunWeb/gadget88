<template>
  <a class="btn_link" target="_blank" :href="href">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "LinkBtn",
  props: {
    href: String
  }
}
</script>

<style scoped>
.btn_link {
  display: block;
  border: 1px solid red;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  padding: 8px 0;
  max-width: 220px;
  width: 100%;
  text-decoration: none;
  text-align: center;
}
.btn_link:hover {
  opacity: .7;
}
</style>