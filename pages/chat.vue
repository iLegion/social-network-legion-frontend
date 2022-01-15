<template>
  <div class="chat-page p-2">
    <div class="container-fluid">
      <Chat />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Chat from "~/components/Chat/Chat.vue";

export default Vue.extend({
  middleware: ['authenticated'],
  components: {
    Chat
  }
})
</script>
