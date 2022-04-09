<template>
  <div class="profile-info">
    <div class="card shadow mt-3 mb-3 p-3">
      <div class="row g-0">
        <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <img :src="user.avatar" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-12 col-md-8">
          <!-- TODO: Need to fix styles. -->
          <div class="card-body d-flex d-md-block flex-column justify-content-center align-items-center">
            <div class="mb-2">
              <h5 class="card-title d-inline-block me-2">{{ user.name }}</h5>
              <span class="email fs-6 text-secondary">{{ user.email }}</span>
            </div>

            <ul class="list-group list-group-horizontal mb-3">
              <li class="list-group-item text-center">
                <div class="badge rounded-pill bg-light text-dark">{{ user.postsCount }}</div>
                <div>Posts</div>
              </li>
              <router-link class="friends-count-link list-group-item text-center text-dark"
                           :to="'/users/' + user.id + '/friends'">
                <span class="badge rounded-pill bg-light text-dark text-decoration-none">
                  {{ user.friendsCount }}
                </span>
                <div>Friends</div>
              </router-link>
            </ul>

            <FriendDialogButtons v-if="$auth.user.id !== user.id"
                                 :user="user" />
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
      this.$emit('onAddFriend');
    },
    handleCreateDialog(): void {
      this.$emit('onCreateDialog');
    }
  }
});
</script>

<style lang="scss">
  .profile-info {
    img {
      width: 100px;
      height: 100px;
    }

    .friends-count-link {
      &:hover {
        background-color: #f8f9fa;
      }
    }
  }
</style>
