<template>
  <div :class="`DetailFeatures ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="wrapper">
      <div class="layout">
        <div class="area">
          <div class="heading">
            <h3>
              {{ DetailFeaturesData.Header }}
            </h3>
          </div>
        </div>

        <div class="area">
          <ul class="list">
            <li
              v-for="(item, index) in keyValArr"
              :key="index"
              class="list__item"
            >
              <div class="content">
                <span class="key"> {{ item.key }}</span>
                <span class="value">{{ item.value }}</span>
              </div>
            </li>
          </ul>
          <ul class="list">
            <li
              v-for="(item, index) in keyValArr"
              :key="index"
              class="list__item"
            >
              <div class="content">
                <span class="key"> {{ item.key }}</span>
                <span class="value">{{ item.value }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailFeatures",
  data: function() {
    return {
      keyValArr: this.$props.DetailFeaturesData.List,
    };
  },
  props: {
    DetailFeaturesData: Object,
    ApplicationLanguage: String,
  },
};
</script>

<style lang="scss" scoped>
.DetailFeatures {
  margin: 20px 0;
  color: color(--color-text-subpage);

  .wrapper {
    .layout {
      background: var(--background-white);

      width: 100%;
      display: flex;
      flex-direction: column;

      .area {
        width: 100%;
        display: flex;

        .heading {
          width: 100%;
          h3 {
            padding: 35px 45px;

            display: flex;
            align-items: center;
            height: 100%;
            border-bottom: 2px solid var(--background-general);
            padding-bottom: 20px;
            width: 100%;
          }
        }

        .list {
          width: 100%;
          display: flex;
          flex-direction: column;
          list-style: none;
          padding: 35px 45px;

          &__item {
            width: 100%;
            padding: 20px;
            .content {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .key {
                font-size: 15px;
                font-family: var(--font-semilight);
              }
              .value {
                font-size: 16px;
                font-family: var(--font-semibold);
              }
            }
          }
          &__item:nth-child(even) {
            background: var(--background-white);
          }
          &__item:nth-child(odd) {
            background: var(--background-general);
          }
        }
        .list:first-child {
          margin-right: 15px;
        }
        .list:last-child {
          margin-left: 15px;
        }
      }
    }
  }
}

.DetailFeatures.rtl {
  .wrapper {
    .layout {
      .area {
        .heading {
          h3 {
            text-align: right;
            justify-content: flex-end;
          }
        }

        .list {
          &__item {
            .content {
              flex-direction: row-reverse;
              .key {
              }
              .value {
              }
            }
          }
          &__item:nth-child(even) {
          }
          &__item:nth-child(odd) {
          }
        }
        .list:first-child {
        }
        .list:last-child {
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .DetailFeatures {
    margin: 20px 0;
    color: color(--color-text-subpage);

    .wrapper {
      .layout {
        padding: 35px 45px;

        background: var(--background-white);

        width: 100%;
        display: flex;
        flex-direction: column;

        .area {
          width: 100%;
          display: flex;
          flex-direction: column;

          .heading {
            width: 100%;
            h3 {
              display: flex;
              align-items: center;
              height: 100%;
              border-bottom: 2px solid var(--background-general);
              padding-bottom: 20px;
              width: 100%;
            }
          }

          .list {
            width: 100%;
            display: flex;
            flex-direction: column;
            list-style: none;
            padding: 0px 0;

            &__item {
              width: 100%;
              padding: 20px;
              .content {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .key {
                  font-size: 15px;
                  font-family: var(--font-semilight);
                }
                .value {
                  font-size: 16px;
                  font-family: var(--font-semibold);
                }
              }
            }
            &__item:nth-child(even) {
              background: var(--background-white);
            }
            &__item:nth-child(odd) {
              background: var(--background-general);
            }
          }
          .list:first-child {
            margin-right: 0;
          }
          .list:last-child {
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
