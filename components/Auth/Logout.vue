<template>
  <div @click.prevent="send">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    async send(): Promise<void> {
      try {
        await this.$auth.logout();

        await this.$router.push('/');
      } catch (e) {}
    }
  }
});
</script>
