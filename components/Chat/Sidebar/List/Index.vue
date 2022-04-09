<template>
  <ul class="chat-sidebar-list list-group">
    <Item v-for="dialog in dialogs"
          :key="'dialog' + dialog.id"
          :dialog="dialog"
          :selected-dialog="selectedDialog"
          @onSelectDialog="handleSelectDialog" />
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

import DialogModel from "~/classes/Models/Dialog/DialogModel";
import Item from "~/components/Chat/Sidebar/List/Item.vue";

export default Vue.extend({
  components: { Item },
  props: {
    dialogs: {
      type: Array as () => DialogModel[],
      required: true
    },
    selectedDialog: {
      type: Object as () => DialogModel,
      required: false
    }
  },
  methods: {
    handleSelectDialog(id: number): void {
      this.$emit('onSelectDialog', id);
    }
  }
})
</script>

<style lang="scss" scoped>
.chat-sidebar-list {
  height: 90vh;
  overflow-y: hidden;
  border: 1px solid rgba(0, 0, 0, 0.125);
  cursor: pointer;

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
}
</style>
