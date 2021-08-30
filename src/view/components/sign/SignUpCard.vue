<template>
  <div :class="`SignUpCard ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="layout">
      <div @click="this.hideSign" class="close-button">
        <Button
          v-scrollanimation
          background="var(--color-secondary)"
          family="var(--font-medium)"
          radius="25px"
          color="white"
          type="icon"
          iconType="plus"
          width="50px"
          height="50px"
          padding="0"
          iconColor="var(--background-white)"
          iconWidth="25px"
          iconHeight="25px"
          fontSize="15px"
          hoverClass="hover-secondary"
        />
      </div>
      <div class="section">
        <div class="header">
          <h3 v-scrollanimation>{{ SignUpData.NewUser }}</h3>
        </div>
        <div class="input">
          <input
            v-scrollanimation
            type="text"
            :placeholder="SignUpData.NameSurname"
          />
        </div>
        <div class="input">
          <input
            v-scrollanimation
            type="text"
            :placeholder="SignUpData.Phone"
          />
        </div>
        <div class="input">
          <input
            v-scrollanimation
            type="text"
            :placeholder="SignUpData.Email"
          />
        </div>
        <div class="input">
          <input
            v-scrollanimation
            type="text"
            :placeholder="SignUpData.Password"
          />
        </div>

        <div class="checkbox">
          <Checkbox v-scrollanimation />
          <span v-scrollanimation
            ><a href="">{{ SignUpData.Agree }}</a
            >{{ SignUpData.Terms }}</span
          >
        </div>

        <div @click="this.showSignin" class="button">
          <Button
            v-scrollanimation
            color="var(--background-white)"
            textColor="var(--background-white)"
            width="100%"
            background="var(--color-primary)"
            :text="SignUpData.LogIn"
            radius="25px"
            type="text"
            border="1px solid var(--color-primary)"
            height="50px"
            iconColor="var(--color-primary)"
            padding="0 10px"
            margin="auto"
            iconWidth="20px"
            iconHeight="16px"
            family="var(--font-medium)"
            fontSize="24px"
            textAlign="center"
            justify="center"
            hoverClass="hover-primary"
          />
        </div>

        <div class="forget">
          <p v-scrollanimation>{{ SignUpData.ForgetPassword }}</p>
        </div>

        <div class="divider">
          <hr v-scrollanimation />
          <p v-scrollanimation>{{ SignUpData.Or }}</p>
          <hr v-scrollanimation />
        </div>

        <div class="social">
          <div class="area">
            <div class="icon">
              <ImageView
                v-scrollanimation
                width="21px"
                imageType="svg"
                imageName="facebook.svg"
              />
            </div>

            <span v-scrollanimation>
              {{ SignUpData.SignWith }}
              <b>
                {{ SignUpData.Facebook }}
              </b>
            </span>
          </div>

          <div class="area">
            <div class="icon">
              <ImageView
                v-scrollanimation
                width="21px"
                imageType="svg"
                imageName="google.svg"
              />
            </div>
            <span v-scrollanimation>
              {{ SignUpData.SignWith }}
              <b>
                {{ SignUpData.Google }}
              </b>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import Checkbox from "../Checkbox.vue";
import ImageView from "../ImageView.vue";
export default {
  name: "SignUpCard",
  components: { Button, ImageView, Checkbox },
  props: {
    SignUpData: Object,
    ApplicationLanguage: String,
  },
  methods: {
    hideSign: function() {
      this.$emit("hideSign");
    },
    showSignin: function() {
      this.$emit("showSignin");
    },
  },
};
</script>

