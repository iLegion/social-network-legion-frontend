<template>

</template>

<script lang="ts">
import Vue from "vue";
import UserModel from "~/classes/Models/User/UserModel";

export default Vue.extend({
  props: {
    user: UserModel
  },
  methods: {
    getPosts(): void {

    }
  }
});
</script>

<style scoped>

</style>
