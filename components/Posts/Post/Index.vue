<template>
  <div v-show="isReadyEditor"
       class="card mb-3 shadow">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-end">
        <h5 class="card-title pe-cursor"
            @click="handleOpenModal">
          {{ post.title }}
        </h5>

        <HeaderDropdown v-if="post.author.id === $auth.user.id"
                            :post="post"
                            @onDelete="handleDelete" />
      </div>
      <img :src="post.image" class="card-img-top" alt="Image not loaded.">
      <div class="card-text my-2">
        <Editor :id="(isSimple ? 'simple-' : '') + 'editorjs-post-' + post.id"
                :value="contentForEditor"
                @onReady="handleOnReadyEditor"
                read-only />
      </div>

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
      <Footer ref="PostFooter"
                  :post="post"
                  @onAddLike="handleAddLike" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { faComments } from "@fortawesome/free-regular-svg-icons/faComments";
import { OutputData } from "@editorjs/editorjs/types/data-formats";

import PostModel from "~/classes/Models/PostModel";
import HeaderDropdown from "~/components/Posts/Post/HeaderDropdown.vue";
import Footer from "~/components/Posts/Post/Footer.vue";
import Editor from "~/components/Editor/Index.vue";

export default Vue.extend({
  name: 'Post',
  components: {
    HeaderDropdown,
    Footer,
    Editor
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
    faComments() {
      return faComments;
    },
    contentForEditor(): OutputData | null {
      return this.post?.text ? { blocks: this.post.text } : null;
    }
  },
  data: (): { isReadyEditor: boolean } => {
    return {
      isReadyEditor: false
    }
  },
  methods: {
    handleAddLike(id: number): void {
      this.$emit('onAddLike', id);
    },
    handleAddView(id: number): void {
      this.$emit('onAddView', id);
    },
    handleOpenModal(): void {
      this.$emit('onOpenModal', this.post.id);
    },
    handleDelete(id: number): void {
      this.$emit('onDelete', id);
    },
    handleOnReadyEditor(): void {
      this.isReadyEditor = true;
    }
  }
})
</script>

<style lang="scss">
.icon {
  margin-left: 3px;
}
</style>
