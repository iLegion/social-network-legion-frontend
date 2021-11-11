<template>
  <div class="with-who-component">
    <div class="card">
  <div class="card-body fw-bold">
    Someones name
  </div>
</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WithWho',
  
})
</script>

<style lang="scss">
  .with-who-component {
    .card {
      height: 10vh;
    }
  }
</style>