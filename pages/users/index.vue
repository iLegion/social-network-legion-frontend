<template>
  <div id="posts-page">
    <div class="container">
      <div v-show="users.length"
           class="row">
        <div class="col-12 col-xxl-3 offset-xxl-7 d-flex justify-content-end mt-2 mb-2">
          <UserFilter @onGetUsers="handleGetUsers" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-xxl-8 offset-xxl-2">
          <UserList v-if="users.length"
                    :users="users" />

          <div v-else
               class="d-flex justify-content-center align-items-center fw-bold vh-92">
            Users not found. Please, wait when new users is registered.
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
    handleGetUsers(posts: UserModel[]): void {
      this.users.splice(0, this.users.length, ...posts);
    },
  }
});
</script>
