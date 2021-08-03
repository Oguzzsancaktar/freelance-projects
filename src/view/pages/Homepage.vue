<template>
  <div id="Homepage">
    <Navbar />
    <HeroSlider />
    <Carousel class="homepage__carrousel" />
    <GridGallery />
    <AdsArea />
    <GridGallery />
    <HoverGallery />
    <Footer />
  </div>
</template>

<script>
import AdsArea from "../components/AdsArea.vue";
import Carousel from "../components/Carousel.vue";
import Footer from "../components/Footer.vue";
import GridGallery from "../components/GridGallery.vue";
import HeroSlider from "../components/HeroSlider.vue";
import HoverGallery from "../components/HoverGallery.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
    HeroSlider,
    Carousel,
    GridGallery,
    AdsArea,
    Footer,
    HoverGallery,
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
