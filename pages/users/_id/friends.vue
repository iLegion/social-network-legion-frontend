<template>
  <div id="friends-page">
    <div class="container">
      <div v-show="users.length"
           class="row">
        <div class="col-12 col-xxl-3 offset-xxl-7 d-flex justify-content-end mt-2 mb-2">
          <UserFilter mode="friends"
                      :pagination="pagination"
                      :userID="Number($route.params.id)"
                      @onGetUsers="handleGetUsers" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-xxl-8 offset-xxl-2">
          <UserList v-if="users.length"
                    :users="users"
                    @onAddFriend="handleAddFriend" />

          <div v-else
               class="d-flex justify-content-center align-items-center fw-bold vh-92">
            Friends not found. Please, add friends.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import UserModel from "~/classes/Models/User/UserModel";
import UserFilter from '~/components/Users/Filter/Index.vue'
import UserList from '~/components/Users/List/Index.vue';

export default Vue.extend({
  middleware: ['auth'],
  components: {
    UserFilter,
    UserList
  },
  data: (): { users: UserModel[], pagination: Object } => {
    return {
      users: [],
      pagination: {}
    }
  },
  methods: {
    handleGetUsers(users: UserModel[], pagination: Object): void {
      this.users.push(...users);

      this.pagination = pagination;
    },
    handleAddFriend(id: number): void {
      const userIndex = this.users.findIndex(i => i.id === id);
      const user = this.users[userIndex];

      user.isMyFriend = true;

      this.users.splice(userIndex, 1, user)
    },
    // handleCreateDialog(id: number): void {
    //   const userIndex = this.users.findIndex(i => i.id === id);
    //   const user = this.users[userIndex];
    //
    //   user.hasDialogWithMe = true;
    //
    //   this.users.splice(userIndex, 1, user)
    // }
  }
});
</script>
