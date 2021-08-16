<template>
  <div id="AdvertDetailPage">
    <FullScreenNavbar @navbar-animations="navbarAnimations" />

    <Navbar />
    <div class="subpage-content">
      <DetailHero />
      <DetailTop />
      <DetailInfo />
      <DetailDescription />
      <DetailFeatures />
      <DetailInternalFeatures />
      <DetailCards />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

import DetailTop from "../components/DetailPage/DetailTop.vue";
import DetailInfo from "../components/DetailPage/DetailInfo.vue";
import DetailHero from "../components/DetailPage/DetailHero.vue";
import DetailDescription from "../components/DetailPage/DetailDescription.vue";
import DetailFeatures from "../components/DetailPage/DetailFeatures.vue";
import DetailInternalFeatures from "../components/DetailPage/DetailInternalFeatures.vue";
import DetailCards from "../components/DetailPage/DetailCards.vue";

export default {
  components: {
    Navbar,
    Footer,
    DetailTop,
    DetailInfo,
    DetailHero,
    DetailDescription,
    DetailFeatures,
    DetailInternalFeatures,
    DetailCards,
  },
  name: "AdvertDetailPage",
  methods: {
    navbarAnimations: function(fromTo) {
      this.$emit("navbar-animations", fromTo);
    },
  },
};
</script>

<style lang="scss">
#AdvertDetailPage {
  .subpage-content {
  }
}
</style>
