<template>
  <div class="BoostInfo">
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
                  <Checkbox />

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
              <div class="padding">
                <div class="checkbox">
                  <Checkbox />

                  <span> {{ BoostInfoData.Checkbox1 }} </span>
                </div>
                <div class="checkbox">
                  <Checkbox />

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
                  <span> Kart sahibi </span>
                  <InputBox />
                </div>
              </div>

              <div class="row four-input">
                <div class="input">
                  <InputBox />
                </div>
                <div class="input">
                  <InputBox />
                </div>
                <div class="input">
                  <InputBox />
                </div>
                <div class="input">
                  <InputBox />
                </div>
              </div>

              <div class="row">
                <div class="select">
                  <SelectBox />
                </div>
                <div class="select">
                  <SelectBox />
                </div>
              </div>
              <div class="row">
                <div class="input">
                  <InputBox />
                </div>
              </div>
            </div>

            <div class="item">
              <Button />
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
  },
};
</script>
<style lang="scss" scoped>
.BoostInfo {
  .wrapper {
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
            .heading {
              width: 100%;
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
              padding: 10px 45px;
              border-bottom: 2px solid var(--background-general);
            }
            .padding {
              padding: 20px 0;
              .checkbox {
                padding: 5px 45px;

                display: flex;
              }
            }

            .row {
              display: flex;
              width: 100%;

              .input {
                width: 100%;
                padding: 10px 45px;
              }
            }

            .row.four-input {
              padding: 10px 45px;

              .input {
                padding: 0 5px;
              }
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
</style>
