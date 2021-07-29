<template>
  <button
    :class="[
      'default-button',
      `background-${color}`,
      `border-radius-${radius}`,
    ]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Default Button Text !!",
    },
    color: {
      type: String,
      default: " ",
    },
    radius: {
      type: String,
      default: "low",
    },
  },
};
</script>

<style lang="scss" scoped></style>
