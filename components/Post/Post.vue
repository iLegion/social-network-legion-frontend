<template>
  <div class="card mb-3">
    <!--    <img src="..." class="card-img-top" alt="...">-->
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.text }}</p>
      <p class="card-text">
        <small class="text-muted">
          {{  post.createdAt }}
        </small>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import PostModel from "~/classes/Models/PostModel";

export default Vue.extend({
  props: {
    post: {
      type: PostModel,
      default: () => {}
    }
  }
})
</script>
