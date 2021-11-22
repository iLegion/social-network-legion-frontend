<template>
  <div class="user-posts">
  <div class="container">
  <div class="row">
    <div class="col">
  <div v-if="posts.length">
            <Post v-for="post in posts"
                  :key="'post' + post.id"
                  :post="post"
                  @onAddLike="handleLike"
                  @onAddView="handleAddView">
            </Post>
          </div>
          <div v-else></div>
  </div>
  </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
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
});
</script>

<style lang="scss">
  .user-posts {
  }
</style>