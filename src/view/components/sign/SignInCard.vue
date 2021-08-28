<template>
  <div class="SignInCard">
    <div class="layout">
      <div v-on:click="this.hideSign" class="close-button">
        <Button
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
          iconWidth="30px"
          iconHeight="30px"
          fontSize="15px"
          hoverClass="hover-secondary"
        />
      </div>
      <div class="section">
        <div class="header">
          <h3>{{ SignInData.SignIn }}</h3>
        </div>

        <div class="input">
          <input type="text" :placeholder="SignInData.Email" />
        </div>
        <div class="input">
          <input type="text" :placeholder="SignInData.Password" />
        </div>
        <div class="button">
          <Button
            color="var(--background-white)"
            textColor="var(--background-white)"
            width="100%"
            background="var(--color-primary)"
            :text="SignInData.LogIn"
            radius="25px"
            type="text"
            border="1px solid var(--color-primary)"
            height="50px"
            iconColor="var(--color-primary)"
            padding="0 10px"
            margin="auto"
            family="var(--font-bold)"
            fontSize="16px"
            textAlign="center"
            justify="center"
            hoverClass="hover-primary"
            textTransfrom="uppercase"
          />
        </div>

        <div class="forget">
          <p>{{ SignInData.ForgetPassword }}</p>
        </div>

        <div class="divider">
          <hr />
          <p>{{ SignInData.Or }}</p>
          <hr />
        </div>

        <div class="social">
          <div class="area">
            <div class="icon">
              <ImageView
                width="21px"
                imageType="svg"
                imageName="facebook.svg"
              />
            </div>

            <span>
              {{ SignInData.SignWith }}
              <b>
                {{ SignInData.Facebook }}
              </b>
            </span>
          </div>

          <div class="area">
            <div class="icon">
              <ImageView width="21px" imageType="svg" imageName="google.svg" />
            </div>
            <span>
              {{ SignInData.SignWith }}
              <b>
                {{ SignInData.Google }}
              </b>
            </span>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="header">
          <h3>{{ SignInData.NewUser }}</h3>
        </div>
        <div @click="this.showSignup" class="button">
          <Button
            color="var(--background-white)"
            textColor="var(--color-primary)"
            width="100%"
            background="--color-primary"
            :text="SignInData.CreateAccount"
            radius="25px"
            type="text"
            border="1px solid var(--color-primary)"
            height="50px"
            iconColor="var(--color-primary)"
            padding="0 10px"
            margin="auto"
            iconWidth="20px"
            iconHeight="16px"
            family="var(--font-bold)"
            fontSize="16px"
            textAlign="center"
            hoverClass="hover-secondary"
            justify="center"
            textTransfrom="uppercase"
          />
        </div>

        <div class="text">
          <p>
            {{ SignInData.Description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import ImageView from "../ImageView.vue";
export default {
  name: "SignInCard",
  components: { Button, ImageView },
  props: {
    SignInData: Object,
  },
  methods: {
    hideSign: function() {
      this.$emit("hideSign");
    },

    showSignup: function() {
      this.$emit("showSignup");
    },
  },
};
</script>

<style lang="scss" scoped>
.SignInCard {
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
    max-width: 750px;
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

      .text {
        font-size: 14px;
        font-family: var(--font-medium);
        color: var(--color-card-id);
      }
      .header {
        margin: 40px 0;
        font-size: 19px;
        font-family: var(--font-bold);
        text-transform: uppercase;
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
      .button {
        width: 100%;
        margin: 20px 0;
      }
    }

    .section:last-child {
      border-left: 1px solid var(--color-card-border);
    }

    .forget {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 40px 0;
      font-size: 14px;
      font-family: var(--font-medium);
      color: var(--color-card-id);
      transition: 0.4s;
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
        cursor: pointer;
        transition: 0.4s;

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

@media (max-width: 900px) {
  .SignInCard {
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
        .button {
        }
      }

      .section:last-child {
        border: none;
        .header {
          display: none;
          margin-top: 0px;
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
