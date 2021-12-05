<template>
  <div class="error-500-component">
    <div class="container">
      <div class="row">
        <div class="offset-3 col-6">
          <div class="wrapper text-center d-flex flex-column justify-content-center">
            <div class="display-3">500</div>
            <div class="display-5 mb-5">Interval Server Error</div>
            <div>
              <router-link to="/" class="btn btn-outline-dark">Return to main page.</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.error-500-component {
  .wrapper {
    height: 100vh;
  }
}
</style>
