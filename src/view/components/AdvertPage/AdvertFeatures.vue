<template>
  <div class="AdvertFeatures">
    <div class="wrapper">
      <div class="heading">
        <h2>İlan Özellikleri</h2>
      </div>
      <div class="layout">
        <div class="area">
          <div class="area__header">
            <h3>Area Header</h3>
          </div>

          <ul
            v-for="(item, index) in featuresList1"
            class="area__list"
            :key="index"
          >
            <li class="area__list__item">
              <Checkbox :item="item" />
            </li>
          </ul>
        </div>

        <div class="area">
          <div class="area__header">
            <h3>Area Header</h3>
          </div>

          <ul
            v-for="(item, index) in featuresList1"
            class="area__list"
            :key="index"
          >
            <li class="area__list__item">
              <Checkbox :item="item" />
            </li>
          </ul>
        </div>

        <div class="area">
          <div class="area__header">
            <h3>Area Header</h3>
          </div>

          <ul
            v-for="(item, index) in featuresList1"
            class="area__list"
            :key="index"
          >
            <li class="area__list__item">
              <Checkbox :item="item" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "../Checkbox.vue";
export default {
  components: { Checkbox },
  name: "AdvertFeatures",
  props: {
    featuresList1: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.AdvertFeatures {
  margin: 30px 0;
  .wrapper {
    padding: 20px 40px;

    background: var(--background-white);

    .heading {
      h2 {
        display: flex;
        align-items: center;
        height: 100%;
        border-bottom: 1px solid var(--background-general);
        padding-bottom: 20px;
      }
    }
    .layout {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 20px 0;

      .area {
        width: 100%;
        &__header {
          h3 {
            display: flex;
            align-items: center;
            height: 100%;
            border-bottom: 1px solid var(--background-general);
            padding: 20px 0;
          }
        }
        &__list {
          list-style: none;

          &__item {
            margin: 15px 0;
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
