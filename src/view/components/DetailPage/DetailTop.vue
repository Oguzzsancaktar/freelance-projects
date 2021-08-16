<template>
  <div class="DetailTop">
    <div class="wrapper">
      <div class="layout">
        <div class="area">
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

          <span>asdfasdfas as dfasdfas df</span>
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
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  name: "DetailTop",
  components: { Button },
};
</script>

<style lang="scss" scoped>
.DetailTop {
  .wrapper {
    .layout {
      width: 100%;
      background: var(--background-white);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .area {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
