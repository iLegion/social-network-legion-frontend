<template>
  <div class="post-footer-component d-flex justify-content-between">
    <div class="d-flex">
      <div class="me-3">
        <font-awesome-icon class="icon"
                           :icon="faHeart"
                           fixed-width
                           @click="handleLike" />
        <span>{{ post.likesCount }}</span>
      </div>
      <div class="me-3">
        <font-awesome-icon class="icon"
                           :icon="faComments"
                           fixed-width />
        <span>{{ post.commentsCount }}</span>
      </div>
      <div>
        <font-awesome-icon class="icon"
                           :icon="faEye"
                           fixed-width />
        <span>{{ post.viewsCount }}</span>
      </div>
    </div>
    <div class="text-muted">
      {{ formattedTime }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";
import { faComments } from "@fortawesome/free-regular-svg-icons/faComments";
import { faEye } from "@fortawesome/free-regular-svg-icons/faEye";

import PostModel from "~/classes/Models/PostModel";
import DateService from "~/services/DateService";

export default Vue.extend({
  props: {
    post: {
      type: Object as () => PostModel,
      required: true
    }
  },
  computed: {
    faHeart() {
      return faHeart;
    },
    faComments() {
      return faComments;
    },
    faEye() {
      return faEye;
    },
    formattedTime(): string {
      const createdAt = this.post.createdAt;

      return createdAt
          ? (new DateService()).getFormattedDate(new Date(createdAt), 'h:m:s d-m-Y')
          : '';
    }
  },
  methods: {
    handleLike() {
      this.like('post', this.post.id);
    },

    async like(type: string, id: number): Promise<void> {
      try {
        await this.$api.like.store({ type, id });

        this.$emit('onAddLike', id);
        this.$toasted.success('Like added successfully.');

        await this.view(type, id);
      } catch (e) {}
    },
    async view(type: string, id: number): Promise<void> {
      try {
        await this.$api.view.store({ type, id });

        this.$emit('onAddView', id);
      } catch (e) {}
    }
  }
});
</script>

<style lang="scss">
.post-footer-component {
  .icon {
    cursor: pointer;
  }
}
</style>
