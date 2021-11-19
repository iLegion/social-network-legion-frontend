<template>
  <div class="dialog-content-bottom-bar-component">
    <div class="container-fluid px-0 h-100">
      <div class="row h-100">
        <div class="col-12 h-100">
          <TextField />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import TextField from "~/components/Chat/ChatContent/DialogContentBottomBar/TextField.vue";

export default Vue.extend({
  components: {
    TextField
  }
});
</script>

<style lang="scss">
.dialog-content-bottom-bar-component {
  height: 7vh;
}
</style>
