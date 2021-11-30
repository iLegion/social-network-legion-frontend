<template>
  <div class="comment bg-light rounded">
    <div class="comment-title h4 mb-3">Write a comment</div>
    <div class="form-floating">
      <textarea
        class="form-control"
        placeholder="Leave a comment here"
        id="floatingTextarea2"
        style="height: 100px"
      >
      </textarea>
      <label for="floatingTextarea2">Leave your comment here</label>
    </div>
    <div class="d-flex justify-content-end mt-2">
      <button type="button" class="btn btn-outline-dark">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment"
};
</script>

<style lang="scss">
.comment {
  padding: 20px 30px;
}
</style>
