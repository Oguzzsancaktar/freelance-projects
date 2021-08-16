<template>
  <div class="InfoCard">
    <div class="layout">
      <div class="area">
        <ImageView width="70%" imageType="svg" imageName="logo.svg" />
      </div>

      <div class="area">
        <div class="texts">
          <h2>Josef Santana</h2>
          <p>Authorized Person</p>
        </div>

        <div class="buttons">
          <Button
            class="btn"
            family="var(--font-medium)"
            color="dark"
            textColor="var(--color-general-dark)"
            text="Login / Sign up"
            type="together"
            iconType="login"
            iconColor="var(--color-primary)"
            background="--background-gray-light"
            radius="30px"
            width="200px"
            padding="0 20px"
            iconWidth="22px"
            iconHeight="21px"
            fontSize="15px"
          />
          <Button
            class="btn"
            family="var(--font-medium)"
            color="dark"
            textColor="var(--color-general-dark)"
            text="Login / Sign up"
            type="together"
            iconType="login"
            iconColor="var(--color-primary)"
            background="--background-gray-light"
            radius="30px"
            width="200px"
            padding="0 20px"
            iconWidth="22px"
            iconHeight="21px"
            fontSize="15px"
          />
        </div>
      </div>

      <div class="area">
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
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import ImageView from "../ImageView.vue";
export default {
  components: { Button, ImageView },
};
</script>

<style lang="scss" scoped>
.InfoCard {
  width: 280px;
  height: 380px;
  background: var(--background-white);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  .layout {
    height: 100%;
    padding-bottom: 20px 25px;
    display: flex;
    flex-direction: column;
    .area {
      display: flex;
      flex-direction: column;
      height: calc(100% - 150px);
      align-items: center;
      justify-content: space-between;
      padding: 15px 30px;

      .texts {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
      .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .btn {
          margin: 3px 0;
        }
      }
    }

    .area:first-child {
      height: 100px;
      border-bottom: 1px solid var(--background-general);
    }
    .area:last-child {
      height: 50px;
      border-top: 1px solid var(--background-general);
    }
  }
}
</style>
