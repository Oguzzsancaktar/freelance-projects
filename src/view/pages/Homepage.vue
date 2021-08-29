<template>
  <div id="Homepage">
    <HeroSlider :HeroSliderData="Data.HomePage.HeroSliderData" />
    <Carousel
      :CarouselData="Data.HomePage.CarouselData"
      class="homepage__carrousel"
    />
    <GridGallery :GridGalleryData="Data.HomePage.GridGalleryData" />
    <AdsArea :AdsAreaData="Data.HomePage.AdsAreaData" />
    <GridGallery :GridGalleryData="Data.HomePage.GridGallery2Data" />
    <MasonryGallery :MasonryGalleryData="Data.HomePage.MasonryGalleryData" />
  </div>
</template>

<script>
import AdsArea from "../components/HomePage/AdsArea.vue";
import Carousel from "../components/HomePage/Carousel.vue";
import GridGallery from "../components/GridGallery.vue";
import HeroSlider from "../components/HomePage/HeroSlider.vue";
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
  props: {
    Data: Object,
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
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
