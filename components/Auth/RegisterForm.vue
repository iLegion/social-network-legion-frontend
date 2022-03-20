<template>
  <div class="register-form-component">
    <div class="fs-2 mt-4 fw-bold text-center mb-3">Registration</div>
    <form @submit.prevent="send">
      <div class="form-group mb-4">
        <label for="register-name" class="form-label">Name</label>
        <div class="input-group">
          <div class="input-group-text">
            <font-awesome-icon :icon="faUser" fixed-width />
          </div>
          <input type="text"
                 class="form-control"
                 :class="{ 'is-invalid': errors && errors.name }"
                 id="register-name"
                 placeholder="Type your name"
                 v-model="form.name"
                 @input="handleInput('name')">
          <div v-if="errors && errors.name"
               class="invalid-feedback">
            {{ errors.name[0] }}
          </div>
        </div>
      </div>
      <div class="form-group mb-4">
        <label for="register-email" class="form-label">Email</label>
        <div class="input-group">
          <div class="input-group-text">
            <font-awesome-icon :icon="faEnvelope" fixed-width />
          </div>
          <input type="text"
                 class="form-control"
                 :class="{ 'is-invalid': errors && errors.email }"
                 id="register-email"
                 placeholder="Type your email"
                 v-model="form.email"
                 @input="handleInput('email')">
          <div v-if="errors && errors.email"
               class="invalid-feedback">
            {{ errors.email[0] }}
          </div>
        </div>
      </div>
      <div class="form-group mb-4">
        <label for="register-password" class="form-label">Password</label>
        <div class="input-group">
          <div class="input-group-text">
            <font-awesome-icon :icon="faLock" fixed-width />
          </div>
          <input type="password"
                 class="form-control"
                 :class="{ 'is-invalid': errors && errors.password }"
                 id="register-password"
                 placeholder="Type your password"
                 v-model="form.password"
                 @input="handleInput('password')">
          <div v-if="errors && errors.password"
               class="invalid-feedback">
            {{ errors.password[0] }}
          </div>
        </div>
      </div>
      <button type="submit"
              class="btn btn-dark w-100">
        Registration
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

import ValidationError from "~/classes/Errors/ValidationError";

export default Vue.extend({
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
  },
  data: () => ({
    form: {
      name: '',
      email: '',
      password: '',
    },
    errors: {
      name: '',
      email: '',
      password: ''
    }
  }),
  methods: {
    handleInput(type: string): void {
      const errors = this.errors;

      if (errors) {
        if (type === 'name' || type === 'email' || type === 'password') {
          delete errors[type];
        }
      }
    },

    async send(): Promise<void> {
      const form = this.form;

      try {
        await this.$api.register.register(form);
        await this.$auth.loginWith('default', {
          data: {
            email: form.email,
            password: form.password
          }
        })
      } catch (e) {
        if (e instanceof ValidationError) {
          this.errors = e.errors;
        }
      }
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
