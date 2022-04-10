<template>
  <div class="login-form-component">
    <div class="fs-2 mt-4 fw-bold text-center mb-3">Log in</div>

    <form @submit.prevent="send">
      <div class="form-group mb-4">
        <label for="login-email" class="form-label">Email</label>
        <div class="input-group">
          <div class="input-group-text"
               :class="{ 'is-invalid': errors.email }">
            <i class="bi bi-envelope"></i>
          </div>
          <input type="text"
                 class="form-control"
                 :class="{ 'is-invalid': errors.email }"
                 id="login-email"
                 placeholder="Type your email"
                 v-model="form.email"
                 @input="handleInput('email')">
          <div class="invalid-feedback">
            {{ errors.email }}
          </div>
        </div>
      </div>
      <div class="form-group mb-4">
        <label for="login-password" class="form-label">Password</label>
        <div class="input-group">
          <div class="input-group-text"
               :class="{ 'is-invalid': errors.password }">
            <i class="bi bi-shield-lock"></i>
          </div>
          <input type="password"
                 class="form-control"
                 :class="{ 'is-invalid': errors.password }"
                 id="login-password"
                 placeholder="Type your password"
                 v-model="form.password"
                 @input="handleInput('password')">
          <div class="invalid-feedback">
            {{ errors.password }}
          </div>
        </div>
      </div>
<!--      <div class="text-end text-secondary mb-4">-->
<!--        <span>Forgot password?</span>-->
<!--      </div>-->
      <button type="submit"
              class="btn btn-dark w-100">Log in</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ValidationError from "~/classes/Errors/ValidationError";
import { AxiosError } from "axios";

export default Vue.extend({
  data: () => {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    setErrors(errors: { email?: string[], password?: string[] }): void {
      if (errors.email) {
        this.errors.email = errors.email[0];
      }

      if (errors.password) {
        this.errors.password = errors.password[0];
      }
    },
    // TODO: Need to fix it.
    removeError(type: string = 'all'): void {
      if (type === 'all') {
        this.errors.email = '';
        this.errors.password = '';
      } else if (type === 'email') {
        this.errors.email = '';
      } else if (type === 'password') {
        this.errors.password = '';
      }
    },

    handleInput(type: string): void {
      this.removeError(type);
    },

    async send(): Promise<void> {
      const email = this.form.email;
      const password = this.form.password;

      this.removeError('all');

      try {
        await this.$auth.loginWith('default', {
          data: { email, password }
        })
      } catch (e: AxiosError | any) {
        if (e.response?.status === 422) {
          const error = new ValidationError(e.response);

          this.setErrors(error.errors);
        }
      }
    }
  }
})
</script>

<style lang="scss">
  .login-form-component {
    form {
      .form-group {
        .input-group {
          .input-group-text {
            &.is-invalid {
              border-bottom: 2px solid #dc3545;

              i {
                color: #dc3545;
              }
            }

            background-color: transparent;
            border: none;
            border-bottom: 2px solid #d9d9d9;
          }

          input {
            &.is-invalid {
              border-bottom: 2px solid #dc3545;
            }

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
