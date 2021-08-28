<template>
  <div class="AdvertAdress">
    <div class="wrapper">
      <div class="layout">
        <div class="heading">
          <h2>{{ AdvertAdressData.Heading }}</h2>
        </div>

        <div class="area">
          <div class="area__left">
            <div class="row">
              <div
                v-for="(item, index) in CategoriesData.SelectBoxData"
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
                />
              </div>
            </div>
          </div>
          <div class="area__right">
            <div class="item icon">
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
                :text="AdvertAdressData.InfoText"
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
import Button from "../Button.vue";
import SelectBox from "../SelectBox.vue";

export default {
  name: "AdvertAdress",
  components: { Button, SelectBox },
  props: {
    AdvertAdressData: Object,
  },
};
</script>

<style lang="scss" scoped>
.AdvertAdress {
  margin: 30px 0;

  .wrapper {
    .layout {
      background: var(--background-white);
      border-radius: 10px;

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
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__left {
          width: 75%;
          display: flex;

          .row {
            width: 100%;
            display: flex;
            .item {
              width: 100%;
              position: relative;
            }
          }

          .SelectBox {
            width: 100%;
          }
        }
        &__right {
          width: 25%;
        }
        .item {
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .AdvertAdress {
    margin: 30px 0;

    .wrapper {
      .layout {
        background: var(--background-white);
        border-radius: 10px;

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
          padding: 20px 40px;

          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;

          &__left {
            width: 100%;
            display: flex;

            .row {
              width: 100%;
              display: flex;
              flex-direction: column;
              .item {
                width: 100%;
                position: relative;
              }
            }

            .SelectBox {
              width: 100%;
            }
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
