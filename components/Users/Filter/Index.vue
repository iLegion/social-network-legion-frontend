<template>
  <div class="users-filter-component">
    <button type="button"
            class="button_hola"
            @click="handleFilterByType('byPostsCount')">
      by posts count

      <template v-if="filters.byPostsCount !== null">
        <i v-if="filters.byPostsCount" class="bi bi-arrow-down-short"></i>
        <i v-else class="bi bi-arrow-up-short"></i>
      </template>
    </button>
    <button type="button"
            class="button_hola"
            @click="handleFilterByType('byFriendsCount')">
      by friends count

      <template v-if="filters.byFriendsCount !== null">
        <i v-if="filters.byFriendsCount" class="bi bi-arrow-down-short"></i>
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

import UserModel from "~/classes/Models/User/UserModel";
import { UsersGetPayloadInterface } from "~/interfaces/classes/Api/UserApiInterface";

export default Vue.extend({
  props: {
    isLoading: {
      type: Boolean,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: 'users'
    },
    pagination: {
      type: Object,
      required: false,
      default: null
    },
    userID: {
      type: Number,
      required: false
    }
  },
  data: (): {
    filters: {
      name: string | null,
      byPostsCount: boolean | null,
      byFriendsCount: boolean | null
    },
    needReset: boolean
  } => ({
    filters: {
      name: null,
      byPostsCount: null,
      byFriendsCount: null,
    },
    needReset: false
  }),
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

    getFilters(): { byPostsCount?: number, byFriendsCount?: number } {
      const formData: { byPostsCount?: number, byFriendsCount?: number } = {};

      if (this.filters.byPostsCount !== null) {
        formData.byPostsCount = Number(this.filters.byPostsCount);
      }

      if (this.filters.byFriendsCount !== null) {
        formData.byFriendsCount = Number(this.filters.byFriendsCount);
      }

      return formData;
    },

    handleFilterByType(type: string): void {
      let needCall = false;

      if (type === 'byPostsCount') {
        needCall = true;
        this.filters.byPostsCount = !this.filters.byPostsCount;
      }

      if (type === 'byFriendsCount') {
        needCall = true;
        this.filters.byFriendsCount = !this.filters.byFriendsCount;
      }

      if (type === 'default' && (this.filters.byPostsCount !== null || this.filters.byFriendsCount !== null)) {
        needCall = true;
        this.filters.byPostsCount = null;
        this.filters.byFriendsCount = null;
      }

      if (needCall) {
        this.needReset = true;

        this.get(this.getFilters());
      }
    },

    async get(payload: UsersGetPayloadInterface = {}, page: number = 1): Promise<void> {
      this.$emit('onLoading', true);

      try {
        let response;

        if (this.mode === 'users') {
          response = await this.$api.user.getAll({ page, ...payload });
        } else if (this.mode === 'friends') {
          response = await this.$api.friend.get(this.userID, { page, ...payload });
        }

        if (response) {
          this.$emit('onLoading', false);
          this.$emit(
            'onGetUsers',
            response.data.map((i) => {
              return new UserModel(i);
            }),
            response.pagination,
            this.needReset
          )
        }
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
