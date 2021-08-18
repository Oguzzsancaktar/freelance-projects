<template>
  <div class="SignInCard">
    <div class="close-button">
      <Button />
    </div>

    <div class="layout">
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
            textColor="var(--color-primary)"
            width="100%"
            background="--color-primary"
            text="For Sale"
            radius="25px"
            type="text"
            border="1px solid var(--color-primary)"
            iconType="rentSale"
            height="50px"
            iconColor="var(--color-primary)"
            padding="0 10px"
            margin="10px"
            iconWidth="20px"
            iconHeight="16px"
            family="var(--font-medium)"
            fontSize="24px"
            textAlign="center"
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
            <ImageView />
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
            color="var(--color-primary)"
            textColor="var(--color-primary)"
            width="100%"
            background=""
            text="For Sale"
            radius="25px"
            type="text"
            border="1px solid var(--color-primary)"
            iconType="rentSale"
            height="50px"
            iconColor="var(--color-primary)"
            padding="0 10px"
            margin="10px"
            iconWidth="20px"
            iconHeight="16px"
            family="var(--font-medium)"
            fontSize="24px"
            textAlign="center"
          />
        </div>

        <div class="text">
          <p></p>
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
    .section {
      padding: 25px 50px;
      width: 100%;
      .header {
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
      }
    }
    .section:first-child {
      border-right: 1px solid var(--color-text-gray);
    }
  }
}
</style>
