<template>
  <div class="privacy-component">
   <div class="container d-flex justify-content-center">
      <div class="row">
        <div class="col mt-3">
    <form class="mt-3" @submit.prevent="handleSend">
      <div class="mb-3">
        <label class="form-label">Profile display mode</label>
        <div class="d-flex">
          <div class="form-check me-3">
            <input class="form-check-input"
                   type="radio"
                   name="pdm"
                   id="pdm-on"
                   value="1"
                   v-model="form.profileDisplayMode">
            <label class="form-check-label" for="pdm-on">
              On
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input"
                   type="radio"
                   name="pdm"
                   id="pdm-off"
                   value="0"
                   v-model="form.profileDisplayMode">
            <label class="form-check-label" for="pdm-off">
              Off
            </label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Add friends mode</label>
        <div class="d-flex">
          <div class="form-check me-3">
            <input class="form-check-input"
                   type="radio"
                   name="afm"
                   id="afm-on"
                   value="1"
                   v-model="form.addFriendsMode">
            <label class="form-check-label" for="afm-on">
              On
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input"
                   type="radio"
                   name="afm"
                   id="afm-off"
                   value="0"
                   v-model="form.addFriendsMode">
            <label class="form-check-label" for="afm-off">
              Off
            </label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Message writing mode</label>
        <div class="d-flex">
          <div class="form-check me-3">
            <input class="form-check-input"
                   type="radio"
                   name="mwm"
                   id="mwm-on"
                   value="1"
                   v-model="form.messageWritingMode">
            <label class="form-check-label" for="mwm-on">
              On
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input"
                   type="radio"
                   name="mwm"
                   id="mwm-off"
                   value="0"
                   v-model="form.messageWritingMode">
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
import { mapActions } from "vuex";

import UserModel from "~/classes/Models/User/UserModel";
import { PrivacySettingUpdatePayloadInterface } from "~/interfaces/classes/Api/PrivacySettingApiInterface";

export default Vue.extend({
  props: {
    user: {
      type: Object as () => UserModel,
      required: true
    }
  },
  data: (): { form: PrivacySettingUpdatePayloadInterface } => ({
    form: {
      profileDisplayMode: 1,
      addFriendsMode: 1,
      messageWritingMode: 1
    }
  }),
  methods: {
    ...mapActions('auth', ['setUser']),

    setForm(user: UserModel): void {
      if (user.privacySettings) {
        this.form = {
          profileDisplayMode: user.privacySettings.profileDisplayMode,
          addFriendsMode: user.privacySettings.addFriendsMode,
          messageWritingMode: user.privacySettings.messageWritingMode,
        }
      }
    },

    handleSend(): void {
      if (this.user.privacySettings) {
        this.save(this.user.privacySettings.id, this.form);
      }
    },

    async save(id: number, payload: PrivacySettingUpdatePayloadInterface): Promise<void> {
      try {
        const response = await this.$api.privacySetting.update(id, payload);

        this.setUser(response.data);
        this.$toast.success('Private settings is updated successfully.')
      } catch (e) {}
    }
  },
  mounted() {
    this.setForm(this.user);
  }
})
</script>
