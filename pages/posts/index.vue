<template>
  <div id="posts-page">
    <div class="container">
      <div v-show="posts.length"
           class="row">
        <div class="col-12 col-xxl-3 offset-xxl-7 d-flex justify-content-end mt-2 mb-2">
          <PostFilter @onGetPosts="handleGetPosts" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 offset-xxl-2 col-xxl-8">
          <template v-if="posts.length">
            <Post v-for="post in posts"
                  :key="'post' + post.id"
                  :post="post"
                  @onAddLike="handleLike"
                  @onAddView="handleAddView"></Post>
          </template>
          <div v-else
               class="d-flex justify-content-center align-items-center fw-bold vh-92">
            Posts not found. Please, add friends.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import PostModel from "~/classes/Models/PostModel";
import PostFilter from "~/components/Post/PostFilter.vue";
import Post from "~/components/Post/Post.vue";

export default Vue.extend({
  components: {
    PostFilter,
    Post
  },
  data: (): { posts: PostModel[], pagination: Object } => {
    return {
      posts: [],
      pagination: {}
    }
  },
  methods: {
    handleGetPosts(posts: PostModel[]): void {
      this.posts.splice(0, this.posts.length, ...posts);
    },
    handleLike(id: number): void {
      const postIndex = this.posts.findIndex(i => i.id === id);

      if (postIndex !== -1) {
        this.posts[postIndex].likesCount += 1;
      }
    },
    handleAddView(id: number): void {
      const postIndex = this.posts.findIndex(i => i.id === id);

      if (postIndex !== -1) {
        this.posts[postIndex].viewsCount += 1;
      }
    }
  }
})
</script>
