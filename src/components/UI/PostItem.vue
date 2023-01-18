<template>
  <div class="post">
    <div>
      <div><strong>Title</strong> {{post.title}}</div>
      <div><strong>Description</strong> {{post.description}}</div>
    </div>
    <my-button class="button" @click="$emit('remove', post)">Remove post</my-button>
  </div>
</template>

<script>

// import MyButton from "@/components/UI/MyButton";

export default {
  // components: {MyButton},

  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  border: 1px solid gray;
  padding: 5px;
  margin-top: 15px;
}
.button {
  width: 100px;
  padding: 2px 6px;
  text-align: center;
  border: 2px solid #000;
  background-color: tomato;
  margin-top: 12px;
}
</style>