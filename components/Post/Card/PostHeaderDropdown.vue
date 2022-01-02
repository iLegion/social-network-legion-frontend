<template>
  <Dropdown :id="'post-dropdown-' + post.id">
    <template v-slot:dropdown-list-content>
      <li>
        <div class="dropdown-item">
          <router-link class="dropdown-item"
                       :to="'/posts/' + post.id + '/update'">Update</router-link>
        </div>
      </li>
      <li>
        <div class="dropdown-item">
          <button class="btn text-start w-100"
                  @click="handleDelete">Delete</button>
        </div>
      </li>
    </template>
  </Dropdown>
</template>

<script lang="ts">
import Vue from "vue";

import PostModel from "~/classes/Models/PostModel";
import Dropdown from "~/components/Dropdown/Dropdown.vue";

export default Vue.extend({
  components: {
    Dropdown
  },
  props: {
    post: {
      type: PostModel,
      required: true
    }
  },
  methods: {
    handleDelete(): void {
      this.delete(this.post.id);
    },

    async delete(id: number): Promise<void> {
      try {
        await this.$api.post.delete(id);

        this.$toast.success('Post is deleted successfully.');
        this.$emit('onDelete', id);

      } catch (e) {}
    }
  }
});
</script>

<style scoped>

</style>
