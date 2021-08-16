<template>
  <div id="AddAdvertPage">
    <FullScreenNavbar @navbar-animations="navbarAnimations" />

    <Navbar />
    <div class="subpage-content">
      <TopBar />
      <AdvertCategory />
      <AdvertInformation />
      <AdvertAdress />
      <AdvertPhotos />
      <AdvertFeatures :featuresList1="['fsdfgdfsg', 'fsdfgdfsg']" />
      <AdvertNext />
    </div>
    <Footer />
  </div>
</template>

<script>
import AdvertCategory from "../components/AdvertCategory.vue";
import AdvertInformation from "../components/AdvertInformation.vue";
import AdvertAdress from "../components/AdvertAdress.vue";

import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import TopBar from "../components/TopBar.vue";
import AdvertPhotos from "../components/AdvertPhotos.vue";
import AdvertFeatures from "../components/AdvertFeatures.vue";
import AdvertNext from "../components/AdvertNext.vue";
import FullScreenNavbar from "../components/FullScreenNavbar.vue";
export default {
  components: {
    Navbar,
    Footer,
    TopBar,
    AdvertCategory,
    AdvertInformation,
    AdvertAdress,
    AdvertPhotos,
    AdvertFeatures,
    AdvertNext,
    FullScreenNavbar,
  },
  name: "AddAdvertPage",
  methods: {
    navbarAnimations: function(fromTo) {
      this.$emit("navbar-animations", fromTo);
    },
  },
};
</script>

<style lang="scss">
#AddAdvertPage {
}
</style>
