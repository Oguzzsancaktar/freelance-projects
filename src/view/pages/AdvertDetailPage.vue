<template>
  <div id="AdvertDetailPage">
    <div class="subpage-content">
      <DetailHero :DetailHeroData="Data.AdvertDetailPage.DetailHeroData" />
      <DetailTop :DetailTopData="Data.AdvertDetailPage.DetailTopData" />
      <DetailInfo :DetailInfoData="Data.AdvertDetailPage.DetailInfoData" />
      <DetailDescription
        :DetailDescriptionData="Data.AdvertDetailPage.DetailDescriptionData"
      />
      <DetailFeatures
        :DetailFeaturesData="Data.AdvertDetailPage.DetailFeaturesData"
      />
      <DetailInternalFeatures
        :DetailInternalFeaturesData="
          Data.AdvertDetailPage.DetailInternalFeaturesData
        "
      />
      <DetailCards :DetailCardsData="Data.AdvertDetailPage.DetailCardsData" />
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
  props: {
    Data: Object,
  },
  name: "AdvertDetailPage",
};
</script>

<style lang="scss">
#AdvertDetailPage {
  .subpage-content {
    color: var(--color-text-subpage);
  }
}
</style>
