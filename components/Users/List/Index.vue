<template>
  <div>
    <Item v-for="user in users"
          :key="'users-list-' + user.id"
          :user="user"
          @onAddFriend="handleAddFriend" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import UserModel from "~/classes/Models/User/UserModel";
import Item from '~/components/Users/List/Item.vue';

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
    handleAddFriend(id: number): void {
      this.addFriend(id);
    },

    async addFriend(id: number): Promise<void> {
      try {
        await this.$api.friend.store(id);

        this.$toasted.success('Friend added successfully.');
        this.$emit('onAddFriend', id);
      } catch (e) {}
    }
  }
});
</script>

<style scoped>

</style>
