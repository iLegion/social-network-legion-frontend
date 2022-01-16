<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-xl-8 col-xxl-6">
        <ProfileInfo v-if="user"
                     :user="user"
                     @onAddFriend="handleAddFriend"
                     @onCreateDialog="handleCreateDialog" />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-xl-8 col-xxl-6">
        <Posts v-if="user && (user.isMyFriend || user.privacySettings.profileDisplayMode)"
               :user="user" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import UserModel from "~/classes/Models/User/UserModel";
import ProfileInfo from "~/components/Profile/ProfileInfo/ProfileInfo.vue";
import Posts from "~/components/Post/Block.vue";

export default Vue.extend({
  middleware: ['authenticated'],
  components: {
    ProfileInfo,
    Posts
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
      const user = Object.assign({}, this.user);

      if (user) {
        user.isMyFriend = true;

        this.user = user;
      }
    },
    handleCreateDialog(): void {
      const user = Object.assign({}, this.user);

      if (user) {
        user.hasDialogWithMe = true;

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
