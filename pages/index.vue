<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    redirectToPosts(): void {
      console.log('redirectToPosts');
      this.$router.push('/posts');
    }
  },
  mounted() {
    this.redirectToPosts();
  }
})
</script>
