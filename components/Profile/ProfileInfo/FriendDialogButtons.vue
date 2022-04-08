<template>
  <div class="d-flex">
    <button v-if="!user.isMyFriend && user.privacySettings.addFriendsMode"
            type="button"
            class="btn btn-outline-dark me-2"
            @click="handleAddFriend">
      <i class="bi bi-person-plus"></i>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import UserModel from "~/classes/Models/User/UserModel";

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

    async addFriend(id: number): Promise<void> {
      try {
        await this.$api.friend.store(id);

        this.$toast.success('Friend added successfully.');
        this.$emit('onAddFriend', this.user.id);
      } catch (e) {}
    }
  }
})
</script>
