<template>
  <div class="posts-block">
    <div class="container-md container-fluid">
      <div v-show="posts.length"
           class="row">
        <div class="col-12 d-md-flex justify-content-end mt-2 mb-2">
          <PostsFilter class="d-none d-md-block"
                       :isLoading="isLoading"
                       :user="user"
                       :pagination="pagination"
                       @onLoading="handleLoadingPosts"
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
                  @onDelete="handleDelete"
                  @onOpenModal="handleOpenModal" />
          </div>
          <div v-else-if="isLoading" class="pt-5">
            <Loader />
          </div>
          <div v-else
               class="d-flex justify-content-center align-items-center fw-bold">
            <div>
              <img src="@/assets/img/error-404.png" alt="404">
              <div class="text-center">Posts not found.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal :id="modalID">
      <template v-if="selectedPost"
                v-slot:content>
        <Post :post="selectedPost"
              :is-simple="false"
              class="mb-4"/>
        <Comments :post="selectedPost" />
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Modal as BootstrapModal } from 'bootstrap';

import PostModel from "~/classes/Models/PostModel";
import UserModel from "~/classes/Models/User/UserModel";
import PostsFilter from "~/components/Posts/Filter.vue";
import Post from "~/components/Posts/Post/Index.vue";
import Modal from "~/components/Modal/Modal.vue";
import Comments from "~/components/Comments/Index.vue";
import Loader from "~/components/Core/Loader.vue";

export default Vue.extend({
  components: {
    PostsFilter,
    Post,
    Modal,
    Comments,
    Loader
  },
  props: {
    user: {
      type: UserModel,
      required: false
    }
  },
  computed: {
    selectedPost(): PostModel | undefined {
      return this.posts.find(i => i.id === this.selectedPostID);
    }
  },
  data: (): {
    isLoading: boolean,
    posts: PostModel[],
    pagination: Object,
    modalInstance: BootstrapModal | null,
    modalID: string,
    selectedPostID: number | null
  } => {
    return {
      isLoading: true,
      posts: [],
      pagination: {},
      modalInstance: null,
      modalID: 'posts-modal-' + Math.floor(Math.random() * 1000),
      selectedPostID: null
    }
  },
  methods: {
    initModal(): void {
      const el = document.getElementById(this.modalID);

      if (el) {
        this.modalInstance = new BootstrapModal(el)
      }
    },
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

    handleLoadingPosts(value: boolean): void {
      this.isLoading = value;
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
    handleOpenModal(id: number): void {
      this.selectedPostID = id;

      this.modalInstance?.show();
      this.handleAddView(id);
    },

    async like(type: string, id: number): Promise<void> {
      try {
        await this.$api.like.store({ type, id });

        this.$toast.success('Like added successfully.');
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
  },
  mounted() {
    this.initModal();
  }
});
</script>
