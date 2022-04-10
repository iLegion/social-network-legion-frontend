<template>
  <div class="post-filter-component">
    <button type="button"
            class="button_hola"
            @click="handleFilterByType('byLikesCount')">
      by likes

      <template v-if="filters.byLikesCount !== null">
        <i v-if="filters.byLikesCount" class="bi bi-arrow-down-short"></i>
        <i v-else class="bi bi-arrow-up-short"></i>
      </template>
    </button>
    <button type="button"
            class="button_hola"
            @click="handleFilterByType('byViewsCount')">
      by views

      <template v-if="filters.byViewsCount !== null">
        <i v-if="filters.byViewsCount" class="bi bi-arrow-down-short"></i>
        <i v-else class="bi bi-arrow-up-short"></i>
      </template>
    </button>
    <button type="button"
            class="button_hola"
            @click="handleFilterByType('default')">
      <i class="bi bi-x"></i>
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
    isLoading: {
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
  data: (): { filters: { byLikesCount: boolean | null, byViewsCount: boolean | null }, needReset: boolean } => {
    return {
      filters: {
        byLikesCount: null,
        byViewsCount: null
      },
      needReset: false
    }
  },
  methods: {
    initLazyLoading(): any {
      const pagination = this.pagination;
      const isLoading = this.isLoading;

      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        if (!isLoading && pagination && (pagination.currentPage < pagination.lastPage)) {
          this.get(this.getFilters(), pagination.currentPage + 1)
        }
      }
    },

    getFilters(): { byLikesCount?: number, byViewsCount?: number } {
      const formData: { byLikesCount?: number, byViewsCount?: number } = {};

      if (this.filters.byLikesCount !== null) {
        formData.byLikesCount = Number(this.filters.byLikesCount);
      }

      if (this.filters.byViewsCount !== null) {
        formData.byViewsCount = Number(this.filters.byViewsCount)
      }

      return formData;
    },

    handleFilterByType(type: string): void {
      let needCall = false;

      if (type === 'byLikesCount') {
        needCall = true;
        this.filters.byLikesCount = !this.filters.byLikesCount;
      }

      if (type === 'byViewsCount') {
        needCall = true;
        this.filters.byViewsCount = !this.filters.byViewsCount;
      }

      if (type === 'default' && (this.filters.byLikesCount !== null || this.filters.byViewsCount !== null)) {
        needCall = true;
        this.filters.byLikesCount = null;
        this.filters.byViewsCount = null;
      }

      if (needCall) {
        this.needReset = true;

        this.get(this.getFilters());
      }
    },

    async get(payload: PostsGetPayloadInterface = {}, page: number = 1): Promise<void> {
      this.$emit('onLoading', true);

      if (this.user) {
        payload.userId = this.user.id;
      }

      try {
        const response = await this.$api.post.getAll(Object.assign(payload, { page }));

        this.$emit('onLoading', false);
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

<style lang="scss">
.button_hola,
.button_hola::before,
.button_hola::after,
.button_hola span,
.button_hola span::before,
.button_hola span::after {
  transition: all ease .5s;
}

.button_hola {
  position: relative;
  display: inline-block;
  margin: 1em;
  border: solid 1px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    span {
      color: #112;
      background-color: #fff;
    }
  }

  span {
    display: inline-block;
    width: 100%;
    padding: 0.6em 2em;
  }
}

.button_hola::before,
.button_hola::after,
.button_hola span::before,
.button_hola span::after {
  content: '';
  position: absolute;
  border: 1px;
}

.button_hola::before,
.button_hola span::before {
  border-style: solid none;
}

.button_hola::before,
.button_hola span::after {
  left: 0;
  top: -0.4em;
  width: 100%;
  height: calc(100% + 0.8em);
}

.button_hola::after,
.button_hola span::after {
  border-style: none solid;
}

.button_hola::after,
.button_hola span::before {
  top: 0;
  left: -0.4em;
  height: 100%;
  width: calc(100% + 0.8em);
}

.button_hola:hover::after,
.button_hola:hover span::after {
  transform: scaleY(0);
}

.button_hola:hover::before,
.button_hola:hover span::before {
  transform: scaleX(0);
}

.button_hola:hover span::after,
.button_hola:hover span::before {
  opacity: 0;
}
</style>
