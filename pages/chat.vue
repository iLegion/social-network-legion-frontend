<template>
  <div class="chat-page p-2">
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <DialogList :dialogs="dialogs" @onSelect="handleSelectDialog" />
        </div>
        <div class="col-8">
          <div v-if="selectedDialogId"
               class="dialog">
            <WithWho />
            <Dialog :dialog="getSelectedDialog" />
            <TextField />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import DialogModel from "~/classes/Models/Dialog/DialogModel";
import DialogMessageModel from "~/classes/Models/Dialog/DialogMessageModel";
import DialogList from "~/components/Chat/DialogList.vue";
import WithWho from "~/components/Chat/ChatContent/WithWho.vue";
import Dialog from "~/components/Chat/ChatContent/Dialog.vue";
import TextField from "~/components/Chat/ChatContent/TextField.vue";

export default Vue.extend({
  components: {
    DialogList,
    WithWho,
    Dialog,
    TextField
  },
  computed: {
    getSelectedDialog(): DialogModel | null {
      const dialog = this.dialogs.find(i => i.id === this.selectedDialogId);

      return dialog ?? null;
    }
  },
  data: (): { dialogs: DialogModel[], pagination: Object, selectedDialogId: number } => {
    return {
      dialogs: [],
      pagination: {},
      selectedDialogId: 0
    }
  },
  methods: {
    handleSelectDialog(id: number): void {
      const dialogIndex = this.dialogs.findIndex(i => i.id === id);

      this.selectedDialogId = id;

      if (!this.dialogs[dialogIndex].messages.length) {
        this.getMessages(id, dialogIndex);
      }
    },

    async get(): Promise<void> {
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
    async getMessages(id: number, dialogIndex: number): Promise<void> {
      try {
        const response = await this.$api.dialogMessage.getDialogMessage(id);

        this.dialogs[dialogIndex].messages.push(
            ...response.data.map((i) => {
              return new DialogMessageModel(i);
            })
        );
        this.pagination = response.pagination;
      } catch (e) {}
    }
  },
  async fetch(): Promise<void> {
    await this.get();
  }
})
</script>
