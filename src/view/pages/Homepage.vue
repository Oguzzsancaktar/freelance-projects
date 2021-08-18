<template>
  <div id="Homepage">
    <HeroSlider />
    <Carousel class="homepage__carrousel" />
    <GridGallery />
    <AdsArea />
    <GridGallery />
    <MasonryGallery />
  </div>
</template>

<script>
import AdsArea from "../components/AdsArea.vue";
import Carousel from "../components/Carousel.vue";
import GridGallery from "../components/GridGallery.vue";
import HeroSlider from "../components/HeroSlider.vue";
import MasonryGallery from "../components/MasonryGallery.vue";

export default {
  components: {
    HeroSlider,
    Carousel,
    GridGallery,
    AdsArea,
    MasonryGallery,
  },
  name: "Homepage",
};
</script>

<style lang="scss" scoped>
#Homepage {
  width: 100vw;
  overflow-x: hidden;

  background: var(--background-general);

  .homepage__carrousel {
  }
}
</style>
