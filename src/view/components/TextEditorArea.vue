<template>
  <quill-editor
    v-model="content"
    ref="myQuillEditor"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
  >
  </quill-editor>
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

  data: function() {
    return {
      editorOption: {
        theme: "snow",

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
#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
}

#editor {
  height: 250px;
}
#editor .quill-editor {
  height: 100%;
}
#editor .quill-editor .ql-container {
  height: 60%;
}

#preview {
  padding: 15px;
}

#preview h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
</style>
