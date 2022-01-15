<template>
  <div>
    <Header />
    <Nuxt v-if="!isLoading" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from "vuex";

import LocalStorageService from "~/services/LocalStorageService";
import Header from "~/components/Core/Header.vue";

export default Vue.extend({
  middleware: ['authenticated'],
  components: {
    Header
  },
  computed: {
    ...mapGetters('auth', ['isLoading'])
  },
  methods: {
    ...mapActions('auth', ['updateLoadingStatus', 'setUser']),

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
      } catch (e) {} finally {
        this.updateLoadingStatus(false);
      }
    }
  },
  async fetch(): Promise<void> {
    if (this.setToken()) {
      await this.getUser();
    }
  }
})
</script>
