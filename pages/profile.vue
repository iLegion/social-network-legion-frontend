<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-6">
        <ProfileInfo :user="user"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import ProfileInfo from "~/components/Profile/ProfileInfo/ProfileInfo.vue";

export default Vue.extend({
  components: {
    ProfileInfo
  },
  computed: {
    ...mapGetters('auth', ['user'])
  }
});
</script>
