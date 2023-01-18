<template>

  <div >
    <font-awesome-icon :icon="[ 'fab', 'js' ]" />
    <font-awesome-icon :icon="['fab', 'instagram']" class="icon alt"/>

    <div>

    </div>
    <button @click="addLike">like</button>
    <button v-on:click="addDislike">dislike</button>
  </div>
  <div>
    <p>count likes: {{likes}}</p>
    <p>count dislikes: {{dislikes}}</p>
  </div>

  <div class="app">

    <input type="text" v-model.trim="modificatorValue">

    <h1>Post page</h1>
    <my-button @click="showDialog">Create post</my-button>

    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>

    <post-list
        :posts="posts"
        @remove="removePost"
    />


  </div>
</template>

<script>

import PostList from "@/components/UI/PostList";
import PostForm from "@/components/UI/PostForm";

export default {
  name: "Test",
  components: {

    PostList, PostForm
  },

  data() {
    return {
      likes: 0,
      dislikes: 0,
      posts: [
        {id: 1, title: 'What is vue', description: 'This is js framework'},
        {id: 2, title: 'What is vue 2', description: 'This is js framework 2'},
        {id: 3, title: 'What is vue 3', description: 'This is js framework 3'},
        {id: 4, title: 'What is vue 4', description: 'This is js framework 4'},
      ],
      dialogVisible: false,
      modificatorValue: ''
      // title: '',
      // description: ''
    }
  },
  methods: {
    addLike() {
      this.likes += 1
    },
    addDislike() {
      this.dislikes += 1
    },
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = true
    },
    removePost(post) {
      this.posts = this.posts.filter(i => i.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchUser() {
      try {
        const res = await this.request('')
      }
      catch (e) {
        console.log('error', e)
      }

    }
    // createPost() {
    //   const newPost = {
    //     id: Date.now(),
    //     title: this.title,
    //     description: this.description
    //   }
    //   this.posts.push(newPost)
    //   this.title = ''
    //   this.description = ''
    // },

  }
}
</script>

<style scoped>

</style>