<template>
  <div :id="id"
       class="editor-component form-control"
       :class="{ 'is-invalid': isInvalid, 'read-only': readOnly }"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import EditorJS from '@editorjs/editorjs';
import { OutputData } from "@editorjs/editorjs/types/data-formats";

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: false,
      default: 'editorjs'
    },
    value: {
      type: Object as () => OutputData,
      required: false,
      default: null
    },
    isInvalid: {
      type: Boolean,
      required: false,
      default: false
    },
    readOnly: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: (): { editor: EditorJS | null} => ({
    editor: null
  }),
  methods: {
    init(): void {
      const Header = require('@editorjs/header');

      this.editor = new EditorJS({
        holder: this.id,
        data: this.value,
        readOnly: this.readOnly,
        tools: {
          header: Header
        },
        onChange: () => {
          this.handleChange();
        },
        onReady: () => {
          this.handleReady();
        }
      });
    },

    handleChange(): void {
      this.editor?.save().then((res) => {
        this.$emit('onChange', res.blocks)
      })
    },
    handleReady(): void {
      this.$emit('onReady')
    }
  },
  mounted() {
    this.init();
  }
})
</script>

<style lang="scss">
.editor-component {
  &.read-only {
    padding: 0;
    border: none;

    .codex-editor {
      .codex-editor__redactor {
        padding-bottom: 0 !important;

        .ce-block {
          .ce-block__content {
            max-width: 100% !important;
          }
        }
      }
    }
  }
}
</style>
