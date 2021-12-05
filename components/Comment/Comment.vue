<template>
  <div class="comment">
    <div class="comment-title h4 mb-3">Write a comment</div>
    <div class="form-floating">
      <textarea
        class="form-control"
        placeholder="Leave a comment here"
        style="height: 100px"
      >
      </textarea>
      <label>Leave your comment here</label>
    </div>
    <div class="d-flex justify-content-end mt-2">
      <button type="button" class="btn btn-outline-dark">Send</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss">
.comment {
  padding: 20px 30px;
}
</style>
