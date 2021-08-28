<template>
  <div class="TopInfo">
    <div class="layout">
      <div class="section">
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </span>
      </div>
      <div class="section">
        <Button
          background="transparent"
          text="yaz"
          radius="high"
          color="dark"
          textColor="var(--color-text-gray)"
          family="var(--font-medium)"
          fontSize="17px"
          type="together"
          iconType="advenced"
          width="100%"
          iconWidth="22px"
          iconHeight="22px"
          iconColor="var(--color-secondary)"
          height="30px"
          textAlign="left"
          iconAreaW="auto"
          justify="start"
          textMargin="0 0 0 3px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  components: { Button },
  name: "TopInfo",
};
</script>

<style lang="scss" scoped>
.TopInfo {
  padding: 30px 0;
  width: 100%;
  .layout {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-white);
    border-radius: 10px;

    height: 65px;
    .section {
      padding: 25px 35px;
    }
  }
}
</style>
