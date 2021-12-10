<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-6">
        <UsersInfo v-if="user"
                   :user="user"
                   @onAddFriend="handleAddFriend" />
      </div>
    </div>
        <div class="row justify-content-center">
      <div class="col">
        <UserPosts v-if="user"
                   :user="user" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import UserModel from "~/classes/Models/User/UserModel";
import UsersInfo from "~/components/Users/UsersInfo.vue";
import UserPosts from "~/components/Users/UserPosts.vue";

export default Vue.extend({
  components: {
    UsersInfo,
    UserPosts
  },
  computed: {
    ...mapGetters('auth', {
      authUser: 'user'
    })
  },
  data: (): { user: UserModel | null } => {
    return {
      user: null
    }
  },
  methods: {
    handleAddFriend(): void {
      const user = this.user;

      if (user) {
        user.isMyFriend = true;

        this.user = user;
      }
    },

    async get(id: number): Promise<void> {
      try {
        const response = await this.$api.user.byId(id);

        this.user = new UserModel(response.data);
      } catch (e) {}
    }
  },
  async fetch(): Promise<void> {
    const userId = Number(this.$route.params.id);

    if (this.authUser.id === userId) {
      await this.$router.push('/profile');
    } else {
      await this.get(userId);
    }
  }
});
</script>
