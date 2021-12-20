<template>
  <div class="posts-block">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-end mt-2 mb-2">
          <PostFilter v-show="posts.length"
                      :user="user"
                      :pagination="pagination"
                      @onGetPosts="handleGetPosts" />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div v-if="posts.length">
            <Post v-for="post in posts"
                  :key="'post-' + post.id"
                  :post="post"
                  @onAddLike="handleLike"
                  @onAddView="handleAddView"
                  @onDelete="handleDelete" />
          </div>
          <div v-else
               class="text-center fw-bold">
            <template v-if="isProfile">
              <div class="text-center fw-bold mb-2">
                Posts not found. Please, add new posts.
              </div>
              <router-link to="/posts/create"
                           class="btn btn-dark text-center">
                <font-awesome-icon :icon="faPlusSquare" fixed-width />
              </router-link>
            </template>

            <template v-else>
              <div class="text-center fw-bold mb-2">
                Posts not found.
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

import PostModel from "~/classes/Models/PostModel";
import UserModel from "~/classes/Models/User/UserModel";
import PostFilter from "~/components/Post/Card/PostFilter.vue";
import Post from "~/components/Post/Card/Post.vue";

export default Vue.extend({
  components: {
    PostFilter,
    Post
  },
  props: {
    user: {
      type: UserModel,
      required: false
    }
  },
  computed: {
    faPlusSquare() {
      return faPlusSquare;
    },
    isProfile(): boolean {
      return this.$router.currentRoute.name === 'profile';
    }
  },
  data: (): { posts: PostModel[], pagination: Object } => {
    return {
      posts: [],
      pagination: {}
    }
  },
  methods: {
    updateCounts(type: string, id: number): void {
      const postIndex = this.posts.findIndex(i => i.id === id);

      if (postIndex !== -1) {
        if (type === 'like') {
          this.posts[postIndex].likesCount += 1;
        } else if (type === 'view') {
          this.posts[postIndex].viewsCount += 1;
        }
      }
    },

    handleGetPosts(posts: PostModel[], pagination: Object, reset: boolean = false): void {
      if (reset) {
        this.posts.splice(0, this.posts.length, ...posts);
      } else {
        this.posts.push(...posts);
      }

      this.pagination = pagination;
    },
    handleLike(id: number): void {
      this.like('post', id);
    },
    handleAddView(id: number): void {
      this.view('post', id);
    },
    handleDelete(id: number): void {
      const postIndex = this.posts.findIndex(i => i.id === id);

      if (postIndex !== -1) {
        this.posts.splice(postIndex, 1);
      }
    },

    async like(type: string, id: number): Promise<void> {
      try {
        await this.$api.like.store({ type, id });

        this.$toasted.success('Like added successfully.');
        this.updateCounts('like', id);

        await this.view(type, id);
      } catch (e) {}
    },
    async view(type: string, id: number): Promise<void> {
      try {
        await this.$api.view.store({ type, id });
        this.updateCounts('view', id);
      } catch (e) {}
    }
  }
});
</script>
