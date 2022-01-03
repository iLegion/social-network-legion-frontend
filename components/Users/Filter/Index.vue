<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue";

import UserModel from "~/classes/Models/User/UserModel";
import { UsersGetPayloadInterface } from "~/interfaces/classes/Api/UserApiInterface";

export default Vue.extend({
  props: {
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
  data: (): { filters: {}, isEnabledQuery: boolean } => ({
    filters: {},
    isEnabledQuery: false
  }),
  methods: {
    initLazyLoading(): any {
      const pagination = this.pagination;
      const isEnabledQuery = this.isEnabledQuery;

      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        if (!isEnabledQuery && pagination && (pagination.currentPage < pagination.lastPage)) {
          this.get({}, pagination.currentPage + 1)
        }
      }
    },

    async get(payload: UsersGetPayloadInterface = {}, page: number = 1): Promise<void> {
      this.isEnabledQuery = true;

      try {
        let response;

        if (this.mode === 'users') {
          response = await this.$api.user.getAll({ page }, payload);
        } else if (this.mode === 'friends') {
          response = await this.$api.friend.get(this.userID, { page }, payload);
        }

        this.isEnabledQuery = false;

        if (response) {
          this.$emit(
            'onGetUsers',
            response.data.map((i) => {
              return new UserModel(i);
            }),
            response.pagination
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
