<template>
  <div :class="`BoostInfo ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="wrapper">
      <div class="layout">
        <section>
          <div class="col">
            <div class="item">
              <div class="heading">
                <h3>
                  {{ BoostInfoData.AdvertType }}
                </h3>
              </div>
              <div class="select">
                <SelectBox
                  :ApplicationLanguage="ApplicationLanguage"
                  family="var(--font-semibold)"
                  :List="BoostInfoData.List"
                  height="auto"
                  width="100%"
                  textColor="var(--color-nav-link)"
                  :placeholder="BoostInfoData.Placeholder"
                />
              </div>
              <div class="padding">
                <div class="checkbox">
                  <Checkbox :ApplicationLanguage="ApplicationLanguage" />

                  <span> {{ BoostInfoData.Ebilling }} </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="col">
            <div class="item">
              <div class="heading">
                <h3>
                  {{ BoostInfoData.PaymentType }}
                </h3>
              </div>
              <div class="padding checkboxes">
                <div class="checkbox">
                  <Checkbox :ApplicationLanguage="ApplicationLanguage" />

                  <span> {{ BoostInfoData.Checkbox1 }} </span>
                </div>
                <div class="checkbox">
                  <Checkbox :ApplicationLanguage="ApplicationLanguage" />

                  <span> {{ BoostInfoData.Checkbox2 }} </span>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="heading">
                <h3>
                  {{ BoostInfoData.CreditCard }}
                </h3>
              </div>
              <div class="row">
                <div class="input">
                  <span> {{ BoostInfoData.CardUser }} </span>
                  <InputBox :ApplicationLanguage="ApplicationLanguage" />
                </div>
              </div>

              <div class="row col">
                <span class="card-nums"> {{ BoostInfoData.CardUser }} </span>
                <div class="four-input">
                  <div class="input">
                    <InputBox :ApplicationLanguage="ApplicationLanguage" />
                  </div>
                  <div class="input">
                    <InputBox :ApplicationLanguage="ApplicationLanguage" />
                  </div>
                  <div class="input">
                    <InputBox :ApplicationLanguage="ApplicationLanguage" />
                  </div>
                  <div class="input">
                    <InputBox :ApplicationLanguage="ApplicationLanguage" />
                  </div>
                </div>
              </div>

              <div class="row col">
                <span class="card-nums">
                  {{ BoostInfoData.ExpirationDate }}
                </span>

                <div class="two-select">
                  <div class="select">
                    <SelectBox
                      :ApplicationLanguage="ApplicationLanguage"
                      family="var(--font-semibold)"
                      :List="BoostInfoData.Months"
                      height="auto"
                      width="100%"
                      textColor="var(--color-nav-link)"
                      placeholder=""
                    />
                  </div>
                  <div class="select">
                    <SelectBox
                      :ApplicationLanguage="ApplicationLanguage"
                      family="var(--font-semibold)"
                      :List="BoostInfoData.Years"
                      height="auto"
                      width="100%"
                      textColor="var(--color-nav-link)"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div class="row col">
                <span class="card-nums">
                  {{ BoostInfoData.SecCode }}
                </span>
                <div class="input">
                  <InputBox :ApplicationLanguage="ApplicationLanguage" />
                </div>
              </div>
            </div>

            <div class="item">
              <Button
                type="text"
                width="100%"
                height="100%"
                background="var(--color-primary)"
                hoverClass="hover-primary"
                :text="BoostInfoData.FinishPayment"
                fontSize="19px"
                family="var(--font-semibold)"
                radius="10px"
                padding="25px 0"
                justify="center"
                textColor="white"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import SelectBox from "../SelectBox.vue";
import Checkbox from "../Checkbox.vue";
import InputBox from "../InputBox.vue";
import Button from "../Button.vue";

