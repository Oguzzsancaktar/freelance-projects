<template>
  <div class="DetailHero">
    <div class="wrapper">
      <div class="wrapper__relative">
        <div class="card">
          <InfoCard />
        </div>
      </div>
    </div>
    <div class="layout">
      <div class="item">
        <ImageView width="100%" imageType="svg" imageName="logo.svg" />
      </div>
      <div class="item">
        <ImageView width="100%" imageType="svg" imageName="logo.svg" />
      </div>
      <div class="item">
        <ImageView width="100%" imageType="svg" imageName="logo.svg" />
      </div>
      <div class="item">
        <ImageView width="100%" imageType="svg" imageName="logo.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import ImageView from "../ImageView.vue";
import InfoCard from "./InfoCard.vue";
export default {
  name: "DetailHero",
  components: { InfoCard, ImageView },
};
</script>

<style lang="scss" scoped>
.DetailHero {
  height: 425px;
  width: 100%;

  .layout {
    display: flex;
    height: 100%;
  }
  .wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 425px;
    &__relative {
      height: 100%;
      width: 100%;
      position: relative;
    }
    .card {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
}
</style>
