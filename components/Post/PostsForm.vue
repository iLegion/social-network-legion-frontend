<template>
  <div class="posts-form">
    <div class="container">
      <div class="row">
        <div class="col-12 offset-2 col-xxl-8">
          <div class="d-flex justify-content-center align-items-center pt-5">
            <form class="w-100" @submit.prevent="handleSend">
              <div class="form-group mb-3">
                <label class="form-label" for="title">
                  Title
                </label>
                <input type="text"
                       id="title"
                       class="form-control"
                       :class="{ 'is-invalid': errors && errors.title }"
                       v-model="form.title"
                       @input="handleInput('title')" />
                <div v-if="errors && errors.title"
                     class="invalid-feedback">
                  {{ errors.title[0] }}
                </div>
              </div>
              <div class="form-group mb-4">
                <label class="form-label">
                  Text
                </label>

                <textarea id="text"
                          rows="5"
                          class="form-control"
                          :class="{ 'is-invalid': errors && errors.text }"
                          v-model="form.text"
                          @input="handleInput('text')" />
                <div v-if="errors && errors.text"
                     class="invalid-feedback">
                  {{ errors.text[0] }}
                </div>
              </div>

              <div class="d-flex justify-content-end">
                <button class="btn btn-dark me-2">
                  {{ post ? 'Update' : 'Create' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import PostModel from "~/classes/Models/PostModel";

export default Vue.extend({
  props: {
    post: {
      type: PostModel,
      required: false,
      default: null
    },
    errors: {
      type: Object,
      required: false,
      default: null
    }
  },
  data: () => {
    return {
      isUpdated: false,
      form: {
        title: '',
        text: ''
      }
    }
  },
  methods: {
    initForm(post: PostModel): void {
      this.form.title = post.title;
      this.form.text = post.text;
    },

    handleInput(type: string): void {
      this.$emit('onInput', type);
    },
    handleSend(): void {
      this.$emit('onSend', this.form);
    }
  },
  mounted() {
    if (this.post) {
      this.initForm(this.post);
    }
  },
  updated() {
    if (this.post && !this.isUpdated) {
      this.initForm(this.post);
    }

    this.isUpdated = true;
  }
});
</script>
