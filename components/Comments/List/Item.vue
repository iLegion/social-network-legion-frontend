<template>
  <div class="comment-item-component card mb-3">
    <div class="row g-0">
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <img :src="comment.user.avatar" class="img-fluid rounded-start" alt="">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ shortUserName }}</h5>
          <p class="card-text">{{ comment.text }}</p>
          <p class="card-text">
            <small class="text-muted">{{ formattedDate }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import CommentModel from "~/classes/Models/CommentModel";
import DateService from "~/services/DateService";

export default Vue.extend({
  props: {
    comment: {
      type: Object as () => CommentModel,
      required: true
    }
  },
  computed: {
    formattedDate(): string {
      return (new DateService()).getFormattedDate(new Date(this.comment.createdAt), 'h:m:s d-m-Y');
    },
    shortUserName(): string {
      const value = this.comment.user?.name;

      if (value) {
        return value.length > 50 ? value.slice(0, 50) + "..." : value;
      }

      return '';
    },
  }
});
</script>

<style lang="scss">
.comment-item-component.card {
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
