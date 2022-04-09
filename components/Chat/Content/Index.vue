<template>
  <div class="chat-content-component">
    <div class="dialog border rounded shadow">
      <TopBar :dialog="selectedDialog" />
      <MiddleSide :dialog="selectedDialog"
                  :pagination="pagination"
                  :isEnabledGetMessageQuery="isEnabledGetMessageQuery"
                  @onGetMessages="handleGetMessages"/>
      <BottomBar :dialog="selectedDialog"
                 @onSentMessage="handleSentMessage" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import DialogModel from "~/classes/Models/Dialog/DialogModel";
import DialogMessageModel from "~/classes/Models/Dialog/DialogMessageModel";
import TopBar from "~/components/Chat/Content/TopBar/Index.vue";
import MiddleSide from "~/components/Chat/Content/MiddleSide/Index.vue";
import BottomBar from "~/components/Chat/Content/BottomBar/Index.vue";

export default Vue.extend({
  components: {
    TopBar,
    MiddleSide,
    BottomBar
  },
  props: {
    selectedDialog: {
      type: Object as () => DialogModel,
      required: true
    },
    pagination: {
      type: Object,
      required: true
    },
    isEnabledGetMessageQuery: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    handleSentMessage(id: number, payload: DialogMessageModel): void {
      this.$emit('onSentMessage', id, payload)
    },
    handleGetMessages(id: number, page: number): void {
      this.$emit('onGetMessages', id, page)
    }
  }
})
</script>

<style lang="scss" scoped>
  .chat-content-component {
    .dialog {
      height: 90vh;
    }
  }
</style>
