<template>
  <li class="chat-sidebar-list-item list-group-item list-group-item-action d-flex justify-content-between align-items-start"
      :class="{ 'active': isSelectedDialog }"
      @click="handleClick(dialog.id)">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{{ dialog.title }}</div>
      <div class="message text-muted">{{ dialog.lastMessage }}</div>
    </div>
    <div class="text-end">
      <div v-if="dialog.unreadCount"
            class="badge bg-dark rounded-pill">
          {{ dialog.unreadCount }}
      </div>
      <div class="text-muted">
        {{ formattedLastMessageAt }}
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

import DialogModel from "~/classes/Models/Dialog/DialogModel";
import DateService from "~/services/DateService";

export default Vue.extend({
  props: {
    dialog: {
      type: Object as () => DialogModel,
      required: true
    },
    selectedDialog: {
      type: Object as () => DialogModel,
      required: false
    }
  },
  computed: {
    isSelectedDialog(): boolean {
      return this.selectedDialog?.id === this.dialog.id;
    },
    formattedLastMessageAt(): string {
      return (new DateService()).getTodayTimeOrDate(new Date(this.dialog.lastMessageCreatedAt));
    }
  },
  methods: {
    handleClick(id: number): void {
      this.$emit('onSelectDialog', id);
    }
  }
})
</script>

<style lang="scss" scoped>
.chat-sidebar-list-item {
  border-left: 0;
  border-right: 0;
  border-radius: 0;

  &:first-child {
    border-top: 0;
  }

  &.active {
    color: #212529;
    background-color: #e9ecef;
    border-color: rgba(0, 0, 0, 0.125);
  }

  .message {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
