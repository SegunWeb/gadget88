<template>
  <input :value="modelValue" @input="updateInput" class="input">
</template>

<script>
export default {
  name: "my-input",

  props: {
    modelValue: [ String, Number ]
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  margin-bottom: 10px;
  border: 2px solid gray;
  padding: 10px;
}
</style>