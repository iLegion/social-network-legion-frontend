<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-md-4">
        <!-- <LoginForm /> -->
<ul class="nav nav-tabs mt-2" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="home" aria-selected="true">Login</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="registr-tab" data-bs-toggle="tab" data-bs-target="#registr" type="button" role="tab" aria-controls="profile" aria-selected="false">Registration</button>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="login" role="tabpanel" aria-labelledby="login-tab"><LoginForm /></div>
  <div class="tab-pane" id="registr" role="tabpanel" aria-labelledby="registr-tab"><RegisterForm /></div>
</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  import LoginForm from "~/components/Auth/LoginForm.vue";
  import RegisterForm from "~/components/Auth/RegisterForm.vue";

  export default Vue.extend({
    components: {
      LoginForm,
      RegisterForm
    }
  })

</script>

<style lang="scss">
.nav-tabs .nav-link.active {
  color: #000000;
}
.nav-link {
  color: grey;

  &:hover, &:focus {
    color: #000000;
  }
}
</style>