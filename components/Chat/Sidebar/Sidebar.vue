<template>
  <div class="chat-sidebar-component shadow">
    <List :dialogs="dialogs"
          :selected-dialog="selectedDialog"
          @onSelectDialog="handleSelectDialog" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import DialogModel from "~/classes/Models/Dialog/DialogModel";
import List from "~/components/Chat/Sidebar/List/List.vue";

export default Vue.extend({
  components: { List },
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

<style lang="scss">
  .chat-sidebar-component {
    position: relative;
  }
</style>
