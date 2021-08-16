<template>
  <div class="AdvertNext">
    <div class="wrapper">
      <div class="layout">
        <div class="check-terms">
          <Checkbox />
          <span
            >İlan <b>Yayınlama Kurallarını</b> okudum ve kabul ediyorum.</span
          >
        </div>

        <button>
          <span>Devam Et</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";
export default {
  components: { Checkbox },
};
</script>

<style lang="scss" scoped>
.AdvertNext {
  .wrapper {
    .layout {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .check-terms {
        display: flex;
        align-items: center;
        padding: 20px 10px;
        background: var(--background-white);
        border-radius: 10px;
        margin-left: 20px;
        span {
          b {
            color: var(--color-primary);
          }
        }
      }
      button {
        max-width: 250px;
        width: 100%;
        background: var(--color-primary);
        padding: 20px 10px;
        border: 1px solid var(--color-primary);
        border-radius: 10px;
        margin-left: 20px;
        font-size: 40px;
      }
    }
  }
}
</style>
