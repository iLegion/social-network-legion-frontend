<template>
  <div @click.prevent="send">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from "vuex";

import LocalStorageService from "~/services/LocalStorageService";

export default Vue.extend({
  methods: {
    ...mapActions("auth", ["removeUser"]),

    async send(): Promise<void> {

      try {
        await this.$api.logout.logout();

        LocalStorageService.removeToken();
        this.$axios.setToken('');
        this.removeUser();

        await this.$router.push('/');
      } catch (e) {}
    }
  }
});
</script>
