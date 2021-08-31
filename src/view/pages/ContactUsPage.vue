<template>
  <div :class="`ContactUsPage  ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="subpage-content">
      <div class="wrapper">
        <div class="layout">
          <section>
            <div class="heading">
              <h3 v-scrollanimation>
                {{ Data.ContactUsPage.Heading }}
              </h3>
            </div>
          </section>

          <section>
            <div class="area">
              <div class="layout">
                <div class="text">{{ Data.ContactUsPage.Adress }}</div>
                <div v-scrollanimation class="description">
                  {{ Data.ContactUsPage.AdressInfo }}
                </div>

                <div class="items">
                  <div
                    class="item"
                    v-for="(item, index) in Data.ContactUsPage.ButtonsData
                      .List1"
                    :key="index"
                  >
                    <Button
                      :ApplicationLanguage="ApplicationLanguage"
                      v-scrollanimation
                      class="btn"
                      family="var(--font-medium)"
                      color="dark"
                      textColor="var(--color-general-dark)"
                      :text="item.Text"
                      type="together"
                      :iconType="item.Type"
                      iconColor="var(--color-primary)"
                      background="transparent"
                      radius="30px"
                      width="200px"
                      padding="0 0px"
                      iconWidth="22px"
                      iconHeight="21px"
                      fontSize="15px"
                      iconAreaW="auto"
                      textAlign="start"
                      justify="flex-start"
                      textMargin="0 0 0 15px"
                      height="35px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="area">
              <div class="layout">
                <div class="text">{{ Data.ContactUsPage.Adress }}</div>
                <div v-scrollanimation class="description">
                  {{ Data.ContactUsPage.AdressInfo }}
                </div>
                <div class="items">
                  <div
                    class="item"
                    v-for="(item, index) in Data.ContactUsPage.ButtonsData
                      .List2"
                    :key="index"
                  >
                    <Button
                      :ApplicationLanguage="ApplicationLanguage"
                      v-scrollanimation
                      class="btn"
                      family="var(--font-medium)"
                      color="dark"
                      textColor="var(--color-general-dark)"
                      :text="item.Text"
                      type="together"
                      :iconType="item.Type"
                      iconColor="var(--color-primary)"
                      background="transparent"
                      radius="30px"
                      width="200px"
                      padding="0 0px"
                      iconWidth="22px"
                      iconHeight="21px"
                      fontSize="15px"
                      iconAreaW="auto"
                      textAlign="start"
                      justify="flex-start"
                      textMargin="0 0 0 15px"
                      height="35px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div class="layout">
              <div class="row">
                <div
                  v-for="(item, index) in Data.ContactUsPage.InputData"
                  :key="index"
                  class="item"
                >
                  <InputBox
                    :ApplicationLanguage="ApplicationLanguage"
                    v-scrollanimation
                    height="auto"
                    width="100%"
                    :text="item.Text"
                    family="var(--font-semibold)"
                    textColor="var(--color-nav-link)"
                  />
                </div>
              </div>

              <div class="row">
                <div class="item">
                  <InputBox
                    :ApplicationLanguage="ApplicationLanguage"
                    v-scrollanimation
                    height="auto"
                    width="100%"
                    :text="Data.ContactUsPage.YourMessage"
                    family="var(--font-semibold)"
                    textColor="var(--color-nav-link)"
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <Button
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              class="btn"
              family="var(--font-medium)"
              color="dark"
              textColor="var(--background-white)"
              :text="Data.ContactUsPage.ButtonsData.ButtonSend.Text"
              type="together"
              :iconType="Data.ContactUsPage.ButtonsData.ButtonSend.Type"
              iconColor="var(--background-white)"
              background="var(--color-primary)"
              radius="30px"
              width="200px"
              padding="0 30px"
              iconWidth="22px"
              iconHeight="21px"
              fontSize="15px"
              iconAreaW="auto"
              border="1px solid var(--color-primary)"
              hoverClass="hover-primary"
              justify="center"
              textAlign="start"
            />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import InputBox from "../components/InputBox.vue";

