<template>
  <div class="TopBar">
    <div class="wrapper">
      <div class="layout">
        <div class="item">
          <Button
            family="var(--font-medium) "
            color="dark"
            textColor="var(--color-general-dark)"
            text="İlan Bilgileri"
            type="together"
            iconType="login"
            iconColor="var(--color-primary)"
            radius="30px"
            width="170px"
            padding="0 20px"
            iconWidth="22px"
            iconHeight="21px"
            fontSize="15px"
          />
        </div>
        <div class="item">
          <Button
            family="var(--font-medium)"
            color="dark"
            textColor="var(--color-general-dark)"
            text="Ön izleme"
            type="together"
            iconType="login"
            iconColor="var(--color-primary)"
            radius="30px"
            width="170px"
            padding="0 20px"
            iconWidth="22px"
            iconHeight="21px"
            fontSize="15px"
          />
        </div>

        <div class="item">
          <Button
            family="var(--font-medium)"
            color="dark"
            textColor="var(--color-general-dark)"
            text="İlan Öne Çıkar"
            type="together"
            iconType="login"
            iconColor="var(--color-primary)"
            radius="30px"
            width="170px"
            padding="0 20px"
            iconWidth="22px"
            iconHeight="21px"
            fontSize="15px"
          />
        </div>

        <div class="item progress">
          <ProgressBar text="Girilen Bilgiler" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import ProgressBar from "./ProgressBar.vue";
export default {
  name: "TopBar",
  components: { Button, ProgressBar },
};
</script>

<style lang="scss" scoped>
.TopBar {
  margin: 30px 0;

  height: 95px;
  .wrapper {
    height: 100%;
    .layout {
      padding: 20px 40px;
      background: var(--background-white);

      width: 100%;
      height: 100%;

      align-items: center;
      display: flex;
      .item {
        align-items: center;
        display: flex;
        justify-content: center;
        height: 100%;

        background: var(--background-white);
        width: 100%;
        border-right: 1px solid var(--background-general);
      }
      .item.progress {
        padding: 0 40px;
        border-right: none;
      }
    }
  }
}
</style>
