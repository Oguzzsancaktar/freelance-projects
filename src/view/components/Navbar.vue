<template>
  <div id="Navbar">
    <div class="wrapper">
      <div class="layout">
        <div class="area vertical-center">
          <ImageView width="100%" imageType="svg" imageName="logo.svg" />
        </div>
        <div class="area  vertical-center">
          <div class="area__layout">
            <div class="area__layout__section ">
              <Button
                background="--color-secondary"
                family="var(--font-medium)"
                radius="30px"
                color="white"
                type="icon"
                iconType="hearth"
                width="60px"
                padding="0"
                iconColor="var(--background-white)"
                iconWidth="30px"
                iconHeight="26px"
                fontSize="15px"
              />
              <Button
                family="var(--font-medium)"
                textColor="white"
                iconWidth="17px"
                iconHeight="17px"
                iconColor="white"
                background="--color-primary"
                text="Add Property"
                radius="30px"
                color="white"
                type="together"
                iconType="plus"
                width="155px"
                fontSize="15px"
              />
            </div>

            <div class="area__layout__section">
              <Navlink text="Self/Rent" />
              <Navlink text="About Us" />
              <Navlink text="Contact Us" />
            </div>
          </div>
        </div>
        <div class="area vertical-center">
          <div class="area__layout__section">
            <Button
              family="var(--font-medium)"
              color="dark"
              textColor="var(--color-general-dark)"
              text="Login / Sign up"
              type="together"
              iconType="login"
              iconColor="var(--color-primary)"
              background="--background-gray-light"
              radius="30px"
              width="170px"
              padding="0 20px"
              iconWidth="22px"
              iconHeight="21px"
              fontSize="15px"
            />
            <Button
              family="var(--font-medium)"
              textColor="white"
              fontSize="15px"
              color="white"
              background="--color-primary"
              text="AR"
              radius="30px"
              type="text"
              width="60px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Navlink from "./Navlink.vue";
import ImageView from "./ImageView.vue";

export default {
  components: { Button, Navlink, ImageView },
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
#Navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 150px;
  background: var(--background-white);
  width: 100vw;
  z-index: 9;

  .layout {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    :first-child {
      max-width: 180px;
    }
    .area:nth-child(2) {
      justify-content: space-between;
      margin: 0 100px;
      max-width: 600px;
    }
    :last-child {
      max-width: 250px;
      justify-content: flex-end;
    }

    .area {
      width: 100%;
      height: 100%;

      &__layout {
        max-width: none;

        display: flex;
        justify-content: space-between;
        width: 100%;

        :first-child {
          max-width: 240px !important;
        }

        &__section {
          width: 100%;
          display: flex;
          max-width: none !important;
          align-items: center;

          button {
            margin: 0 10px 0 0;
          }
          .nav__link {
            margin: 0 15px;
          }
        }
      }
    }
  }
}
</style>
