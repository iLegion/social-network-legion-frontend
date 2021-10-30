<template>
  <div id="login-form-component">
    <div class="fs-2 fw-bold text-center mb-5">Login</div>

    <form @submit.prevent="send">
      <div class="form-group mb-4">
        <label for="email" class="form-label">Email</label>
        <div class="input-group">
          <div class="input-group-text">
            <font-awesome-icon :icon="faUser" fixed-width />
          </div>
          <input type="text"
                 class="form-control"
                 :class="{ 'is-invalid': errors.password }"
                 id="email"
                 placeholder="Type your email"
                 v-model="form.email"
                 @input="handleInput('email')">
          <div class="invalid-feedback">
            {{ errors.email }}
          </div>
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
                 :class="{ 'is-invalid': errors.password }"
                 id="password"
                 placeholder="Type your password"
                 v-model="form.password"
                 @input="handleInput('password')">
          <div class="invalid-feedback">
            {{ errors.password }}
          </div>
        </div>
      </div>
      <div class="text-end text-secondary mb-4">
        <span>Forgot password?</span>
      </div>
      <button type="submit"
              class="btn btn-dark w-100">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from "vuex";
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

import ValidationError from "~/classes/Errors/ValidationError";
import LocalStorageService from "~/services/LocalStorageService";

export default Vue.extend({
  name: 'LoginForm',
  computed: {
    faUser() {
      return faUser;
    },
    faLock() {
      return faLock;
    }
  },
  data: () => {
    return {
      form: {
        // email: '',
        // password: '',
        email: 'admin@admin.admin',
        password: '12345678'
      },
      errors: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions("auth", ["setUser"]),

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
        const response = await this.$api.login.login({ email, password });
        const token = response.data.type + ' ' + response.data.token;

        LocalStorageService.setToken(token);
        this.$axios.setToken(token);

        await this.getUser();
        await this.$router.push('/');
      } catch (e) {
        if (e instanceof ValidationError) {
          this.setErrors(e.errors);
        }
      }
    },
    async getUser(): Promise<void> {
      try {
        const response = await this.$api.user.me();

        this.setUser(response.data)
      } catch (e) {}
    }
  }
})
</script>

<style lang="scss">
  #login-form-component {
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
