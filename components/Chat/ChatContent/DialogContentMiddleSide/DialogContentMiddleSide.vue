<template>
  <div class="dialog-content-middle-side-component bg-light">
    <div id="scrollable"
         class="content p-2">
      <template v-if="dialog && dialog.messages.length">
        <DialogMessage v-for="message in dialog.messages"
                       :key="'message' + message.id"
                       :message="message"
                       class="mb-2"/>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import DialogModel from "~/classes/Models/Dialog/DialogModel";
import DialogMessage from "~/components/Chat/ChatContent/DialogContentMiddleSide/DialogMessage.vue";

export default Vue.extend({
  components: {
    DialogMessage
  },
  props: {
    dialog: {
      type: Object as () => DialogModel,
      default: () => {}
    },
    enableAutoScroll: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    scrollToBottom(): void {
      const el = document.getElementById('scrollable');

      if (el) {
        el.scrollTo(0, el.scrollHeight);
      }
    }
  },
  updated() {
    if (this.dialog?.messages.length) {
      this.scrollToBottom();
    }
  }
})
</script>

<style lang="scss">
.dialog-content-middle-side-component {
  height: 76vh;

  .content {
    height: 76vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f9f9fd;
    }

    &::-webkit-scrollbar-thumb {
      background-color: gray;
    }
  }
}
</style>
