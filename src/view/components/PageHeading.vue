<template>
  <div class="PageHeading">
    <div class="wrapper">
      <div class="layout">
        <div class="heading">
          <h3>
            {{ header }}
          </h3>
        </div>

        <div class="description">
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeading",
  props: {
    header: {
      type: String,
      default: "Default Header",
    },
    description: {
      type: String,
      default: "Default Description",
    },
  },
};
</script>
<style lang="scss" scoped>
.PageHeading {
  .wrapper {
    .layout {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
