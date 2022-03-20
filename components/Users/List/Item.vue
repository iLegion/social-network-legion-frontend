<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
        <div class="d-flex align-items-center justify-content-center h-100">
          <router-link :to="'/users/' + user.id">
            <img :src="user.avatar" class="img-fluid rounded-start" alt="">
          </router-link>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <!-- TODO: Need to fix styles. -->
        <div class="card-body d-flex d-md-block flex-column justify-content-center align-items-center">
          <h5 class="card-title">
            <router-link :to="'/users/' + user.id"
                         class="text-decoration-none text-reset">
              {{ user.name }}
            </router-link>
          </h5>
          <div class="card-text">
            <ul v-if="user.isMyFriend || user.privacySettings.profileDisplayMode"
                class="list-group list-group-horizontal-md mb-3">
              <li class="list-group-item text-center">
                <div class="badge rounded-pill bg-light text-dark">{{ user.postsCount }}</div>
                <div>Posts</div>
              </li>
              <li class="list-group-item text-center">
                <div class="badge rounded-pill bg-light text-dark">{{ user.friendsCount }}</div>
                <div>Friends</div>
              </li>
            </ul>

            <FriendDialogButtons v-if="$auth.user.id !== user.id"
                                 class="d-md-block flex-column justify-content-center"
                                 :user="user"
                                 @onAddFriend="handleAddFriend"
                                 @onCreateDialog="handleCreateDialog" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import UserModel from "~/classes/Models/User/UserModel";
import FriendDialogButtons from "~/components/Profile/ProfileInfo/FriendDialogButtons.vue";

export default Vue.extend({
  components: {
    FriendDialogButtons
  },
  props: {
    user: {
      type: Object as () => UserModel,
      required: true
    }
  },
  methods: {
    handleAddFriend(): void {
      this.$emit('onAddFriend', this.user);
    },
    handleCreateDialog(): void {
      this.$emit('onCreateDialog', this.user);
    }
  }
});
</script>

<style lang="scss" scoped>
.card {
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
