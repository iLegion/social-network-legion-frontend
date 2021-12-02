<template>
  <div class="register-form-component">
    <div class="fs-2 mt-4 fw-bold text-center mb-3">Registration</div>
    <form>
              <div class="form-group mb-4">
        <label for="name" class="form-label">Name</label>
        <div class="input-group">
          <div class="input-group-text">
            <font-awesome-icon :icon="faUser" fixed-width />
          </div>
          <input type="text"
                 class="form-control"
                 id="name"
                 placeholder="Type your name">
        </div>
      </div>
      <div class="form-group mb-4">
        <label for="email" class="form-label">Email</label>
        <div class="input-group">
          <div class="input-group-text">
            <font-awesome-icon :icon="faEnvelope" fixed-width />
          </div>
          <input type="text"
                 class="form-control"
                 id="email"
                 placeholder="Type your email">
        </div>
      </div>
      <div class="form-group mb-2">
        <label for="password" class="form-label">Password</label>
        <div class="input-group">
          <div class="input-group-text">
            <font-awesome-icon :icon="faLock" fixed-width />
          </div>
          <input type="password"
                 class="form-control"
                 id="password"
                 placeholder="Type your password">
        </div>
      </div>
      <div class="text-end text-secondary mb-4">
        <span>Forgot password?</span>
      </div>
      <button type="submit"
              class="btn btn-dark w-100">Registration</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
  name: 'LoginForm',
  computed: {
    faUser() {
      return faUser;
    },
    faEnvelope() {
      return faEnvelope;
    },
    faLock() {
      return faLock;
    }
  }
})
</script>

<style lang="scss">
  .register-form-component {
    form {
      .form-group {
        .input-group {
          .input-group-text {
            background-color: transparent;
            border: none;
            border-bottom: 2px solid #d9d9d9;
          }

          input {
            border: none;
            outline: none;
            box-shadow: none;
            border-bottom: 2px solid #d9d9d9;
          }
        }
      }
    }
  }
</style>