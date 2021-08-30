<template>
  <div :class="`AdvertFeatures ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="wrapper">
      <div class="heading">
        <h2>{{ AdvertFeaturesData.Heading }}</h2>
      </div>
      <div class="layout">
        <div
          v-for="(item, index) in AdvertFeaturesData.CheckBoxData"
          :key="index"
          class="area"
        >
          <div class="area__header">
            <h3>{{ item.Text }}</h3>
          </div>

          <ul v-for="(j, index) in item.List" class="area__list" :key="index">
            <li class="area__list__item">
              <Checkbox :ApplicationLanguage="ApplicationLanguage" :item="j" />
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
    AdvertFeaturesData: Object,
    ApplicationLanguage: String,
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
    border-radius: 10px;

    background: var(--background-white);

    .heading {
      h2 {
        text-transform: uppercase;
        padding: 20px 40px;
        font-size: 16px;
        font-family: var(--font-semibold);
        display: flex;
        align-items: center;
        height: 100%;
        border-bottom: 2px solid var(--background-general);
        padding-bottom: 20px;
      }
    }
    .layout {
      padding: 20px 40px;

      display: flex;
      width: 100%;
      justify-content: space-between;

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

.AdvertFeatures {
  .wrapper {
    .heading {
      h2 {
        text-align: right;
        justify-content: flex-end;
      }
    }
    .layout {
      .area {
        width: 100%;
        &__header {
          h3 {
            text-align: right;
            justify-content: flex-end;
          }
        }
        &__list {
          &__item {
            text-align: right;
            justify-content: flex-end;
          }
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .AdvertFeatures {
    .wrapper {
      .heading {
        h2 {
        }
      }
      .layout {
        flex-direction: column;
        .area {
          width: 100%;
          &__header {
            h3 {
              justify-content: center;
            }
          }
          &__list {
            &__item {
              justify-content: center;
            }
          }
        }
      }
    }
  }
}
</style>
