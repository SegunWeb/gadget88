<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.button {
  width: 200px;
  padding: 10px 4px;
  text-align: center;
  border: 1px solid olivedrab;
}
</style>