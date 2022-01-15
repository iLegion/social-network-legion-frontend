<template>
  <div class="card">
    <div class="card-body">
      <p class="card-text">{{ message.text }}</p>
      <div class="text-end text-muted">{{ formattedLastMessageAt }}</div>
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
      required: true
    }
  },
  computed: {
    formattedLastMessageAt(): string {
      return (new DateService()).getTodayTimeOrDate(new Date(this.message.createdAt));
    }
  }
})
</script>

<style scoped>

</style>
