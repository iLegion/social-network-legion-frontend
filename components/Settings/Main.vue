<template>
  <div class="main-component">
   <div class="container">
      <div class="row">
        <div class="col mt-3">
    <form class="mt-3">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Avatar</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Name</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Email</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-dark">Save</button>
      </div>
    </form>
  </div>
  </div>
  </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Main',

  })

</script>

<style lang="scss">

</style>
