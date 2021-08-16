<template>
  <div class="InputBox" :style="`padding:${padding}!important`">
    <div
      :style="
        `border:${border}; border-radius:30px; height:${height} ; margin:${margin}; width:${width}; `
      "
      class="aselect"
    >
      <p>{{ text }}</p>

      <input type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputBox",
  props: {
    text: String,
    border: {
      type: String,
      default: "1px solid transparent",
    },
    margin: {
      type: String,
      default: " ",
    },
    padding: {
      type: String,
      default: " ",
    },
    height: {
      type: String,
      default: " ",
    },
    width: {
      type: String,
      default: " ",
    },
    labelColor: {
      type: String,
      default: " ",
    },
    specialStyle: {
      type: String,
      default: " ",
    },
  },
};
</script>

<style lang="scss" scoped>
.InputBox {
  padding: 0 15px;

  width: 100%;

  input {
    border-radius: 25px;
    border: 1px solid var(--color-text-gray-light);
    padding: 10px 25px;
    width: 100%;
    outline: none;
  }
}

@media (max-width: 777px) {
  .InputBox {
  }
}
</style>
