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
        <font-awesome-icon :icon="faComments"
                           fixed-width />
        <span>{{ post.commentsCount }}</span>
      </div>
      <div>
        <font-awesome-icon :icon="faEye"
                           fixed-width />
        <span>{{ post.viewsCount }}</span>
      </div>
    </div>
    <div class="d-flex">
    <div v-if="author"
         class="me-3">
      <router-link class="author text-muted fst-italic"
                   :to="'/users/' + author.id">
        <font-awesome-icon class="icon text-muted"
                           :icon="faUser"
                           fixed-width />
        <span>{{ author.name }}</span>
      </router-link>
    </div>
    <div class="text-muted fst-italic">
      {{ getFormattedDate }}
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";
import { faComments } from "@fortawesome/free-regular-svg-icons/faComments";
import { faEye } from "@fortawesome/free-regular-svg-icons/faEye";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";

import PostModel from "~/classes/Models/PostModel";
import DateService from "~/services/DateService";
import UserModel from "~/classes/Models/User/UserModel";

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
    faUser() {
      return faUser;
    },
    author(): UserModel | null {
      const author = this.post.author;

      return author && this.$auth.user.id !== author?.id ? author : null;
    },
    getFormattedDate(): string {
      const dateService = new DateService();

      return dateService.isSame(new Date(this.post.createdAt), new Date())
          ? 'Today'
          : dateService.getFormattedDate(new Date(this.post.createdAt));
    }
  },
  methods: {
    handleLike() {
      this.$emit('onAddLike', this.post.id);
    }
  }
});
</script>

<style lang="scss">
.post-footer-component {
  .icon {
    cursor: pointer;
  }

  .author {
    text-decoration: none;
    color: inherit;
  }
}
</style>
