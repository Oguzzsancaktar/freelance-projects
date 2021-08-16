<template>
  <div class="PreviewPage">
    <Navbar />
    <div class="subpage-content">
      <TopBar />
      <DetailHero />
      <DetailTop />
      <DetailInfo />
      <DetailDescription />
      <DetailFeatures />
      <DetailInternalFeatures />
      <NextEdit />
    </div>
    <Footer />
  </div>
</template>

<script>
import DetailDescription from "../components/DetailPage/DetailDescription.vue";
import DetailFeatures from "../components/DetailPage/DetailFeatures.vue";
import DetailHero from "../components/DetailPage/DetailHero.vue";
import DetailInfo from "../components/DetailPage/DetailInfo.vue";
import DetailInternalFeatures from "../components/DetailPage/DetailInternalFeatures.vue";
import DetailTop from "../components/DetailPage/DetailTop.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import TopBar from "../components/TopBar.vue";
import NextEdit from "../NextEdit.vue";
export default {
  components: {
    Navbar,
    Footer,
    TopBar,
    DetailHero,
    DetailTop,
    DetailInfo,
    DetailDescription,
    DetailFeatures,
    DetailInternalFeatures,
    NextEdit,
  },
  name: "PreviewPage",
};
</script>

<style lang="scss" scoped>
.PreviewPage {
}
</style>
