<template>
  <div id="AdvertDetailPage">
    <div class="subpage-content">
      <DetailHero />
      <DetailTop />
      <DetailInfo />
      <DetailDescription />
      <DetailFeatures />
      <DetailInternalFeatures />
      <DetailCards />
    </div>
  </div>
</template>

<script>
import DetailTop from "../components/DetailPage/DetailTop.vue";
import DetailInfo from "../components/DetailPage/DetailInfo.vue";
import DetailHero from "../components/DetailPage/DetailHero.vue";
import DetailDescription from "../components/DetailPage/DetailDescription.vue";
import DetailFeatures from "../components/DetailPage/DetailFeatures.vue";
import DetailInternalFeatures from "../components/DetailPage/DetailInternalFeatures.vue";
import DetailCards from "../components/DetailPage/DetailCards.vue";

export default {
  components: {
    DetailTop,
    DetailInfo,
    DetailHero,
    DetailDescription,
    DetailFeatures,
    DetailInternalFeatures,
    DetailCards,
  },
  name: "AdvertDetailPage",
};
</script>

<style lang="scss">
#AdvertDetailPage {
  .subpage-content {
  }
}
</style>
