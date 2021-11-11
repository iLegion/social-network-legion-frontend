<template>
  <div class="text-field-component">
  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Написать сообщение..."></textarea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TextField',
  
})
</script>

<style lang="scss">
  .text-field-component {
    .area {
      height: 10vh;
    }
  }
</style>