<template>
  <div class="dialog-content-top-bar-component border-bottom">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-4 h-100">
          <div class="fw-bold d-flex align-items-center h-100">
            {{ dialog.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import DialogModel from "~/classes/Models/Dialog/DialogModel";

export default Vue.extend({
  props: {
    dialog: {
      type: Object as () => DialogModel,
      default: () => {}
    }
  }
});
</script>

<style lang="scss">
.dialog-content-top-bar-component {
  height: 7vh;
}
</style>

