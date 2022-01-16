<template>
  <div v-if="dialogs.length"
       class="chat-component row">
    <div class="col-4">
      <Sidebar :dialogs="dialogs"
               :selected-dialog="selectedDialog"
               @onSelectDialog="handleSelectDialog" />
    </div>

    <div class="col-8">
      <Content v-if="selectedDialog"
               :selected-dialog="selectedDialog"
               :pagination="pagination"
               :isEnabledGetMessageQuery="isEnabledGetMessageQuery"
               @onGetMessages="handleGetMessages"/>
      <div v-else
           class="empty d-flex justify-content-center align-items-center vh-90">
        Please, select a chat.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import DialogModel from "~/classes/Models/Dialog/DialogModel";
import DialogMessageModel from "~/classes/Models/Dialog/DialogMessageModel";
import Sidebar from "~/components/Chat/Sidebar/Sidebar.vue";
import Content from "~/components/Chat/Content/Content.vue";
import { DialogMessageInterface } from "~/interfaces/classes/Models/Dialog/DialogMessageModelInterface";

export default Vue.extend({
  components: {
    Sidebar,
    Content
  },
  computed: {
    ...mapGetters('auth', ['user']),

    selectedDialog(): DialogModel | null {
      const dialog = this.dialogs.find(i => i.id === this.selectedDialogId);

      return dialog ?? null;
    }
  },
  data: (): {
    dialogs: DialogModel[],
    pagination: Object,
    selectedDialogId: number,
    isEnabledGetMessageQuery: boolean
  } => {
    return {
      dialogs: [],
      pagination: {},
      selectedDialogId: 0,
      isEnabledGetMessageQuery: false
    }
  },
  methods: {
    initListenDialogChannel(): void {
      this.$echo
        .private(`dialog.users.${this.user.id}`)
        .listen('Dialog\\MessageCame', this.handleListenDialogChannel);
    },
    destroyListenDialogChannel(): void {
      this.$echo
        .private(`dialog.users.${this.user.id}`)
        .stopListening('Dialog\\MessageCame', this.handleListenDialogChannel);
    },

    handleSelectDialog(id: number): void {
      const dialogIndex = this.dialogs.findIndex(i => i.id === id);

      if (dialogIndex !== -1) {
        this.selectedDialogId = id;

        this.getMessages(id, dialogIndex);
      }
    },
    handleSentMessage(id: number, payload: DialogMessageModel): void {
      const dialogIndex = this.dialogs.findIndex(i => i.id === id);
      const dialog = Object.assign(new DialogModel(), this.dialogs[dialogIndex]);

      if (dialogIndex !== -1) {
        dialog.lastMessage = payload.text;
        dialog.lastMessageCreatedAt = payload.createdAt;
        dialog.lastMessageUpdatedAt = payload.updatedAt;

        dialog.messages.push(payload);
      }

      this.dialogs.splice(dialogIndex, 1);
      this.dialogs.unshift(dialog)
    },
    handleListenDialogChannel(data: DialogMessageInterface): void {
      const message = new DialogMessageModel(data);
      const dialogIndex = this.dialogs.findIndex((i) => i.id === message.dialogId);
      const dialog = Object.assign(new DialogModel(), this.dialogs[dialogIndex]);

      if (dialogIndex !== -1) {
        dialog.lastMessage = message.text;
        dialog.lastMessageCreatedAt = message.createdAt;
        dialog.lastMessageUpdatedAt = message.updatedAt;

        if (this.selectedDialogId !== dialog.id) {
          dialog.unreadCount++;
        } else {
          dialog.messages.push(message);
        }

        this.dialogs.splice(dialogIndex, 1);
        this.dialogs.unshift(dialog)
      }
    },
    handleGetMessages(id: number, page: number): void {
      const dialogIndex = this.dialogs.findIndex(i => i.id === id);

      this.isEnabledGetMessageQuery = true;

      this.getMessages(id, dialogIndex, page);
    },

    async getDialogs(): Promise<void> {
      try {
        const response = await this.$api.dialog.getMyDialogs();

        this.dialogs.push(
          ...response.data.map((i) => {
            return new DialogModel(i);
          })
        );
        this.pagination = response.pagination;
      } catch (e) {}
    },
    async getMessages(id: number, dialogIndex: number, page: number = 1): Promise<void> {
      try {
        const response = await this.$api.dialogMessage.getDialogMessage(id, page);
        const dialog = Object.assign(new DialogModel(), this.dialogs[dialogIndex]);

        if (dialog.messages.length) {
          dialog.messages.unshift(...response.data.reverse().map((i) => {
            return new DialogMessageModel(i);
          }));
        } else {
          dialog.messages.push(...response.data.reverse().map((i) => {
            return new DialogMessageModel(i);
          }));
        }

        this.pagination = response.pagination;
      } catch (e) {} finally {
        this.isEnabledGetMessageQuery = false;
      }
    }
  },
  async fetch(): Promise<void> {
    await this.getDialogs();

    this.initListenDialogChannel();
  },
  beforeDestroy() {
    this.destroyListenDialogChannel();
  }
})
</script>
