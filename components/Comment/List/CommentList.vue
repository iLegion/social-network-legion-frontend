<template>
  <div class="comment-list-component">
    <div v-for="comment in comments"
         :key="'post-' + post.id + '-comment-' + comment.id">
      <CommentItem :comment="comment" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import PostModel from "~/classes/Models/PostModel";
import CommentModel from "~/classes/Models/CommentModel";
import CommentItem from "~/components/Comment/List/CommentItem.vue";

export default Vue.extend({
  components: {
    CommentItem
  },
  props: {
    post: {
      type: Object as () => PostModel,
      required: true
    },
    comments: {
      type: Array as () => CommentModel[],
      required: true
    }
  }
});
</script>
