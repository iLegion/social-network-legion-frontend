<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-md-4">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  import LoginForm from "~/components/Auth/LoginForm.vue";

  export default Vue.extend({
    components: {
      LoginForm
    }
  })

</script>
