<template>
  <div class="dialog-content-middle-side-component bg-light">
    <div id="scrollable"
         class="content p-2">
      <template v-if="dialog.messages.length">
        <DialogMessage v-for="message in dialog.messages"
                       :key="'message-' + message.id"
                       :message="message"
                       class="mb-2" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import DialogModel from "~/classes/Models/Dialog/DialogModel";
import DialogMessage from "~/components/Chat/Content/MiddleSide/DialogMessage.vue";
import DialogMessageModel from "~/classes/Models/Dialog/DialogMessageModel";

export default Vue.extend({
  components: {
    DialogMessage
  },
  props: {
    dialog: {
      type: Object as () => DialogModel,
      required: true
    },
    enableAutoScroll: {
      type: Boolean,
      required: false,
      default: false
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
  data: (): { isScrolled: boolean } => ({
    isScrolled: false
  }),
  methods: {
    initLazyLoading(): any {
      const pagination = this.pagination;
      const el = document.getElementById('scrollable');

      if (el && el.scrollTop < 50) {
        if (!this.isEnabledGetMessageQuery && pagination && (pagination.currentPage < pagination.lastPage)) {
          this.$emit('onGetMessages', this.dialog.id, pagination.currentPage + 1);
        }
      }
    },
    scrollToBottom(): void {
      const el = document.getElementById('scrollable');

      if (el) {
        el.scrollTo(0, el.scrollHeight);

        this.isScrolled = true;
      }
    }
  },
  mounted() {
    const el = document.getElementById('scrollable');

    if (el) {
      el.addEventListener('scroll', this.initLazyLoading);
    }
  },
  updated() {
    if (this.dialog?.messages.length && !this.isScrolled) {
      this.scrollToBottom();
    }
  },
  beforeDestroy() {
    const el = document.getElementById('scrollable');

    if (el) {
      el.removeEventListener('scroll', this.initLazyLoading);
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
