<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: ['auth'],
  head() {
    return {
      title: 'Index',
      meta: [
        {
          hid: 'index-page',
          name: 'index',
          content: 'Index page'
        }
      ]
    }
  },
  methods: {
    redirectToPosts(): void {
      this.$router.push('/posts');
    }
  },
  mounted() {
    this.redirectToPosts();
  }
})
</script>
