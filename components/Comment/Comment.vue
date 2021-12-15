<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <CommentForm :post="post" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <CommentList :post="post"
                     :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import CommentModel from "~/classes/Models/CommentModel";
import PostModel from "~/classes/Models/PostModel";
import {
  CommentGetPayloadInterface,
} from "~/interfaces/classes/Api/CommentApiInterface";
import CommentForm from "~/components/Comment/CommentForm.vue";
import CommentList from "~/components/Comment/List/CommentList.vue";

export default Vue.extend({
  components: {
    CommentForm,
    CommentList
  },
  props: {
    post: {
      type: Object as () => PostModel,
      required: true
    }
  },
  data: (): { comments: CommentModel[], form: { text: string} } => ({
    comments: [],
    form: {
      text: '',
    }
  }),
  methods: {
    handleAddComment(payload: CommentModel): void {
      this.comments.push(payload);
    },

    async get(payload: CommentGetPayloadInterface): Promise<void> {
      try {
        const response = await this.$api.comment.getById(payload);

        this.comments.push(...response.data.map(i => new CommentModel(i)));
      } catch (e) {}
    }
  },
  async fetch(): Promise<void> {
    await this.get({ type: 'post', id: this.post.id })
  }
});
</script>
