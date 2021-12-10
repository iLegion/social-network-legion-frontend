<template>
  <div class="user-posts">
    <div class="container">
      <div class="row">
        <div class="col-12 offset-xxl-7 col-xxl-3 d-flex justify-content-end mt-2 mb-2">
          <PostFilter v-show="posts.length"
                      :user="user"
                      @onGetPosts="handleGetPosts" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 offset-xxl-2 col-xxl-8">
          <div v-if="posts.length">
            <Post v-for="post in posts"
                  :key="'post' + post.id"
                  :post="post"
                  @onAddLike="handleLike"
                  @onAddView="handleAddView"
                  @onDelete="handleDelete" />
          </div>
          <div v-else
               class="text-center fw-bold">
            Posts not found. Please, add new posts.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import PostModel from "~/classes/Models/PostModel";
import UserModel from "~/classes/Models/User/UserModel";
import PostFilter from "~/components/Post/PostFilter.vue";
import Post from "~/components/Post/Post.vue";

export default Vue.extend({
  components: {
    PostFilter,
    Post
  },
  props: {
    user: {
      type: UserModel,
      required: true
    }
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
    },
    handleDelete(id: number): void {
      const postIndex = this.posts.findIndex(i => i.id === id);

      if (postIndex !== -1) {
        this.posts.splice(postIndex, 1);
      }
    }
  }
});
</script>

<style lang="scss">
  .user-posts {
  }
</style>
