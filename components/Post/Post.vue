<template>
  <div class="card mb-3">
    <!--    <img src="..." class="card-img-top" alt="...">-->
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.text }}</p>
    </div>
    <div class="card-footer">
      <PostFooter :post="post"
                  @onAddLike="handleAddLike"
                  @onAddView="handleAddView" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import PostModel from "~/classes/Models/PostModel";
import PostFooter from "~/components/Post/PostFooter.vue";

export default Vue.extend({
  components: {
    PostFooter
  },
  props: {
    post: {
      type: Object as () => PostModel,
      required: true
    }
  },
  methods: {
    handleAddLike(id: number): void {
      this.$emit('onAddLike', id);
    },
    handleAddView(id: number): void {
      this.$emit('onAddView', id);
    }
  }
})
</script>