<style lang="scss" scoped>
.SignUpCard {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

  .layout {
    border-radius: 10px;
    padding: 0 10px;
    display: flex;
    width: 100%;
    background: var(--background-white);
    max-width: 400px;
    position: relative;

    .close-button {
      transform: translate(50%, -50%) rotate(45deg);
      position: absolute;
      top: 0;
      right: 0;
      transition: 0.4s;
    }
    .close-button:hover {
      transform: translate(50%, -50%) rotate(-45deg);
      transition: 0.4s;
    }

    .section {
      padding: 25px 35px;
      width: 100%;
      .header {
        margin: 20px 0;
        font-size: 19px;
        font-family: var(--font-bold);
        text-transform: uppercase;
        margin-bottom: 40px;
      }

      .input {
        border: 1px solid var(--color-card-border);
        border-radius: 25px;
        margin: 10px 0;
        overflow: hidden;
        input {
          padding: 15px 25px;
          width: 100%;
          border: transparent;
        }
      }
      .checkbox {
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: start;
        margin: 30px 10px;
        span {
          display: flex;
          align-items: center;
          justify-content: start;

          a {
            text-decoration: none;
            color: var(--color-primary);
          }
        }
      }
      .button {
        width: 100%;
        margin: 20px 0;
      }
    }

    .forget {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
      font-size: 14px;
      font-family: var(--font-medium);
      color: var(--color-card-id);
      transition: 0.4s;

      cursor: pointer;
    }
    .forget:hover {
      transition: 0.4s;
      color: var(--color-primary);
    }

    .divider {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
      font-size: 13px;
      font-family: var(--font-medium);
      color: var(--color-card-id);

      hr {
        width: calc(100% - 170px);
        height: 1px;
        border-width: 1px;
        border-color: var(--color-text-gray-light);
        color: var(--color-text-gray-light);
        border-bottom: transparent;
        border-left: transparent;
        border-right: transparent;
        border-top: 1px solid var(--color-card-border);
      }
    }
    .social {
      padding-bottom: 20px;
      display: flex;
      justify-content: center;

      .area {
        display: flex;
        border: 1px solid var(--color-card-border);
        border-radius: 25px;
        padding: 10px 15px;
        height: 50px;
        width: 135px;
        line-height: 14px;
        font-size: 13px;
        transition: 0.4s;
        cursor: pointer;

        .icon {
          width: 25px;
          margin-right: 6px;
          font-size: 13px;
        }
        span {
          b {
            color: var(--color-card-id);
            font-family: var(--font-bold);
          }
        }
      }
      .area:first-child {
        margin-right: 10px;
      }
      .area:hover {
        transition: 0.4s;
        border: 1px solid var(--color-secondary);
      }
    }
  }
}

.SignUpCard.rtl {
  .layout {
    .close-button {
    }
    .close-button:hover {
    }

    .section {
      .header {
        // text-align: right;
      }

      .input {
        input {
          text-align: right;
        }
      }
      .checkbox {
        justify-content: flex-start;
        flex-direction: row-reverse;
        span {
          margin-right: 6px;
          text-align: right;
          a {
          }
        }
      }
      .button {
      }
    }

    .forget {
      text-align: right;
    }
    .forget:hover {
    }

    .divider {
      hr {
      }
    }
    .social {
      text-align: right;

      .area {
        flex-direction: row-reverse;
        .icon {
          margin-right: 0;
          margin-left: 6px;
        }
        span {
          b {
          }
        }
      }
      .area:first-child {
      }

      .area:hover {
      }
    }
  }
}

@media (max-width: 900px) {
  .SignUpCard {
    width: 90%;
    max-width: 600px;
    margin: auto;
    .layout {
      flex-direction: column;
      .close-button {
        transform: translate(0%, 0%) rotate(45deg);
        position: absolute;
        top: 10px;
        right: 10px;
        transition: 0.4s;
      }
      .close-button:hover {
      }

      .section {
        padding: 10px 15px;
        .text {
          text-align: center;
          padding-bottom: 15px;
        }
        .header {
          text-align: center;
        }

        .input {
          input {
          }
        }

        .checkbox {
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: start;
          margin: 15px 10px;
          span {
            display: flex;
            align-items: center;
            justify-content: start;

            a {
              text-decoration: none;
              color: var(--color-primary);
            }
          }
        }
        .button {
        }
      }

      .forget {
        margin: 20px 0;
      }

      .divider {
        hr {
        }
      }
      .social {
        .area {
          .icon {
          }
          span {
            b {
            }
          }
        }
        .area:first-child {
        }
      }
    }
  }
}
</style>
