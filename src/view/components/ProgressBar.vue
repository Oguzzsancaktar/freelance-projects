<template>
  <div class="ProgressBar">
    <div class="layout">
      <div class="area">
        <span>{{ data }}</span>
        <span>25%</span>
      </div>

      <div class="area">
        <div class="line"></div>
        <div class="line__percentage"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    data: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.ProgressBar {
  height: 100%;
  width: 100%;

  .layout {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;

    .area {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-family: var(--font-bold);
      span {
        font-family: var(--font-bold);

        margin: 10px 0;
      }

      .line {
        position: absolute;
        width: 100%;
        height: 10px;
        background: var(--background-general);
        margin: auto;
        border-radius: 5px;
        &__percentage {
          position: absolute;
          background: var(--color-primary);
          z-index: 1;

          width: 25%;
          height: 10px;
          margin: auto;
          border-radius: 5px;
          clip-path: polygon(0 0, 100% 0%, 95% 100%, 0% 100%);
        }
      }
    }
  }
}
</style>
