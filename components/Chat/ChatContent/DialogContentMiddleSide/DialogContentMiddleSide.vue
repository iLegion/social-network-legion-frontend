<template>
  <div class="dialog-content-middle-side-component bg-light">
    <div class="content p-2">
      <template v-if="dialog && dialog.messages.length">
        <DialogMessage v-for="message in dialog.messages"
                       :key="'message' + message.id"
                       :message="message"/>
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
    }
  }
})
</script>

<style lang="scss">
.dialog-content-middle-side-component {
  height: 76vh;

  .content {
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
