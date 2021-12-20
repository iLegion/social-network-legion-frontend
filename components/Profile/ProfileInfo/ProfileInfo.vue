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

            <ul class="list-group list-group-horizontal">
              <li class="list-group-item text-center">
                <div class="badge rounded-pill bg-light text-dark">{{ user.postsCount }}</div>
                <div>Posts</div>
              </li>
              <li class="list-group-item text-center">
                <div class="badge rounded-pill bg-light text-dark">{{ user.friendsCount }}</div>
                <div>Friends</div>
              </li>
            </ul>
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
    user: UserModel
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
