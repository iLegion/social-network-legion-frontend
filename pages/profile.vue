<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-6">
        <div>
          <div class="info">
            <div class="name">{{ user.name }}</div>
            <div class="email">{{ user.email }}</div>
            <div class="d-flex flex-row">
              <div class="posts-count text-center me-3">
                <div>100</div>
                <div>Posts</div>
              </div>
              <div class="friends-count text-center">
                <div>100</div>
                <div>Friends</div>
              </div>
            </div>
          </div>

          <div class="posts"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters('auth', ['user'])
  }
});
</script>

<style scoped>

</style>
