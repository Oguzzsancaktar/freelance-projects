<template>
  <div :class="`layout ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <p :style="`font-family:${family}; color:${textColor}`">
      {{ text }} <b v-if="isRequired">*</b>
    </p>
    <div class="quillEditor">
      <quill-editor ref="myQuillEditor" :options="editorOption"> </quill-editor>
    </div>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  name: "TextEditorArea",
  components: {
    quillEditor,
  },
  props: {
    text: String,
    textColor: {
      type: String,
    },
    placeholder: {
      type: String,
      default: " Select ",
    },
    family: {
      type: String,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    ApplicationLanguage: String,
  },

  data: function() {
    return {
      editorOption: {
        theme: "snow",
        placeholder: " ",
        modules: {
          toolbar: [
            [{ font: [] }],
            [{ size: ["10px", "small", false, "large", "huge"] }],
            [{ color: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            [
              { align: "" },
              { align: "center" },
              { align: "right" },
              { align: "justify" },
            ],
            ["bold", "italic", "underline"],
            ["blockquote"],
          ],
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  p {
    font-size: 14px;
    color: var(--color-text-gray-light);
    font-family: var(--font-medium);
    margin-bottom: 25px;

    b {
      margin-top: 10px;
      color: var(--color-primary);
      font-size: 20px;
    }
  }

  .quillEditor {
    max-width: none;
    width: 75%;
    height: 250px;
    border-radius: 10px;
    border: 1px solid var(--color-card-border);
    display: flex;
    flex-direction: column;

    /deep/ .quill-editor {
      * {
        font-family: var(--font-semilight) !important;
      }
    }

    /deep/ .ql-toolbar.ql-snow {
      max-width: none;

      width: 100%;
      border: transparent;
      min-height: 50px;
      padding-top: 12px;
      border-bottom: 1px solid var(--color-card-border);
    }

    /deep/ .ql-container {
      max-width: none;

      width: 100%;
      border: transparent;
      height: 200px;
    }
  }
}

.layout.rtl {
  p {
    text-align: right;
    b {
    }
  }

  .quillEditor {
    display: flex;
    align-self: flex-end;
    // text-align: right;
    /deep/ .quill-editor {
      //   * {
      //     text-align: right;
      //   }
    }
    /deep/ .ql-toolbar.ql-snow {
    }

    /deep/ .ql-container {
    }
  }
}
</style>
