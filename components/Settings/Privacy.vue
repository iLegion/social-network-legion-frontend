<template>
  <div class="privacy-component">
   <div class="container d-flex justify-content-center">
      <div class="row">
        <div class="col mt-3">
    <form class="mt-3">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Profile display mode</label>
        <div class="d-flex">
          <div class="form-check me-3">
            <input class="form-check-input" type="radio" name="pdm" id="pdm-on" value="1" v-model="profileDisplayMode">
            <label class="form-check-label" for="pdm-on">
              On
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="pdm" id="pdm-off" value="0" v-model="profileDisplayMode">
            <label class="form-check-label" for="pdm-off">
              Off
            </label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Add friends mode</label>
        <div class="d-flex">
          <div class="form-check me-3">
            <input class="form-check-input" type="radio" name="afm" id="afm-on" value="1" v-model="addFriendsMode">
            <label class="form-check-label" for="afm-on">
              On
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="afm" id="afm-off"  value="0" v-model="addFriendsMode">
            <label class="form-check-label" for="afm-off">
              Off
            </label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Message writing mode</label>
        <div class="d-flex">
          <div class="form-check me-3">
            <input class="form-check-input" type="radio" name="mwm" id="mwm-on" value="1" v-model="messageWritingMode">
            <label class="form-check-label" for="mwm-on">
              On
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="mwm" id="mwm-off" value="0" v-model="messageWritingMode">
            <label class="form-check-label" for="mwm-off">
              Off
            </label>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-dark">Save</button>
      </div>
    </form>
  </div>
  </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from "vuex";

export default Vue.extend({
    name: 'Privacy',
    computed: {
    ...mapGetters('auth', ['user'])
    },
})

</script>

<style lang="scss">

</style>
