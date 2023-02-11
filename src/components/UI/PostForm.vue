<template>
  <form @submit.prevent>
    <h4>Creating post</h4>
<!--    <input-->
<!--        class="input"-->
<!--        v-bind:value="post.title"-->
<!--        @input="inputTitle"-->
<!--        type="text"-->
<!--        placeholder="Title"-->
<!--    >-->
<!--    <input-->
<!--        class="input"-->
<!--        v-bind:value="post.description"-->
<!--        @input="post.description = $event.target.value"-->
<!--        type="text"-->
<!--        placeholder="description"-->
<!--    >-->

    <my-input

        v-model="post.title"
        type="text"
        placeholder="Title"
    />
    <my-input

        v-model="post.description"
        type="text"
        placeholder="description"
    />

    <my-button class="button"  @click="createPost">Create post</my-button>
  </form>

</template>

<script>
// import MyButton from "@/components/UI/MyButton";

export default {
  // components: { MyButton},


  data() {
    return {
      post: {
        title: '',
        description: '',
      }
    }
  },

  methods: {
    createPost() {
        this.post.id = Date.now(),
        this.$emit('create', this.post),
        this.post = {
          title: '',
          description: '',
        }
    }
    // inputTitle(e) {
    //   this.post.title = e.target.value
    // }
  }
}
</script>

<style scoped>


</style>