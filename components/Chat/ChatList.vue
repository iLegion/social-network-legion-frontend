<template>
  <div class="chat-dialogs-list-component">
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">Subheading</div>
          Content for list item
        </div>
        <span class="badge bg-primary rounded-pill">14</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">Subheading</div>
          Content for list item
        </div>
        <span class="badge bg-primary rounded-pill">14</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({})
</script>

<style lang="scss">
  .chat-dialogs-list-component {
    position: relative;

    .list-group {
      height: 90vh;
      overflow-y: hidden;
      border: 1px solid rgba(0, 0, 0, 0.125);

      &:hover {
        overflow-y: auto;
      }

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background-color: #f9f9fd;
      }

      &::-webkit-scrollbar-thumb {
        background-color: gray;
      }

      .list-group-item {
        &:first-child {
          border-top: 0;
        }

        border-left: 0;
        border-right: 0;
        border-radius: 0;
      }
    }
  }
</style>
