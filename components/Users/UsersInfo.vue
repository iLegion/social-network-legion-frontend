<template>
  <div class="users-info">
    <div class="card mt-3 mb-3 p-3">
      <div class="row g-0">
        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <img :src="user.avatar" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div class="mb-2">
              <h5 class="card-title d-inline-block me-2">{{ user.name }}</h5>
              <span class="email fs-6 text-secondary">{{ user.email }}</span>
            </div>

            <div class="d-flex">
              <button type="button" class="btn btn-outline-dark me-2">Add to friends</button>
              <button type="button" class="btn btn-outline-dark">Write message</button>
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
    user: UserModel
  }
});
</script>

<style lang="scss">
  .users-info {
    img {
      width: 100px;
      height: 100px;
    }
  }
</style>