<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-xl-8 col-xxl-6">
        <ProfileInfo :user="$auth.user"/>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-xl-8 col-xxl-6">
        <Posts v-if="$auth.loggedIn"
               :user="$auth.user" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import ProfileInfo from "~/components/Profile/ProfileInfo/Index.vue";
import Posts from "~/components/Posts/Index.vue";

export default Vue.extend({
  middleware: ['auth'],
  components: {
    ProfileInfo,
    Posts
  },
  head() {
    return {
      title: 'Profile',
      meta: [
        {
          hid: 'profile-page',
          name: 'profile',
          content: 'Profile page'
        }
      ]
    }
  },
});
</script>
