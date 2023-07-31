<template>
  <div :class="`MyProfile ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="layout">
      <section>
        <div class="heading">
          <h3 v-scrollanimation>
            {{ MyProfileData.Heading }}
          </h3>
        </div>
      </section>

      <section>
        <div class="layout">
          <div class="column">
            <div
              v-scrollanimation
              v-for="(item, index) in MyProfileData.List1"
              :key="index"
              class="row"
            >
              <InputBox
                :ApplicationLanguage="ApplicationLanguage"
                textColor="var(--color-text-general)"
                family="var(--font-medium)"
                v-for="(j, Jindex) in item.List"
                :key="Jindex"
                width="90%"
                padding="0"
                :text="j.Text"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="layout">
          <div class="column">
            <div class="row">
              <InputBox
                :ApplicationLanguage="ApplicationLanguage"
                v-scrollanimation
                textColor="var(--color-text-general)"
                family="var(--font-medium)"
                v-for="(item, index) in MyProfileData.List2"
                :key="index"
                width="90%"
                padding="0"
                :text="item.Text"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="layout">
          <div class="column">
            <div class="row">
              <div class="btn">
                <Button
                  :ApplicationLanguage="ApplicationLanguage"
                  v-scrollanimation
                  textTransfrom="uppercase"
                  border="1px solid var(--color-secondary)"
                  background="var(--color-secondary)"
                  :text="MyProfileData.Save"
                  radius="28px"
                  type="text"
                  width="195px"
                  height="55px"
                  padding="0 10px"
                  textColor="var(--background-white)"
                  family="var(--font-bold)"
                  fontSize="16px"
                  textAlign="center"
                  justify="center"
                  hoverClass="hover-secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import InputBox from "../InputBox.vue";
export default {
  name: "MyProfile",
  props: {
    MyProfileData: Object,
    ApplicationLanguage: String,
  },
  components: { InputBox, Button },
};
</script>

<style lang="scss" scoped>
.MyProfile {
  border-radius: 10px;
  width: 100%;
  background: var(--background-white);
  .layout {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    section {
      width: 100%;

      .heading {
        width: 100%;
        h3 {
          text-transform: uppercase;

          padding: 20px 45px;
          display: flex;
          align-items: center;
          height: 100%;
          border-bottom: 2px solid var(--background-general);
          padding-bottom: 20px;
          width: 100%;
        }
      }
      .column {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 30px 0;
        border-bottom: 1px solid var(--background-general);
        border-top: 1px solid var(--background-general);

        .row {
          padding: 20px 40px;
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;

          /deep/ .aselect {
            margin: auto;
          }

          .btn {
            width: 100%;
            display: flex;
            justify-content: flex-end;
          }
        }
      }
    }
  }
}

.MyProfile.rtl {
  .layout {
    section {
      .heading {
        h3 {
          text-align: right;
          justify-content: flex-end;
        }
      }
      .column {
        padding: 20px 0;

        .row {
          padding: 20px;
          flex-direction: row-reverse;
          /deep/ .aselect {
          }

          .btn {
          }
        }
        .row:last-child {
          padding: 0 20px !important;
        }
      }
    }
  }
}

@media (max-width: 850px) {
  .MyProfile {
    .layout {
      section {
        .heading {
          h3 {
          }
        }
        .column {
          padding: 20px 0;

          .row {
            padding: 20px;
            flex-direction: column;
            /deep/ .aselect {
            }

            .btn {
              justify-content: center;
            }
          }
          .row:last-child {
            padding: 0 20px !important;
          }
        }
      }
    }
  }

  .MyProfile.rtl {
    .layout {
      section {
        .heading {
          h3 {
            text-align: right;
            justify-content: flex-end;
          }
        }
        .column {
          padding: 20px 0;

          .row {
            padding: 20px;
            flex-direction: column;
            /deep/ .aselect {
            }

            .btn {
            }
          }
          .row:last-child {
            padding: 0 20px !important;
          }
        }
      }
    }
  }
}
</style>
