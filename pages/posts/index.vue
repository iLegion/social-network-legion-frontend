<template>
  <div id="posts-page">
    <div class="container-md container-fluid">
      <div class="row">
        <div class="col-12 col-xxl-8 offset-xxl-2">
          <Posts />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Posts from "~/components/Posts/Index.vue";

export default Vue.extend({
  middleware: ['auth'],
  components: {
    Posts
  },
  head() {
    return {
      title: 'Posts',
      meta: [
        {
          hid: 'posts-page',
          name: 'posts',
          content: 'Posts page'
        }
      ]
    }
  }
})
</script>
