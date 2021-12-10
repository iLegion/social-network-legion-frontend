<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <div class="d-flex align-items-center justify-content-center h-100">
          <router-link :to="'/users/' + user.id">
            <img :src="user.avatar" class="img-fluid rounded-start" alt="">
          </router-link>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            <router-link :to="'/users/' + user.id"
                         class="text-decoration-none text-reset">
              {{ user.name }}
            </router-link>
          </h5>
          <div class="card-text">
            <ul class="list-group list-group-horizontal mb-3">
              <li class="list-group-item text-center">
                <div class="badge rounded-pill bg-light text-dark">{{ user.postsCount }}</div>
                <div>Posts</div>
              </li>
              <li class="list-group-item text-center">
                <div class="badge rounded-pill bg-light text-dark">{{ user.friendsCount }}</div>
                <div>Friends</div>
              </li>
            </ul>

            <div class="d-flex">
              <button v-if="!user.isMyFriend"
                      type="button"
                      class="btn btn-outline-dark me-2">
                Add to friends
              </button>
              <button type="button"
                      class="btn btn-outline-dark">
                Write message
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

export default Vue.extend({
  props: {
    user: {
      type: Object as () => UserModel,
      required: true
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
