<template>
  <component :is="errorPage"></component>
</template>

<script lang="ts">
import Vue from "vue";

import Error500 from '~/components/Error/Error500.vue';

export default Vue.extend({
  props: ['error'],
  layout: 'empty',
  components: {
    Error500
  },
  computed: {
    errorPage(): typeof Error500 {
      return Error500;
    }
  }
});
</script>

<style scoped>

</style>
