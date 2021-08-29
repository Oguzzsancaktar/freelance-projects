<template>
  <div class="PreviewPage">
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
  </div>
</template>

<script>
import DetailDescription from "../components/DetailPage/DetailDescription.vue";
import DetailFeatures from "../components/DetailPage/DetailFeatures.vue";
import DetailHero from "../components/DetailPage/DetailHero.vue";
import DetailInfo from "../components/DetailPage/DetailInfo.vue";
import DetailInternalFeatures from "../components/DetailPage/DetailInternalFeatures.vue";
import DetailTop from "../components/DetailPage/DetailTop.vue";
import TopBar from "../components/TopBar.vue";
import NextEdit from "../components/NextEdit.vue";
export default {
  components: {
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
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>

<style lang="scss" scoped>
.PreviewPage {
}
</style>
