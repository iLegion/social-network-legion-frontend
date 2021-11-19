<template>
  <div class="dialog-content-bottom-bar-component">
    <div class="container-fluid px-0 h-100">
      <div class="row h-100">
        <div class="col-12 h-100">
          <TextField :dialog="dialog"
                     @sentMessage="handleSentMessage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import DialogModel from "~/classes/Models/Dialog/DialogModel";
import DialogMessageModel from "~/classes/Models/Dialog/DialogMessageModel";
import TextField from "~/components/Chat/ChatContent/DialogContentBottomBar/TextField.vue";

export default Vue.extend({
  components: {
    TextField
  },
  props: {
    dialog: {
      type: Object as () => DialogModel,
      default: () => {}
    }
  },
  methods: {
    handleSentMessage(id: number, payload: DialogMessageModel): void {
      this.$emit('sentMessage', id, payload);
    }
  }
});
</script>

<style lang="scss">
.dialog-content-bottom-bar-component {
  height: 7vh;
}
</style>
