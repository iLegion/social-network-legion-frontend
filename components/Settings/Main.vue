<template>
  <div class="main-component">
   <div class="container">
      <div class="row">
        <div class="col mt-3">
          <form class="mt-3"
                autocomplete="off"
                @submit.prevent="handleSend">
            <div class="mb-3">
              <label for="avatar" class="form-label">Avatar</label>
              <input type="file"
                    class="form-control"
                    :class="{ 'is-invalid': errorsAvatar && errorsAvatar.file }"
                    id="avatar"
                    @change="handleChangeAvatar" >
              <div v-if="errorsAvatar && errorsAvatar.file"
                   class="invalid-feedback">
                {{ errorsAvatar.file[0] }}
              </div>
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text"
                     class="form-control"
                     :class="{ 'is-invalid': errors && errors.name }"
                     id="name"
                     v-model="form.name"
                     @input="handleInput('name')">
              <div v-if="errors && errors.name"
                   class="invalid-feedback">
                {{ errors.name[0] }}
              </div>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="text"
                     class="form-control"
                     :class="{ 'is-invalid': errors && errors.email }"
                     id="email"
                     v-model="form.email"
                     @input="handleInput('email')">
              <div v-if="errors && errors.email"
                   class="invalid-feedback">
                {{ errors.email[0] }}
              </div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password"
                     class="form-control"
                     :class="{ 'is-invalid': errors && errors.password }"
                     id="password"
                     v-model="form.password"
                     @input="handleInput('password')">
              <div v-if="errors && errors.password"
                   class="invalid-feedback">
                {{ errors.password[0] }}
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
import { mapActions } from "vuex";

import ValidationError from "~/classes/Errors/ValidationError";
import { UserUpdatePayloadInterface } from "~/interfaces/classes/Api/UserApiInterface";
import UserModel from "~/classes/Models/User/UserModel";

export default Vue.extend({
  props: {
    user: {
      type: Object as () => UserModel,
      required: true
    }
  },
  data: (): {
    form: { name: string, email: string, password: string },
    errors: { name: string[], email: string[], password: string[] } | null,
    errorsAvatar: { avatar: string[] } | null
  } => ({
    form: {
      name: '',
      email: '',
      password: '',
    },
    errors: null,
    errorsAvatar: null
  }),
  methods: {
    ...mapActions('auth', ['setUser']),

    getFormData(): UserUpdatePayloadInterface {
      const form = this.form;
      const formData: UserUpdatePayloadInterface = {};

      if (form.name) {
        formData.name = form.name;
      }

      if (form.email) {
        formData.email = form.email;
      }

      if (form.password) {
        formData.password = form.password;
      }

      return formData;
    },

    handleSend(): void {
      this.save(this.user.id, this.getFormData());
    },
    handleInput(type: string): void {
      const errors = this.errors;

      if (errors) {
        if (type === 'name' || type === 'email' || type === 'password') {
          delete errors[type];
        }
      }
    },
    handleChangeAvatar(e: any): void {
      const data = new FormData();

      this.errorsAvatar = null;
      data.append('file', e.target.files[0]);
      this.avatar(this.user.id, data);
    },
    async save(id: number, payload: UserUpdatePayloadInterface): Promise<void> {
      try {
        const response = await this.$api.user.update(id, payload);

        this.setUser(response.data);
        this.$toast.success('Profile is updated successfully.')
      } catch (e) {
        if (e instanceof ValidationError) {
          this.errors = e.errors;
        }
      }
    },
    async avatar(id: number, payload: FormData): Promise<void> {
      try {
        const response = await this.$api.user.avatar(id, payload);

        this.setUser(response.data);
        this.$toast.success('Avatar is updated successfully.')
      } catch (e) {
        if (e instanceof ValidationError) {
          this.errorsAvatar = e.errors;
        }
      }
    },
  }
})
</script>
