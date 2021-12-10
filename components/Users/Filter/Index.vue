<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue";

import UserModel from "~/classes/Models/User/UserModel";
import { UsersGetPayloadInterface } from "~/interfaces/classes/Api/UserApiInterface";

export default Vue.extend({
  data: (): { filters: {} } => ({
    filters: {}
  }),
  methods: {
    async get(payload: UsersGetPayloadInterface = {}): Promise<void> {
      try {
        const response = await this.$api.user.getAll(payload);

        this.$emit(
            'onGetUsers',
            response.data.map((i) => {
              return new UserModel(i);
            })
        )
      } catch (e) {}
    },
  },
  async fetch(): Promise<void> {
    await this.get();
  }
});
</script>
