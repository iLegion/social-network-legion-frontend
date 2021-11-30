<template>
  <div class="card mb-3">
    <!--    <img src="..." class="card-img-top" alt="...">-->
    <div class="card-body">
      <modal>
        <template v-slot:post>
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ shortDescription }}</p>
      <div class="card-footer">
      <PostFooter :post="post"
                  @onAddLike="handleAddLike"
                  @onAddView="handleAddView" />
    </div>
    </template>
     </modal>
        <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ shortDescription }}</p>
      <div class="d-flex justify-content-end">
      <span
      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#creditModal"
                    >
                      More
                    </span>
                    <Modal :post="post"
                    />
      </div>
    </div>
    <div class="card-footer">
      <PostFooter :post="post"
                  @onAddLike="handleAddLike"
                  @onAddView="handleAddView" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import PostModel from "~/classes/Models/PostModel";
import PostFooter from "~/components/Post/PostFooter.vue";
import Modal from "~/components/Modal/Modal.vue";

export default Vue.extend({
  components: {
    PostFooter,
    Modal
  },
  props: {
    post: {
      type: Object as () => PostModel,
      required: true
    }
  },
  methods: {
    handleAddLike(id: number): void {
      this.$emit('onAddLike', id);
    },
    handleAddView(id: number): void {
      this.$emit('onAddView', id);
    }
  },
  computed: {
      shortDescription() {
      return this.post.text.slice(0, 300) + "...";
    }
  }
})
</script>
