<template>
  <div class="container-fluid">
    <div class="row">
      <div class="list col-4 p-0">
        <ChatDialogsList />
      </div>
      <div class="dialog col-8 p-0">
        <WithWho />
        <Dialog />
        <TextField />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ChatDialogsList from "~/components/Chat/ChatDialogsList.vue";
import WithWho from "~/components/Chat/ChatContent/WithWho.vue";
import Dialog from "~/components/Chat/ChatContent/Dialog.vue";
import TextField from "~/components/Chat/ChatContent/TextField.vue";

export default Vue.extend({
  components: {
    ChatDialogsList,
    WithWho,
    Dialog,
    TextField
  }
})
</script>

<style lang="scss">
  .row {
    padding: 10px 10px 0px 10px;
  }
  .dialog {
    position: relative;
  }
</style>