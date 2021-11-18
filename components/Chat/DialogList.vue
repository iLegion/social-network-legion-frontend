<template>
  <div class="chat-dialogs-list-component">
    <ul class="list-group">
      <li v-for="dialog in dialogs"
          :key="'dialog' + dialog.id"
          class="list-group-item d-flex justify-content-between align-items-start"
          @click="handleClickDialog(dialog.id)">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ dialog.title }}</div>
          <div class="message">
            {{ dialog.lastMessage }}
          </div>
        </div>
        <span class="badge bg-primary rounded-pill">{{ dialog.unreadCount }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import DialogModel from "~/classes/Models/Dialog/DialogModel";

export default Vue.extend({
  props: {
    dialogs: {
      type: Array as () => DialogModel[],
      default: []
    }
  },
  methods: {
    handleClickDialog(id: number): void {
      this.$emit('onSelect', id);
    }
  }
})
</script>

<style lang="scss">
  .chat-dialogs-list-component {
    position: relative;

    .list-group {
      height: 90vh;
      overflow-y: hidden;
      border: 1px solid rgba(0, 0, 0, 0.125);

      &:hover {
        overflow-y: auto;
      }

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background-color: #f9f9fd;
      }

      &::-webkit-scrollbar-thumb {
        background-color: gray;
      }

      .list-group-item {
        &:first-child {
          border-top: 0;
        }

        border-left: 0;
        border-right: 0;
        border-radius: 0;

        .message {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
</style>
