<template>
  <div id="AdvertDetailPage">
    <div class="subpage-content">
      <DetailHero
        :ApplicationLanguage="ApplicationLanguage"
        :DetailHeroData="Data.AdvertDetailPage.DetailHeroData"
      />
      <DetailTop
        :ApplicationLanguage="ApplicationLanguage"
        :DetailTopData="Data.AdvertDetailPage.DetailTopData"
      />
      <DetailInfo
        :ApplicationLanguage="ApplicationLanguage"
        :DetailInfoData="Data.AdvertDetailPage.DetailInfoData"
      />
      <DetailDescription
        :ApplicationLanguage="ApplicationLanguage"
        :DetailDescriptionData="Data.AdvertDetailPage.DetailDescriptionData"
      />
      <DetailFeatures
        :ApplicationLanguage="ApplicationLanguage"
        :DetailFeaturesData="Data.AdvertDetailPage.DetailFeaturesData"
      />
      <DetailInternalFeatures
        :ApplicationLanguage="ApplicationLanguage"
        :DetailInternalFeaturesData="
          Data.AdvertDetailPage.DetailInternalFeaturesData
        "
      />
      <DetailCards
        :ApplicationLanguage="ApplicationLanguage"
        :DetailCardsData="Data.AdvertDetailPage.DetailCardsData"
      />
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
    ApplicationLanguage: String,
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
