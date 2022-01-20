<template>
  <Dropdown :id="'post-dropdown-' + post.id"
            class="post-dropdown">
    <template v-slot:dropdown-list-content>
      <li>
        <router-link class="dropdown-item"
                     :to="'/posts/' + post.id + '/update'">
          Update
        </router-link>
      </li>
      <li>
        <button class="dropdown-item btn rounded-0"
                @click="handleDelete">Delete</button>
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

<style lang="scss" scoped>
.post-dropdown {
  .dropdown-item {
    &:focus {
      color: #1e2125;
      background-color: #e9ecef;
    }

    box-shadow: none;
  }
}
</style>