export default {
  name: "ContactUsPage",
  components: { InputBox, Button },
  props: {
    Data: Object,
    ApplicationLanguage: String,
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>

<style lang="scss" scoped>
.ContactUsPage {
  .wrapper {
    padding: 20px 0;
    .layout {
      margin: 20px auto;
      background: var(--background-white);
      border-radius: 10px;
      section {
        display: flex;
        .heading {
          width: 100%;
          h3 {
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
      }
    }
    section {
      width: 100%;

      /deep/button {
        div {
          justify-content: center !important;
        }

        span {
          width: auto;
        }
      }

      .layout {
        width: 100%;

        .row {
          width: 100%;
          padding: 20px 40px;

          display: flex;
          justify-content: space-between;
          .item {
            width: 100%;
            margin: 0 5px;
          }
        }
        .text {
          font-family: var(--font-semibold);
          color: var(--color-primary);
          margin-bottom: 20px;
        }
        .description {
          font-family: var(--font-medium);
          font-size: 15px;
          margin-bottom: 20px;
        }
        .items {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          .item {
            /deep/button {
              .button-together {
                justify-content: flex-start !important;
              }
            }
          }
        }
      }

      .area {
        width: 100%;
        padding: 10px 20px;
      }
    }
    section:last-child {
      justify-content: flex-end;
      padding: 20px 0;
      padding-right: 40px;
    }
  }
}

.ContactUsPage.rtl {
  .wrapper {
    .layout {
      section {
        justify-content: center;

        .heading {
          text-align: right;

          h3 {
            justify-content: flex-end;
            text-align: right;
          }
        }
      }
    }
    section {
      .layout {
        .row {
          .item {
          }
        }
        .text {
          justify-content: flex-end;
          text-align: right;
        }
        .description {
          justify-content: flex-end;
          text-align: right;
          padding: 0 0 0 40px;
        }

        .items {
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          .item {
            /deep/button {
              .button-together {
                justify-content: flex-start !important;
              }
            }
          }
        }
      }
      .area:first-child .layout {
        padding: 0 0 10px 0;
      }
    }
    section:last-child {
    }
  }
}

@media (max-width: 1200px) {
  .ContactUsPage {
    .wrapper {
      padding: 20px 0;
      .layout {
        margin: 20px auto;
        background: var(--background-white);
        border-radius: 10px;
        section {
          display: flex;
          .heading {
            width: 100%;
            h3 {
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
        }
      }
      section {
        width: 100%;

        /deep/button {
          div {
            justify-content: center !important;
          }

          span {
            width: auto;
          }
        }

        .layout {
          width: 100%;

          .row {
            width: 100%;
            padding: 20px 40px;

            display: flex;
            justify-content: space-between;
            .item {
              width: 100%;
              margin: 0 5px;
            }
          }
          .text {
            font-family: var(--font-semibold);
            color: var(--color-primary);
            margin-bottom: 20px;
          }
          .description {
            font-family: var(--font-medium);
            font-size: 15px;
            margin-bottom: 20px;
          }
          .items {
            flex-direction: column;
            .item {
              /deep/button {
                .button-together {
                  justify-content: flex-start !important;
                }
              }
            }
          }
        }

        .area {
          width: 100%;
          padding: 10px 20px;
        }
      }
      section:last-child {
        justify-content: flex-end;
        padding: 20px 0;
        padding-right: 40px;
      }
    }
  }
}

@media (max-width: 700px) {
  .ContactUsPage {
    .wrapper {
      .layout {
        section {
          flex-direction: column;
          .heading {
            h3 {
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
        }
      }
      section {
        .layout {
          .row {
            padding: 0 20px;
            flex-direction: column;
            .item {
            }
          }
          .text {
            padding: 0;
          }
          .description {
            padding: 0;
          }
        }
        .area:first-child .layout {
        }
      }
      section:last-child {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
