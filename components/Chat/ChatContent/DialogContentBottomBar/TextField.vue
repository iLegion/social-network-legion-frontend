<template>
  <div class="text-field-component h-100">
    <form class="h-100">
      <textarea class="form-control border-start-0 border-end-0 h-100"
                id="exampleFormControlTextarea1"
                placeholder="Написать сообщение..."></textarea>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({})
</script>

<style lang="scss">
  .text-field-component {
    textarea {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
</style>
