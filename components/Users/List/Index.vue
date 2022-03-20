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
      this.$emit('onAddFriend', user.id);
    },
    handleCreateDialog(user: UserModel): void {
      this.$emit('onCreateDialog', user.id);
    }
  }
});
</script>
