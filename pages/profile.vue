<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-xl-8 col-xxl-6">
        <ProfileInfo :user="user"/>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-xl-8 col-xxl-6">
        <Posts v-if="isAuth"
               :user="user" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import ProfileInfo from "~/components/Profile/ProfileInfo/ProfileInfo.vue";
import Posts from "~/components/Post/Block.vue";

export default Vue.extend({
  middleware: ['authenticated'],
  components: {
    ProfileInfo,
    Posts
  },
  computed: {
    ...mapGetters('auth', ['isAuth', 'user'])
  }
});
</script>
