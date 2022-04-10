<template>
  <component :is="errorPage"></component>
</template>

<script lang="ts">
import Vue from "vue";

import Error404 from '~/components/Error/Error404.vue';
import Error500 from '~/components/Error/Error500.vue';

export default Vue.extend({
  props: {
    error: {
      type: Object as () => { message: string, statusCode: number },
      required: true
    }
  },
  layout: 'empty',
  components: {
    Error404,
    Error500
  },
  computed: {
    errorPage(): typeof Error404 | typeof Error500 {
      if (this.error.statusCode === 404) {
        return Error404;
      } else {
        return Error500;
      }
    }
  }
});
</script>
