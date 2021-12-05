<template>
  <div class="card mb-3 shadow">
    <!--    <img src="..." class="card-img-top" alt="...">-->
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ isSimple ? shortDescription : post.text }}</p>
      <div class="d-flex justify-content-end">
        <button v-if="isSimple"
                type="button"
                class="btn btn-outline-dark"
                @click="handleOpenModal">
          More
        </button>
      </div>
    </div>
    <div class="card-footer">
      <PostFooter ref="PostFooter"
                  :post="post"
                  @onAddLike="handleAddLike"
                  @onAddView="handleAddView"/>
    </div>

    <Modal v-if="isSimple"
           :id="modalId">
      <template v-slot:content>
        <Post :post="post" :is-simple="false"></Post>
        <Comment></Comment>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Modal as BootstrapModal } from 'bootstrap';

import PostModel from "~/classes/Models/PostModel";
import PostFooter from "~/components/Post/PostFooter.vue";
import Modal from "~/components/Modal/Modal.vue";
import Comment from "~/components/Comment/Comment.vue";

export default Vue.extend({
  name: 'Post',
  components: {
    PostFooter,
    Modal,
    Comment
  },
  props: {
    post: {
      type: Object as () => PostModel,
      required: true
    },
    isSimple: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    shortDescription() {
      return this.post.text.slice(0, 300) + "...";
    },
    modalId(): string {
      return 'modal-post-' + this.post.id;
    }
  },
  data: (): { modalInstance: BootstrapModal | null} => {
    return {
      modalInstance: null
    }
  },
  methods: {
    initModal(): void {
      const el = document.getElementById(this.modalId);

      if (el) {
        this.modalInstance = new BootstrapModal(el)
      }
    },

    handleAddLike(id: number): void {
      this.$emit('onAddLike', id);
    },
    handleAddView(id: number): void {
      this.$emit('onAddView', id);
    },
    handleOpenModal(): void {
      this.modalInstance?.show();

      if (this.$refs.PostFooter && this.$refs.PostFooter instanceof PostFooter) {
        this.$refs.PostFooter.handleView();
      }
    }
  },
  mounted() {
    this.initModal();
  }
})
</script>
