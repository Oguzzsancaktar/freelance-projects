<template>
  <div class="hover__gallery">
    <div class="wrapper">
      <div class="hover__gallery__nav">
        <div class="section">
          <h2 style="color:var(--color-primary)">Featured Listing</h2>
        </div>
        <div class="section">
          <span
            >About <b style="color:var(--color-primary)">765</b> ads waiting
            fdor you.</span
          >
          <Button
            iconColor="var(--color-primary)"
            border="1px solid var(--color-primary)"
            background="transparent"
            text="See All"
            radius="10px"
            color="--color-text-general"
            type="together"
            iconType="plus"
            width="100px"
            height="35px"
            padding="0 10px"
            iconWidth="13px"
            iconHeight="13px"
            textColor="var(--text-color-gray-dark)"
            family="var(--font-semilight)"
            fontSize="15px"
          />
        </div>
      </div>
      <div class="hover__gallery__layout">
        <HoverCard />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import HoverCard from "./HoverCard.vue";

export default {
  components: { Button, HoverCard },
  name: "HoverGallery",
};
</script>

<style lang="scss" scoped>
.hover__gallery {
  min-height: 850px;
  width: 100%;
  padding: 70px 0;
  background: var(--background-white);
  .wrapper {
  }

  &__nav {
    width: 100%;
    height: 20px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    .section {
      span {
        margin: 0 20px;
      }
    }
  }
  &__layout {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    // &__item:nth-child(2),
    // &__item:nth-child(5) {
    //   margin: auto 20px;
    // }
  }
}
</style>
