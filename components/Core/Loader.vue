<template>
  <div class="loader"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.loader {
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 30px;
    height: 30px;
    margin: -11px 0 0 -11px;
    border: 2px solid rgba(201,201,204,.48);
    border-left-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    -webkit-animation: cdxRotation 1.2s linear infinite;
    animation: cdxRotation 1.2s linear infinite;
  }
}

@-webkit-keyframes cdxRotation{
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn)
  }
}

@keyframes cdxRotation {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  to {
    -webkit-transform:rotate(1turn);
    transform: rotate(1turn)
  }
}
</style>
