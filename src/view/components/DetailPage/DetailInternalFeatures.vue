<template>
  <div
    :class="
      `DetailInternalFeatures ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`
    "
  >
    <div class="wrapper">
      <div class="layout">
        <div class="area">
          <div class="heading">
            <h3>
              {{ DetailInternalFeaturesData.Header1 }}
            </h3>
          </div>

          <ul class="list">
            <li
              v-for="(item, index) in featuresList"
              class="list__item"
              :key="index"
            >
              <Button
                :ApplicationLanguage="ApplicationLanguage"
                family="var(--font-medium)"
                textColor="var(--color-text-gray)"
                iconWidth="40px"
                iconHeight="17px"
                iconColor="var(--color-primary)"
                background="transparent"
                :text="item"
                textAlign="start"
                radius="0px"
                color="white"
                type="together"
                iconType="confirm"
                width="100%"
                fontSize="15px"
                direction="start"
                padding="0"
                iconAreaW="auto"
              />
            </li>
          </ul>
        </div>

        <div class="area">
          <div class="heading">
            <h3>
              {{ DetailInternalFeaturesData.Header2 }}
            </h3>
          </div>

          <ul class="list">
            <li
              v-for="(item, index) in featuresList"
              class="list__item"
              :key="index"
            >
              <Button
                :ApplicationLanguage="ApplicationLanguage"
                family="var(--font-medium)"
                textColor="var(--color-text-gray)"
                iconWidth="40px"
                iconHeight="17px"
                iconColor="var(--color-primary)"
                background="transparent"
                :text="item"
                textAlign="start"
                radius="0px"
                color="white"
                type="together"
                iconType="confirm"
                width="100%"
                fontSize="15px"
                direction="start"
                padding="0"
                iconAreaW="auto"
              />
            </li>
          </ul>
        </div>

        <div class="area">
          <div class="heading">
            <h3>
              {{ DetailInternalFeaturesData.Header3 }}
            </h3>
          </div>

          <ul class="list">
            <li
              v-for="(item, index) in featuresList"
              class="list__item"
              :key="index"
            >
              <Button
                :ApplicationLanguage="ApplicationLanguage"
                family="var(--font-medium)"
                textColor="var(--color-text-gray)"
                iconWidth="40px"
                iconHeight="17px"
                iconColor="var(--color-primary)"
                background="transparent"
                :text="item"
                textAlign="start"
                radius="0px"
                color="white"
                type="together"
                iconType="confirm"
                width="100%"
                fontSize="15px"
                direction="start"
                padding="0"
                iconAreaW="auto"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  components: { Button },
  name: "DetailInternalFeatures",
  props: {
    DetailInternalFeaturesData: Object,
    ApplicationLanguage: String,
  },
  data: function() {
    return {
      featuresList: this.$props.DetailInternalFeaturesData.List,
    };
  },
};
</script>

<style lang="scss" scoped>
.DetailInternalFeatures {
  margin: 20px 0;

  .wrapper {
    .layout {
      background: var(--background-white);

      width: 100%;
      display: flex;
      justify-content: space-between;
      .area {
        width: 31%;

        .heading {
          h3 {
            display: flex;
            align-items: center;
            height: 100%;
            border-bottom: 1px solid var(--background-general);
            padding: 20px 0px;
          }
        }

        .list {
          list-style: none;
          padding: 35px 45px;

          &__item {
            // padding: 0 20px;
          }
          &__item:nth-child(even) {
            background: var(--background-white);
          }
          &__item:nth-child(odd) {
            background: var(--background-general);
          }
        }
      }
    }
  }
}

.DetailInternalFeatures.rtl {
  .wrapper {
    .layout {
      .area {
        .heading {
          h3 {
            text-align: right;
            justify-content: flex-end;
            padding: 20px 0;
          }
        }

        .list {
          &__item {
          }
          &__item:nth-child(even) {
          }
          &__item:nth-child(odd) {
          }
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .DetailInternalFeatures {
    margin: 20px 0;

    .wrapper {
      .layout {
        padding: 5px 45px;

        background: var(--background-white);

        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .area {
          width: 100%;
          margin: 20px 0;

          .heading {
            h3 {
              display: flex;
              align-items: center;
              height: 100%;
              border-bottom: 1px solid var(--background-general);
              padding-bottom: 20px;
            }
          }

          .list {
            padding: 0px 0;
            list-style: none;

            &__item {
              // padding: 0 20px;
            }
            &__item:nth-child(even) {
              background: var(--background-white);
            }
            &__item:nth-child(odd) {
              background: var(--background-general);
            }
          }
        }
      }
    }
  }
}
</style>
