<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-6">
        <UsersInfo :user="user"/>
      </div>
    </div>
        <div class="row justify-content-center">
      <div class="col">
        <UserPosts :user="user" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import UserModel from "~/classes/Models/User/UserModel";
import UsersInfo from "~/components/Users/UsersInfo.vue";
import UserPosts from "~/components/Users/UserPosts.vue";

export default Vue.extend({
  components: {
    UsersInfo,
    UserPosts
  },
  data: (): { user: UserModel | null } => {
    return {
      user: null
    }
  },
  methods: {
    async get(id: number): Promise<void> {
      try {
        const response = await this.$api.user.byId(id);

        this.user = new UserModel(response.data);
      } catch (e) {}
    }
  },
  // async asyncData({ params }): Promise<Object> {
  //   const userId = params.id;
  //
  //   return { userId };
  // }
});
</script>
