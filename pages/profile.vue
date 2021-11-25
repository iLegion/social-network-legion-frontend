<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-6">
        <ProfileInfo :user="user"/>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col">
        <UserPosts />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import ProfileInfo from "~/components/Profile/ProfileInfo/ProfileInfo.vue";
import UserPosts from "~/components/Users/UserPosts.vue";

export default Vue.extend({
  components: {
    ProfileInfo,
    UserPosts
  },
  computed: {
    ...mapGetters('auth', ['user'])
  }
});
</script>
