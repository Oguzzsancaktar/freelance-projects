<template>
  <div id="Homepage">
    <HeroSlider
      :ApplicationLanguage="ApplicationLanguage"
      :HeroSliderData="Data.HomePage.HeroSliderData"
    />
    <Carousel
      :ApplicationLanguage="ApplicationLanguage"
      :CarouselData="Data.HomePage.CarouselData"
      class="homepage__carrousel"
    />
    <GridGallery
      :ApplicationLanguage="ApplicationLanguage"
      :GridGalleryData="Data.HomePage.GridGalleryData"
    />
    <AdsArea
      :ApplicationLanguage="ApplicationLanguage"
      :AdsAreaData="Data.HomePage.AdsAreaData"
    />
    <GridGallery
      :ApplicationLanguage="ApplicationLanguage"
      :GridGalleryData="Data.HomePage.GridGallery2Data"
    />
    <MasonryGallery
      :ApplicationLanguage="ApplicationLanguage"
      :MasonryGalleryData="Data.HomePage.MasonryGalleryData"
    />
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
    ApplicationLanguage: String,
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
