<template>
  <div id="posts-page">
    <div class="container">
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

import Posts from "~/components/Post/Block.vue";

export default Vue.extend({
  middleware: ['authenticated'],
  components: {
    Posts
  }
})
</script>
