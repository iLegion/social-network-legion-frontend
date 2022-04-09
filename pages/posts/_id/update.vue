<template>
  <div class="posts-update-page">
    <div class="container">
      <div class="row">
        <div class="col">
          <Form v-if="post"
                :post="post"
                :errors="errors"
                @onInput="handleInput"
                @onSend="handleSend" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import PostModel from "~/classes/Models/PostModel";
import ValidationError from "~/classes/Errors/ValidationError";
import { PostUpdatePayloadInterface } from "~/interfaces/classes/Api/PostApiInterface";
import Form from "~/components/Posts/Form.vue";

export default Vue.extend({
  middleware: ['auth'],
  components: {
    Form
  },
  data: (): { post: PostModel | null, errors: { title?: string[], text?: string[] } | null } => {
    return {
      post: null,
      errors: null
    }
  },
  methods: {
    handleInput(type: string): void {
      const errors = this.errors;

      if (errors) {
        if (type === 'title' || type === 'text') {
          delete errors[type];
        }
      }
    },
    handleSend(payload: PostUpdatePayloadInterface): void {
      if (this.post) {
        this.update(this.post.id, payload);
      }
    },

    async get(id: number): Promise<void> {
      try {
        const response = await this.$api.post.getById(id);

        this.post = new PostModel(response.data);
      } catch (e) {}
    },
    async update(id: number, payload: PostUpdatePayloadInterface): Promise<void> {
      try {
        await this.$api.post.update(id, payload);

        this.$toast.success('Post is updated successfully.');
        setTimeout(() => {
          this.$router.push('/profile');
        }, 2000);
      } catch (e) {
        if (e instanceof ValidationError) {
          this.errors = e.errors;
        }
      }
    },
    async view(type: string, id: number): Promise<void> {
      try {
        await this.$api.view.store({ type, id });

        this.$emit('onAddView', id);
      } catch (e) {}
    }
  },
  async fetch(): Promise<void> {
    await this.get(Number(this.$route.params.id));
    await this.view('post', Number(this.$route.params.id));
  }
});
</script>
