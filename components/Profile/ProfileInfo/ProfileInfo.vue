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
              <li class="list-group-item text-center">
                <router-link :to="'/users/' + user.id + '/friends'" class="badge rounded-pill bg-light text-dark text-decoration-none">{{ user.friendsCount }}</router-link>
                <div>Friends</div>
              </li>
            </ul>

            <div class="d-flex">
              <button v-if="!user.isMyFriend && user.privacySettings.addFriendsMode"
                      type="button"
                      class="btn btn-outline-dark me-2"
                      @click="handleAddFriend">
                Add to friends
              </button>
              <button v-if="(user.isMyFriend || user.privacySettings.messageWritingMode) && !user.hasDialogWithMe"
                      type="button"
                      class="btn btn-outline-dark"
                      @click="handleCreateDialog">
                Create dialog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UserModel from "~/classes/Models/User/UserModel";
import { DialogStorePayloadInterface } from "~/interfaces/classes/Api/Dialog/DialogApiInterface";

export default Vue.extend({
  props: {
    user: {
      type: Object as () => UserModel,
      required: true
    }
  },
  data: (): { user: UserModel | null } => {
    return {
      user: null
    }
  },
  methods: {
    handleAddFriend(): void {
      this.addFriend(this.user.id);
    },
    handleCreateDialog(): void {
      const user = this.user;

      this.createDialog({ title: user.name, userID: user.id });
    },

    async addFriend(id: number): Promise<void> {
      try {
        await this.$api.friend.store(id);

        this.$toast.success('Friend added successfully.');
        this.$emit('onAddFriend');
      } catch (e) {}
    },
    async createDialog(payload: DialogStorePayloadInterface): Promise<void> {
      try {
        await this.$api.dialog.store(payload);

        this.$toast.success('Dialog created successfully.');
        this.$emit('onCreateDialog');
      } catch (e) {}
    },
  }
});
</script>

<style lang="scss">
  .profile-info {
    img {
      width: 100px;
      height: 100px;
    }
  }
</style>
