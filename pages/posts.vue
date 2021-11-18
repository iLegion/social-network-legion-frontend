<template>
  <div id="posts-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-xxl-7">
          <div v-if="posts.length">
            <Post v-for="post in posts"
              :key="'post' + post.id"
            :post="post"></Post>
          </div>
          <div v-else></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import PostModel from "~/classes/Models/PostModel";
import Post from "~/components/Post/Post.vue";

export default Vue.extend({
  components: {
    Post
  },
  data: (): { posts: PostModel[], pagination: Object } => {
    return {
      posts: [],
      pagination: {}
    }
  },
  methods: {
    async get(): Promise<void> {
      try {
        const response = await this.$api.post.getAll();

        this.posts.push(
            ...response.data.map((i) => {
              return new PostModel(i);
            })
        );
      } catch (e) {}
    }
  },
  async fetch(): Promise<void> {
    await this.get();
  }
})
</script>
