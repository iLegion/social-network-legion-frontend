<template>
  <div class="dialog-component bg-light">
    <div class="content p-2">
      <template v-if="dialog && dialog.messages.length">
        <div v-for="message in dialog.messages"
             :key="'message' + message.id"
             class="card">
          <div class="card-body">
            <p class="card-text">{{ message.text }}</p>
            <div class="text-end text-muted">{{ message.updatedAt }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import DialogModel from "~/classes/Models/Dialog/DialogModel";

export default Vue.extend({
  props: {
    dialog: {
      type: Object as () => DialogModel,
      default: () => {}
    }
  }
})
</script>

<style lang="scss">
  .dialog-component {
    .content {
      height: 68.8vh;
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
