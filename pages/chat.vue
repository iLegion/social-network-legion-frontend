<template>
  <div class="chat-page p-2">
    <div class="container-fluid">
      <div class="row">
        <div class="col-4 p-0">
          <ChatList />
        </div>
        <div class="col-8 p-0">
          <div class="dialog">
            <WithWho />
            <Dialog />
            <TextField />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ChatList from "~/components/Chat/ChatList.vue";
import WithWho from "~/components/Chat/ChatContent/WithWho.vue";
import Dialog from "~/components/Chat/ChatContent/Dialog.vue";
import TextField from "~/components/Chat/ChatContent/TextField.vue";

export default Vue.extend({
  components: {
    ChatList,
    WithWho,
    Dialog,
    TextField
  }
})
</script>
