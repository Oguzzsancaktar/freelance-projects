<template>
  <div class="AdvertCategory">
    <div class="wrapper">
      <div class="layout">
        <div class="heading">
          <h2>{{ AdvertCategoryData.Heading }}</h2>
        </div>
        <div class="area ">
          <div class="area__left">
            <div
              v-for="(item, index) in AdvertCategoryData.SelectBoxData"
              :key="index"
              class="item"
            >
              <SelectBox
                family="var(--font-semibold)"
                :text="item.Text"
                :List="item.List"
                height="auto"
                width="100%"
                textColor="var(--color-nav-link)"
                :placeholder="item.Placeholder"
                :isRequired="item.Required"
                :zIndex="100 - index"
              />
            </div>
          </div>

          <div class="area__right">
            <div class="item">
              <Button
                margin="auto"
                padding="0px"
                direction="row"
                background="transparent"
                radius="high"
                color="white"
                type="together"
                iconType="information"
                iconAreaW="200px"
                :text="AdvertCategoryData.InfoText"
                iconColor="var(--color-primary)"
                iconHeight="24px"
                iconWidth="24px"
                fontSize="13px"
                textColor="var(--color-text-gray)"
                family="var(--font-semibold)"
                width="100%"
                textAlign="start"
                marginLeft="5px"
                justify="center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectBox from "../SelectBox.vue";
import Button from "../Button.vue";

export default {
  name: "AdvertCategory",
  components: { SelectBox, Button },
  props: {
    AdvertCategoryData: Object,
  },
};
</script>

<style lang="scss" scoped>
.AdvertCategory {
  margin: 30px 0;

  .wrapper {
    .layout {
      border-radius: 10px;

      background: var(--background-white);

      display: flex;
      flex-direction: column;
      width: 100%;

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

      .area {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 20px 40px;

        &__left {
          width: 75%;
          display: flex;
        }
        &__right {
          width: 25%;
        }

        .item {
          width: 100%;
          position: relative;

          /deep/ button {
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .AdvertCategory {
    margin: 30px 0;

    .wrapper {
      .layout {
        .heading {
          h2 {
          }
        }

        .area {
          flex-direction: column;

          &__left {
            width: 100%;

            flex-direction: column;
          }
          &__right {
            width: 100%;
          }

          .item {
            /deep/ button {
              width: 100% !important;
              .button-together {
                width: 100% !important;
                text-align: left;
                .together-text {
                  justify-content: start !important;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
