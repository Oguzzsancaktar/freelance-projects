<template>
  <div :class="`AdvertInformation ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="wrapper">
      <div class="layout">
        <div class="heading">
          <h2 v-scrollanimation>{{ AdvertInformationData.Heading }}</h2>
        </div>
        <div class="area">
          <div class="item input">
            <InputBox
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              height="auto"
              width="100%"
              :text="AdvertInformationData.AdvertHeading"
              family="var(--font-semibold)"
              textColor="var(--color-nav-link)"
              :isRequired="AdvertInformationData.InputData.Required"
              :placeholder="AdvertInformationData.InputData.Placeholder"
            />
          </div>

          <div class="item icon">
            <Button
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              margin="auto"
              padding="0px"
              direction="row"
              background="transparent"
              radius="high"
              color="white"
              type="together"
              iconType="information"
              iconAreaW="200px"
              :text="AdvertInformationData.InfoText"
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

        <div class="area">
          <TextEditorArea
            :ApplicationLanguage="ApplicationLanguage"
            v-scrollanimation
            :text="AdvertInformationData.AdvertDescription"
            family="var(--font-semibold)"
            textColor="var(--color-nav-link)"
            :isRequired="AdvertInformationData.InputData.Required"
          />
        </div>

        <div class="area">
          <div class="area__left">
            <div
              v-for="(item, index) in AdvertInformationData.SelectBoxData"
              :key="index"
              class="row"
            >
              <div v-for="(child, i) in item" :key="i" class="item">
                <SelectBox
                  :ApplicationLanguage="ApplicationLanguage"
                  v-scrollanimation
                  family="var(--font-semibold)"
                  :text="child.Text"
                  :List="child.List"
                  height="auto"
                  width="100%"
                  textColor="var(--color-nav-link)"
                  :placeholder="child.Placeholder"
                  :isRequired="child.Required"
                  margin="0"
                  :zIndex="100 - index - i"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputBox from "../InputBox.vue";
import Button from "../Button.vue";
import TextEditorArea from "./TextEditorArea.vue";
import SelectBox from "../SelectBox.vue";

export default {
  name: "AdvertInformation",
  components: { InputBox, Button, TextEditorArea, SelectBox },
  props: {
    AdvertInformationData: Object,
    ApplicationLanguage: String,
  },
};
</script>

<style lang="scss" scoped>
.AdvertInformation {
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
        padding: 20px 40px;

        &__left {
          width: 75%;
          display: flex;
          flex-direction: column;

          .row {
            width: 100%;
            display: flex;
            margin: 15px 0;
            .item {
              width: 100%;
              position: relative;
            }
          }

          .SelectBox {
            width: 100%;
          }
        }
        .item {
          /deep/ button {
            display: flex;
            justify-content: center;
          }
        }
        .item.icon {
          width: 25%;
        }
        .item.input {
          margin-top: 20px;
          width: 75%;
        }
      }
      .area:last-child {
        margin-bottom: 30px;
      }
    }
  }
}

.AdvertInformation.rtl {
  .wrapper {
    .layout {
      .heading {
        h2 {
          text-align: right;
          justify-content: flex-end;
        }
      }

      .area {
        flex-direction: row-reverse;

        &__left {
          .row {
            .item {
            }
          }

          .SelectBox {
          }
        }
        .item {
          /deep/ button {
          }
        }
        .item.icon {
        }
        .item.input {
        }
      }
      .area:last-child {
      }
    }
  }
}

@media (max-width: 900px) {
  .AdvertInformation {
    .wrapper {
      .layout {
        .heading {
          h2 {
          }
        }

        .area {
          flex-direction: column;

          /deep/ .quillEditor {
            width: 100%;
          }
          &__left {
            .row {
              .item {
              }
            }

            .SelectBox {
            }
          }
          .item {
            width: 100%;

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
          .item.icon {
            margin-top: 15px;
            width: 100%;
          }
          .item.input {
            width: 100%;
          }
        }
        .area:last-child {
        }
      }
    }
  }

  .AdvertInformation.rtl {
    .wrapper {
      .layout {
        .heading {
          h2 {
            text-align: right;
            justify-content: flex-end;
          }
        }

        .area {
          flex-direction: column;

          &__left {
            .row {
              .item {
              }
            }

            .SelectBox {
            }
          }
          .item {
            /deep/ button {
              .together-text {
                justify-content: flex-end !important;
              }
            }
          }
          .item.icon {
          }
          .item.input {
          }
        }
        .area:last-child {
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .AdvertInformation {
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
          padding: 20px 40px;

          &__left {
            width: 100%;
            display: flex;
            flex-direction: column;

            .row {
              width: 100%;
              display: flex;
              flex-direction: column;
              margin: 15px 0;
              .item {
                width: 100%;
                position: relative;
              }
            }

            .SelectBox {
              width: 100%;
            }
          }
          .item {
            /deep/ button {
              display: flex;
              justify-content: center;
            }
          }
          .item.icon {
            width: 100%;
          }
          .item.input {
            margin-top: 20px;
            width: 100%;
          }
        }
        .area:last-child {
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
