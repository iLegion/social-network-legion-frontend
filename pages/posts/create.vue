<template>
  <div class="posts-create-page">
    <div class="container">
      <div class="row">
        <div class="col">
          <PostsForm :errors="errors"
                     @onInput="handleInput"
                     @onSend="handleSend" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ValidationError from "~/classes/Errors/ValidationError";
import PostsForm from "~/components/Post/PostsForm.vue";
import { PostCreatePayloadInterface } from "~/interfaces/classes/Api/PostApiInterface";

export default Vue.extend({
  middleware: ['auth'],
  components: {
    PostsForm
  },
  data: (): { errors: { title?: string[], text?: string[] } | null } => ({
    errors: null
  }),
  methods: {
    handleInput(type: string): void {
      const errors = Object.assign({}, this.errors);

      if (errors) {
        if (type === 'title' || type === 'text') {
          delete errors[type];
        }
      }

      this.errors = errors;
    },
    handleSend(payload: PostCreatePayloadInterface): void {
      this.create(payload);
    },

    async create(payload: PostCreatePayloadInterface): Promise<void> {
      try {
        await this.$api.post.create(payload);

        this.$toast.success('Post is created successfully.');
        setTimeout(() => {
          this.$router.push('/profile');
        }, 2000);
      } catch (e) {
        if (e instanceof ValidationError) {
          this.errors = e.errors;
        }
      }
    }
  }
});
</script>
