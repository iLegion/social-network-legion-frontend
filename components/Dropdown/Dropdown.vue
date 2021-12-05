<template>
  <div class="dropdown">
    <button class="btn dropdown-toggle"
            :class="{ 'btn-light': theme === 'light', 'btn-dark': theme === 'dark', }"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false">
      <slot name="dropdown-button-content"></slot>
    </button>

    <ul class="dropdown-menu dropdown-menu-end"
        aria-labelledby="dropdownMenuLink">
      <slot name="dropdown-list-content"></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Dropdown } from 'bootstrap';

export default Vue.extend({
  props: {
    theme: {
      type: String,
      required: false,
      default: 'light'
    }
  },
  methods: {
    initDropdown(): void {
      const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));

      dropdownElementList.map((dropdownToggleEl) => {
        return new Dropdown(dropdownToggleEl)
      })
    }
  },
  mounted() {
    this.initDropdown();
  }
})
</script>