export default {
  components: { SelectBox, Checkbox, InputBox, Button },
  name: "BoostInfo",
  props: {
    BoostInfoData: Object,
    ApplicationLanguage: String,
  },
};
</script>
<style lang="scss" scoped>
.BoostInfo {
  .wrapper {
    padding: 20px 0;
    .layout {
      display: flex;
      margin: 20px 0;
      justify-content: space-between;

      section {
        // margin: 0 10px;

        height: auto;
        width: calc(50% - 10px);
        display: flex;
        flex-direction: column;

        .col {
          width: 100%;
          display: flex;
          flex-direction: column;

          .item {
            border-radius: 10px;
            background: var(--background-white);
            margin: 10px 0;

            /deep/ button {
              cursor: pointer;
            }
            .heading {
              width: 100%;
              margin-bottom: 20px;
              h3 {
                padding: 20px 45px;
                display: flex;
                align-items: center;
                height: 100%;
                border-bottom: 2px solid var(--background-general);
                padding-bottom: 20px;
                width: 100%;
              }
            }
            .select {
              width: 100%;
              padding: 10px 45px;
              border-bottom: 2px solid transparent;
            }
            .padding {
              padding: 20px 0;
              border-top: 1px solid var(--background-general);
              .checkbox {
                padding: 5px 45px;

                display: flex;
              }
            }

            .padding.checkboxes {
              border-top: transparent;
            }

            .row {
              display: flex;
              width: 100%;
              padding: 10px 0;

              .card-nums {
                padding: 0px 45px;
              }
              .input {
                width: 100%;
                padding: 10px 45px;
              }
              .four-input {
                display: flex;
                padding: 0px 45px;

                .input {
                  padding: 0 5px;
                }
              }

              .two-select {
                width: 100%;
                display: flex;
                padding: 0px 45px;
                margin: auto;
                height: 40px;

                .select {
                  padding: 0;
                  height: 100% !important;

                  /deep/ .SelectBox {
                    height: 100%;
                    padding: 0;
                    margin: 0;
                    .aselect {
                      margin: 0;
                      height: 100% !important;

                      p {
                      }
                      .selector {
                        padding: 0;
                        height: 100% !important;

                        .label {
                          span {
                            margin-left: 30px;
                          }
                        }
                      }
                    }
                  }
                }

                .input {
                  padding: 0 5px;
                }
              }
            }

            .row.col {
              flex-direction: column;
              .input {
                padding-top: 0;
              }
            }

            .row:first-child {
              padding-top: 20px;
            }
            .row:last-child {
              padding-bottom: 40px !important;
            }
          }
        }

        .col {
          width: 100%;

          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}

.BoostInfo.rtl {
  .wrapper {
    .layout {
      flex-direction: row-reverse;
      section {
        .col {
          .item {
            .heading {
              h3 {
                text-align: right;
                justify-content: flex-end;
              }
            }
            .select {
            }
            .padding {
              .checkbox {
                flex-direction: row-reverse;

                justify-content: flex-start;
              }
            }

            .row {
              .input {
                text-align: right;
                justify-content: flex-end;
              }

              .four-input {
                text-align: right;
                justify-content: flex-end;
                .input {
                  text-align: right;
                  justify-content: flex-end;
                }
              }
            }
          }
        }

        .col {
          .card-nums {
            text-align: right;
            justify-content: flex-end;
          }
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .BoostInfo {
    .wrapper {
      .layout {
        flex-direction: column;

        section {
          width: 100%;
          .col {
            .item {
              border-radius: 10px;
              background: var(--background-white);
              margin: 10px 0;
              .heading {
                width: 100%;
                h3 {
                }
              }
              .select {
              }
              .padding {
                .checkbox {
                }
              }

              .row {
                .input {
                }

                .four-input {
                  .input {
                  }
                }
              }
            }
          }

          .col {
          }
        }
      }
    }
  }

  .BoostInfo.rtl {
    .wrapper {
      .layout {
        flex-direction: column;
        section {
          .col {
            .item {
              .heading {
                h3 {
                  text-align: right;
                  justify-content: flex-end;
                }
              }
              .select {
              }
              .padding {
                .checkbox {
                  flex-direction: row-reverse;

                  justify-content: flex-start;
                }
              }

              .row {
                .input {
                  text-align: right;
                  justify-content: flex-end;
                }

                .four-input {
                  text-align: right;
                  justify-content: flex-end;
                  .input {
                    text-align: right;
                    justify-content: flex-end;
                  }
                }
              }
            }
          }

          .col {
            .card-nums {
              text-align: right;
              justify-content: flex-end;
            }
          }
        }
      }
    }
  }
}
</style>
