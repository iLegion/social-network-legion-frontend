<template>
  <form @submit.prevent="handleSend">
    <div class="comment">
      <div class="comment-title h4 mb-3">Write a comment</div>
      <div class="form-floating">
      <textarea
          class="form-control"
          placeholder="Leave a comment here"
          style="height: 100px"
          v-model="form.text"
      >
      </textarea>
        <label>Leave your comment here</label>
      </div>
      <div class="d-flex justify-content-end mt-2">
        <button type="submit"
                class="btn btn-outline-dark">
          Send
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import CommentModel from "~/classes/Models/CommentModel";
import { CommentStorePayloadInterface } from "~/interfaces/classes/Api/CommentApiInterface";
import PostModel from "~/classes/Models/PostModel";

export default Vue.extend({
  props: {
    post: {
      type: Object as () => PostModel,
      required: true
    }
  },
  data: (): { form: { text: string} } => ({
    form: {
      text: '',
    }
  }),
  methods: {
    handleSend(): void {
      this.store(Object.assign(this.form, { type: 'post', id: this.post.id }));
    },

    async store(payload: CommentStorePayloadInterface): Promise<void> {
      try {
        const response = await this.$api.comment.store(payload);

        this.form.text = '';
        this.$emit('onAddComment', new CommentModel(response.data))
      } catch (e) {}
    },
  }
})
</script>
