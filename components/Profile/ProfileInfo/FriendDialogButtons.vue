<template>
  <div class="d-flex">
    <button v-if="!user.isMyFriend && user.privacySettings.addFriendsMode"
            type="button"
            class="btn btn-outline-dark me-2"
            @click="handleAddFriend">
      Add to friends
    </button>
    <button v-if="(user.isMyFriend || user.privacySettings.messageWritingMode) && !user.hasDialogWithMe"
            type="button"
            class="btn btn-outline-dark"
            @click="handleCreateDialog">
      Create dialog
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import UserModel from "~/classes/Models/User/UserModel";
import { DialogStorePayloadInterface } from "~/interfaces/classes/Api/Dialog/DialogApiInterface";

export default Vue.extend({
  props: {
    user: {
      type: Object as () => UserModel,
      required: true
    }
  },
  methods: {
    handleAddFriend(): void {
      this.addFriend(this.user.id);
    },
    handleCreateDialog(): void {
      const user = this.user;

      this.createDialog({ title: user.name, userID: user.id });
    },

    async addFriend(id: number): Promise<void> {
      try {
        await this.$api.friend.store(id);

        this.$toast.success('Friend added successfully.');
        this.$emit('onAddFriend', this.user.id);
      } catch (e) {}
    },
    async createDialog(payload: DialogStorePayloadInterface): Promise<void> {
      try {
        await this.$api.dialog.store(payload);

        this.$toast.success('Dialog created successfully.');
        this.$emit('onCreateDialog', this.user.id);
      } catch (e) {}
    }
  }
})
</script>

<style scoped>

</style>
