<template>
  <div>
    <Header></Header>
    <Nuxt></Nuxt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from "vuex";

import Header from "~/components/Core/Header.vue";
import LocalStorageService from "~/services/LocalStorageService";

export default Vue.extend({
  components: {
    Header
  },
  methods: {
    ...mapActions("auth", ["setUser"]),

    setToken(): boolean {
      const token = LocalStorageService.getToken();

      if (token) {
        this.$axios.setToken(token);
      }

      return !!token;
    },

    async getUser(): Promise<void> {
      try {
        const response = await this.$api.user.me();

        this.setUser(response.data)
      } catch (e) {}
    }
  },
  async fetch(): Promise<void> {
    if (this.setToken()) {
      await this.getUser();
    }
  }
})
</script>
