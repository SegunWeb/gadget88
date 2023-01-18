<template>

  <div class="dialog" v-show="show" @click="hideDialog">
    <div @click.stop class="modal">
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "my-dialog",

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0, .4);
  display: flex;
}
.modal {
  margin: auto;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;

}

</style>