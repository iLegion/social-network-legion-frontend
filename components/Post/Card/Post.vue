<template>
  <div class="card mb-3 shadow">
<!--    <img src="..." class="card-img-top" alt="...">-->
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-end">
        <h5 class="card-title pe-cursor"
            @click="handleOpenModal">
          {{ post.title }}
        </h5>

        <PostHeaderDropdown v-if="post.author.id === user.id"
                            :post="post"
                            @onDelete="handleDelete" />
      </div>
      <p class="card-text mt-2">
        {{ isSimple ? shortDescription : post.text }}
      </p>

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
                  @onAddLike="handleAddLike" />
    </div>

    <Modal v-if="isSimple"
           :id="modalId">
      <template v-slot:content>
        <Post :post="post"
              :is-simple="false" class="mb-4"/>
        <Comment v-if="isLoadedComments"
                 :post="post" />
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from "vuex";
import { Modal as BootstrapModal } from 'bootstrap';
import { faComments } from "@fortawesome/free-regular-svg-icons/faComments";

import PostModel from "~/classes/Models/PostModel";
import PostHeaderDropdown from "~/components/Post/Card/PostHeaderDropdown.vue";
import PostFooter from "~/components/Post/Card/PostFooter.vue";
import Modal from "~/components/Modal/Modal.vue";
import Comment from "~/components/Comment/Comment.vue";

export default Vue.extend({
  name: 'Post',
  components: {
    PostHeaderDropdown,
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
    ...mapGetters('auth', ['user']),

    faComments() {
      return faComments;
    },
    shortDescription(): string {
      const value = this.post.text;

      return value.length > 300 ? value.slice(0, 300) + "..." : value;
    },
    modalId(): string {
      return 'modal-post-' + this.post.id;
    }
  },
  data: (): { modalInstance: BootstrapModal | null, isLoadedComments: boolean } => ({
    modalInstance: null,
    isLoadedComments: false
  }),
  methods: {
    initModal(): void {
      const el = document.getElementById((this.modalId as string));

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
      this.isLoadedComments = true;
      this.modalInstance?.show();
      this.$emit('onAddView', this.post.id);
    },
    handleDelete(id: number): void {
      this.$emit('onDelete', id);
    }
  },
  mounted() {
    this.initModal();
  }
})
</script>

<style lang="scss">
.icon {
  margin-left: 3px;
}
</style>
