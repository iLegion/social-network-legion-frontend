<template>
  <div id="friends-page">
    <div class="container">
      <div v-show="users.length"
           class="row">
        <div class="col-12 col-xxl-5 offset-xxl-5 d-flex justify-content-end mt-2 mb-2">
          <UserFilter mode="friends"
                      :isLoading="isLoading"
                      :pagination="pagination"
                      :userID="Number($route.params.id)"
                      @onLoading="handleLoadingUsers"
                      @onGetUsers="handleGetUsers" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-xxl-8 offset-xxl-2">
          <UserList v-if="users.length"
                    :users="users"
                    @onAddFriend="handleAddFriend" />
          <div v-else-if="isLoading" class="pt-5">
            <Loader />
          </div>
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
import Loader from "~/components/Core/Loader.vue";

export default Vue.extend({
  middleware: ['auth'],
  components: {
    UserFilter,
    UserList,
    Loader
  },
  data: (): { isLoading: boolean, user: UserModel | null, users: UserModel[], pagination: Object } => {
    return {
      isLoading: true,
      user: null,
      users: [],
      pagination: {}
    }
  },
  head() {
    return {
      title: this.user ? `${this.user.name} - Friends` : 'User - Friends',
      meta: [
        {
          hid: 'user-friends-page',
          name: 'user',
          content: 'User page'
        }
      ]
    }
  },
  methods: {
    handleLoadingUsers(value: boolean): void {
      this.isLoading = value;
    },
    handleGetUsers(collection: UserModel[], pagination: Object, reset: boolean = false): void {
      if (reset) {
        this.users.splice(0, this.users.length, ...collection);
      } else {
        this.users.push(...collection);
      }

      this.pagination = pagination;
    },
    handleAddFriend(id: number): void {
      const userIndex = this.users.findIndex(i => i.id === id);
      const user = this.users[userIndex];

      user.isMyFriend = true;

      this.users.splice(userIndex, 1, user)
    },

    async get(id: number): Promise<void> {
      try {
        const response = await this.$api.user.byId(id);

        this.user = new UserModel(response.data);
      } catch (e) {}
    }
  },
  async fetch(): Promise<void> {
    await this.get(Number(this.$route.params.id));
  }
});
</script>
