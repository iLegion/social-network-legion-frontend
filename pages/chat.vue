<template>
  <div class="chat-page p-2">
    <div class="container-fluid">
      <Chat />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Chat from "~/components/Chat/Index.vue";

export default Vue.extend({
  middleware: ['auth'],
  components: {
    Chat
  },
  head() {
    return {
      title: 'Chat',
      meta: [
        {
          hid: 'chat-page',
          name: 'chat',
          content: 'Chat page'
        }
      ]
    }
  }
})
</script>
