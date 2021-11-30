<template>
  <div
    class="modal fade"
    id="creditModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
            <div class="card shadow-lg p-3 mb-5 bg-white rounded">
            <div class="card-body">
            <slot name="post"></slot>
            </div>
          </div>
            <slot name="comment">
                <Comment />
            </slot> 
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import PostModel from "~/classes/Models/PostModel";
import Comment from "~/components/Post/Comment.vue";

export default Vue.extend({
    components: {
        Comment
    },
  props: {
    post: {
      type: Object as () => PostModel,
      required: true
    }
  }
})
</script>
