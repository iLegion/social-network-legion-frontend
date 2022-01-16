<template>
  <div>
    <Item v-for="user in users"
          :key="'users-list-' + user.id"
          :user="user"
          @onAddFriend="handleAddFriend"
          @onCreateDialog="handleCreateDialog" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import UserModel from "~/classes/Models/User/UserModel";
import Item from '~/components/Users/List/Item.vue';
import {DialogStorePayloadInterface} from "~/interfaces/classes/Api/Dialog/DialogApiInterface";

export default Vue.extend({
  components: {
    Item
  },
  props: {
    users: {
      type: Array as () => UserModel[],
      required: true
    }
  },
  methods: {
    handleAddFriend(user: UserModel): void {
      this.addFriend(user.id);
    },
    handleCreateDialog(user: UserModel): void {
      this.createDialog(user, { title: user.name, userID: user.id });
    },

    async addFriend(id: number): Promise<void> {
      try {
        await this.$api.friend.store(id);

        this.$toast.success('Friend added successfully.');
        this.$emit('onAddFriend', id);
      } catch (e) {}
    },
    async createDialog(user: UserModel, payload: DialogStorePayloadInterface): Promise<void> {
      try {
        await this.$api.dialog.store(payload);

        this.$toast.success('Dialog created successfully.');
        this.$emit('onCreateDialog', user.id);
      } catch (e) {}
    }
  }
});
</script>

<style scoped>

</style>
