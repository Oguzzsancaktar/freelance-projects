<template>
  <div class="DetailInfo">
    <div class="wrapper">
      <div class="layout">
        <div class="area">
          <div class="section">
            <h3>ASDFGASDF DSF ASDF ASDF ASDFAÎß</h3>
          </div>
          <div class="section">
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
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  name: "DetailInfo",
  components: { Button },
};
</script>

<style lang="scss" scoped>
.DetailInfo {
  .wrapper {
    .layout {
      width: 100%;
      background: var(--background-white);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .area {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
