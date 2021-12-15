<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1">
    <div class="modal-dialog"
         :class="modalSize">
      <div class="modal-content">
        <div class="modal-body">
          <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: 'xl'
    }
  },
  computed: {
    modalSize(): string {
      const availableValues = ['lg', 'xl'];
      const size = this.size;

      return availableValues.includes(size) ? `modal-${size}` : 'modal-xl';
    }
  }
})
</script>
