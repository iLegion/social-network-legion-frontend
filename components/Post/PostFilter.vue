<template>
  <div class="post-filter-component">
    <button type="button"
            class="button_hola"
            @click="handleFilterByType('byLikes')">
      by likes
    </button>
    <button type="button"
            class="button_hola"
            @click="handleFilterByType('byViews')">
      by views
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import PostModel from "~/classes/Models/PostModel";
import UserModel from "~/classes/Models/User/UserModel";
import { PostsGetPayloadInterface } from "~/interfaces/classes/Api/PostApiInterface";

export default Vue.extend({
  props: {
    isLoadingPosts: {
      type: Boolean,
      required: true
    },
    user: {
      type: UserModel,
      required: false,
      default: null
    },
    pagination: {
      type: Object,
      required: true
    }
  },
  data: (): { filters: { byLikes: number, byViews: number }, needReset: boolean } => {
    return {
      filters: {
        byLikes: 0,
        byViews: 0
      },
      needReset: false
    }
  },
  methods: {
    initLazyLoading(): any {
      const pagination = this.pagination;
      const isLoadingPosts = this.isLoadingPosts;

      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        if (!isLoadingPosts && pagination && (pagination.currentPage < pagination.lastPage)) {
          this.get(this.getFilters(), pagination.currentPage + 1)
        }
      }
    },
    getFilters(): { byLikes?: number, byViews?: number } {
      const formData: { byLikes?: number, byViews?: number } = {};

      if (this.filters.byLikes) {
        formData.byLikes = 1;
      }

      if (this.filters.byViews) {
        formData.byViews = 1;
      }

      return formData;
    },

    handleFilterByType(type: string): void {
      if (type === 'byLikes') {
        this.filters.byLikes = 1;
        this.filters.byViews = 0;
      } else if (type === 'byViews') {
        this.filters.byLikes = 0;
        this.filters.byViews = 1;
      }

      this.needReset = true;

      this.get(this.getFilters());
    },

    async get(payload: PostsGetPayloadInterface = {}, page: number = 1): Promise<void> {
      this.$emit('onLoadingPosts', true);

      if (this.user) {
        payload.userId = this.user.id;
      }

      try {
        const response = await this.$api.post.getAll(Object.assign(payload, { page }));

        this.$emit('onLoadingPosts', false);
        this.$emit(
            'onGetPosts',
            response.data.map((i) => {
              return new PostModel(i);
            }),
            response.pagination,
            this.needReset
        )

        this.needReset = false;
      } catch (e) {}
    }
  },
  async fetch(): Promise<void> {
    await this.get();

    window.addEventListener('scroll', this.initLazyLoading);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.initLazyLoading);
  }
});
</script>

<style scoped>
.button_hola,
.button_hola::before,
.button_hola::after,
.button_hola span,
.button_hola span::before,
.button_hola span::after
{
  transition: all ease .5s;
}

.button_hola{
  position: relative;
  display: inline-block;
  margin: 1em;
  border: solid 1px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #fff;
}

.button_hola:hover
{
  box-shadow: 0 0 5em .5em rgba(50,50,150,0.5);
}

.button_hola span
{
  display: inline-block;
  width: 100%;
  padding: 0.6em 2em;
}

.button_hola:hover span
{
  background-color: #fff;
  color: #112;
}

.button_hola::before,
.button_hola::after,
.button_hola span::before,
.button_hola span::after
{
  content: '';
  position: absolute;
  border: 1px;
}

.button_hola::before,
.button_hola span::before
{
  border-style: solid none;
}

.button_hola::before,
.button_hola span::after{
  left: 0;
  top: -0.4em;
  width: 100%;
  height: calc(100% + 0.8em);
}

.button_hola::after,
.button_hola span::after
{
  border-style: none solid;
}

.button_hola::after,
.button_hola span::before
{
  top: 0;
  left: -0.4em;
  height: 100%;
  width: calc(100% + 0.8em);
}

.button_hola:hover::after,
.button_hola:hover span::after
{
  transform: scaleY(0);
}

.button_hola:hover::before,
.button_hola:hover span::before
{
  transform: scaleX(0);
}

.button_hola:hover span::after,
.button_hola:hover span::before
{
  opacity: 0;
}
</style>
