<template>
  <div v-if="loading" class="loading-page">
    <div class="item">
      Loading...
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
});
</script>

<style lang="scss" scoped>
.loading-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 99999;

  .item {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
