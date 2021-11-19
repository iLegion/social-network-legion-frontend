<template>
  <div class="text-field-component h-100">
    <form class="d-flex h-100" @submit.prevent="handleSubmitForm">
      <textarea class="form-control shadow-none border-start-0 border-end-0 h-100"
                id="exampleFormControlTextarea1"
                placeholder="Write message..."
                v-model="form.text"></textarea>
      <button type="submit" class="btn btn-dark shadow-none">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import DialogModel from "~/classes/Models/Dialog/DialogModel";
import DialogMessageModel from "~/classes/Models/Dialog/DialogMessageModel";

export default Vue.extend({
  props: {
    dialog: {
      type: Object as () => DialogModel,
      default: () => {}
    }
  },
  data: (): { form: { text: string } } => {
    return {
      form: {
        text: ''
      }
    }
  },
  methods: {
    clearTextField(): void {
      this.form.text = '';
    },

    handleSubmitForm(): void {
      if (this.dialog?.id) {
        this.send(this.dialog.id, {
          text: this.form.text
        })
      }
    },

    async send(id: number, payload: { text: string }): Promise<void> {
      try {
        const response = await this.$api.dialogMessage.store(id, payload);

        this.clearTextField();
        this.$emit('sentMessage', this.dialog?.id, new DialogMessageModel(response.data));
      } catch (e) {}
    }
  }
})
</script>

<style lang="scss">
  .text-field-component {
    textarea {
      border-top-left-radius: 0;
      border-top-right-radius: 0;

      &:focus {
        border-color: #ced4da;
      }
    }

    button {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
</style>
