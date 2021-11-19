<template>
  <div class="card">
    <div class="card-body">
      <p class="card-text">{{ message.text }}</p>
      <div class="text-end text-muted">{{ formattedTime }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import DialogMessageModel from "@/classes/Models/Dialog/DialogMessageModel";
import DateService from "~/services/DateService";

export default Vue.extend({
  props: {
    message: {
      type: Object as () => DialogMessageModel,
      default: () => {}
    }
  },
  computed: {
    formattedTime(): string {
      return this.message?.updatedAt
          ? (new DateService()).getFormattedDate(new Date(this.message?.updatedAt), 'h:m:s d-m-Y')
          : '';
    }
  }
})
</script>

<style scoped>

</style>
