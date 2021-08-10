<template>
  <div id="Homepage">
    <FullScreenNavbar @navbar-animations="navbarAnimations" />
    <Navbar @navbar-animations="navbarAnimations" />
    <HeroSlider />
    <Carousel class="homepage__carrousel" />
    <GridGallery />
    <AdsArea />
    <GridGallery />
    <MasonryGallery />
    <Footer />
  </div>
</template>

<script>
import AdsArea from "../components/AdsArea.vue";
import Carousel from "../components/Carousel.vue";
import Footer from "../components/Footer.vue";
import GridGallery from "../components/GridGallery.vue";
import HeroSlider from "../components/HeroSlider.vue";
import MasonryGallery from "../components/MasonryGallery.vue";
import Navbar from "../components/Navbar.vue";
import FullScreenNavbar from "../components/FullScreenNavbar.vue";

export default {
  components: {
    Navbar,
    HeroSlider,
    Carousel,
    GridGallery,
    AdsArea,
    Footer,
    MasonryGallery,
    FullScreenNavbar,
  },
  name: "Homepage",
  methods: {
    navbarAnimations: function(fromTo) {
      this.$emit("navbar-animations", fromTo);
    },
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
