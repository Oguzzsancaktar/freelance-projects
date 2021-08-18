<template>
  <div class="SignInCard">
    <div class="layout">
      <div class="close-button">
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
          iconWidth="25px"
          iconHeight="25px"
          fontSize="15px"
        />
      </div>
      <div class="section">
        <div class="header">
          <h3>Üye Girişi</h3>
        </div>

        <div class="input">
          <input type="text" placeholder="E-Posta Adresi" />
        </div>
        <div class="input">
          <input type="text" placeholder="Şifre" />
        </div>
        <div class="button">
          <Button
            color="var(--background-white)"
            textColor="var(--background-white)"
            width="100%"
            background="var(--color-primary)"
            text="Giriş Yap"
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
          />
        </div>

        <div class="forget">
          <p>Sifremi Unuttum</p>
        </div>

        <div class="divider">
          <hr />
          <p>Veya</p>
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
              Google ile bağlan
            </span>
          </div>

          <div class="area">
            <div class="icon">
              <ImageView width="21px" imageType="svg" imageName="google.svg" />
            </div>
            <span>
              Facebook ile bağlan
            </span>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="header">
          <h3>Yeni Kayıt</h3>
        </div>
        <div class="button">
          <Button
            color="var(--background-white)"
            textColor="var(--color-primary)"
            width="100%"
            background="--color-primary"
            text="Hesap Oluştur"
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
          />
        </div>

        <div class="text">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            tempora eum numquam velit blanditiis inventore.
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
      .header {
        margin: 20px 0;
      }

      .input {
        border: 1px solid var(--color-text-gray-light);
        border-radius: 25px;
        margin: 10px 0;
        overflow: hidden;
        input {
          padding: 15px 25px;

          border: transparent;
        }
      }
      .button {
        width: 100%;
        margin: 20px 0;
      }
    }

    .section:last-child {
      border-left: 1px solid var(--color-text-gray);
    }

    .forget {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
    }

    .divider {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;

      hr {
        width: calc(100% - 160px);
        height: 1px;
        border-width: 1px;
        border-color: var(--color-text-gray-light);
      }
    }
    .social {
      padding-bottom: 20px;
      display: flex;

      .area {
        display: flex;
        border: 1px solid var(--color-text-gray-light);
        border-radius: 25px;
        padding: 10px 15px;
        height: 50px;
        width: 135px;
        line-height: 14px;
        font-size: 13px;

        .icon {
          width: 25px;
          margin-right: 6px;
        }
      }
      .area:first-child {
        margin-right: 10px;
      }
    }
  }
}
</style>
