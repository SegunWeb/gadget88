<template>
  <div>

    <h3>Posts list</h3>
    <!--- for example v-show if element should be in DOM but have style display:none --->
    <div v-show="posts.length > 0">
      total: {{posts.length}}
    </div>
    <div v-show="posts.length === 0">
      total: not elements
    </div>
    <!----- end ---->

    <div v-if="posts.length > 0">
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </div>
    <p v-else>list is empty</p>




  </div>


</template>

<script>
import PostItem from "@/components/UI/PostItem";


export default {
  components: {
    PostItem
  },

  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>