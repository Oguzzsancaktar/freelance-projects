<template>
  <div class="NextEdit">
    <div class="wrapper">
      <div class="layout">
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
          incidunt.
        </p>
        <div class="buttons">
          <Button
            color="var(--color-primary)"
            textColor="var(--color-primary)"
            width="300px"
            background="var(--color-primary-low-button)"
            text="For Sale"
            radius="10px"
            type="together"
            border="1px solid var(--color-primary)"
            iconType="rentSale"
            height="80px"
            iconColor="var(--color-primary)"
            padding="0 10px"
            margin="0"
            iconWidth="20px"
            iconHeight="16px"
            family="var(--font-medium)"
            fontSize="14px"
          />

          <Button
            color="var(--color-primary)"
            textColor="var(--color-primary)"
            width="300px"
            background="var(--color-primary-low-button)"
            text="For Sale"
            radius="10px"
            type="text"
            border="1px solid var(--color-primary)"
            iconType="rentSale"
            height="80px"
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
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./components/Button.vue";
export default {
  components: { Button },
  name: "NextEdit",
};
</script>

<style lang="scss" scoped>
.NextEdit {
  .wrapper {
    .layout {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 35px 45px;
      .text {
        margin: 20px 0;
      }

      .buttons {
        width: 60%;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
