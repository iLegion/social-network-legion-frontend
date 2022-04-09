<template>
  <div class="comment-list-component">
    <div v-for="comment in comments"
         :key="'comment-' + comment.id">
      <Item :comment="comment" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import CommentModel from "~/classes/Models/CommentModel";
import Item from "~/components/Comments/List/Item.vue";

export default Vue.extend({
  components: {
    Item
  },
  props: {
    comments: {
      type: Array as () => CommentModel[],
      required: true
    }
  }
});
</script>
