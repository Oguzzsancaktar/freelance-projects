<template>
  <div id="AddAdvertPage">
    <div class="subpage-content">
      <TopBar
        :TopBarData="Data.AddAdvertPage.TopBarData"
        @update-section="update"
      />

      <div class="section">
        <transition name="fade">
          <div class="section__item" v-if="section == 0">
            <AdvertCategory
              :AdvertCategoryData="Data.AddAdvertPage.AdvertCategoryData"
            />
            <AdvertInformation
              :AdvertInformationData="Data.AddAdvertPage.AdvertInformationData"
            />
            <AdvertAdress
              :AdvertAdressData="Data.AddAdvertPage.AdvertAdressData"
            />
            <AdvertPhotos
              :AdvertPhotosData="Data.AddAdvertPage.AdvertPhotosData"
            />
            <AdvertFeatures
              :AdvertFeaturesData="Data.AddAdvertPage.AdvertFeaturesData"
            />
            <AdvertNext :AdvertNextData="Data.AddAdvertPage.AdvertNextData" />
          </div>
        </transition>

        <transition name="fade">
          <div class="section__item" v-if="section == 1">
            <DetailHero
              :DetailHeroData="Data.AdvertDetailPage.DetailHeroData"
            />
            <DetailTop :DetailTopData="Data.AdvertDetailPage.DetailTopData" />

            <DetailInfo
              :DetailInfoData="Data.AdvertDetailPage.DetailInfoData"
            />
            <DetailDescription
              :DetailDescriptionData="
                Data.AdvertDetailPage.DetailDescriptionData
              "
            />
            <DetailFeatures
              :DetailFeaturesData="Data.AdvertDetailPage.DetailFeaturesData"
            />
            <DetailInternalFeatures
              :DetailInternalFeaturesData="
                Data.AdvertDetailPage.DetailInternalFeaturesData
              "
            />
            <NextEdit />
          </div>
        </transition>

        <transition name="fade">
          <div class="section__item" v-if="section == 2">
            <PageHeading
              header="İlanı Öne Çıkar Hızlı Sonuçlara Ulaş !"
              description="İlanınızı öne çıkararak daha çok alıcıya daha hızlı şekilde ulaşabilirsiniz."
            />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AdvertCategory from "../components/AdvertPage/AdvertCategory.vue";
import AdvertInformation from "../components/AdvertPage/AdvertInformation.vue";
import AdvertAdress from "../components/AdvertPage/AdvertAdress.vue";

import TopBar from "../components/TopBar.vue";
import AdvertPhotos from "../components/AdvertPage/AdvertPhotos.vue";
import AdvertFeatures from "../components/AdvertPage/AdvertFeatures.vue";
import AdvertNext from "../components/AdvertPage/AdvertNext.vue";

import DetailDescription from "../components/DetailPage/DetailDescription.vue";
import DetailFeatures from "../components/DetailPage/DetailFeatures.vue";
import DetailHero from "../components/DetailPage/DetailHero.vue";
import DetailInfo from "../components/DetailPage/DetailInfo.vue";
import DetailInternalFeatures from "../components/DetailPage/DetailInternalFeatures.vue";
import DetailTop from "../components/DetailPage/DetailTop.vue";
import NextEdit from "../components/NextEdit.vue";

import PageHeading from "../components/PageHeading.vue";

export default {
  components: {
    TopBar,
    AdvertCategory,
    AdvertInformation,
    AdvertAdress,
    AdvertPhotos,
    AdvertFeatures,
    AdvertNext,

    NextEdit,
    DetailTop,
    DetailInternalFeatures,
    DetailInfo,
    DetailHero,
    DetailFeatures,
    DetailDescription,

    PageHeading,
  },
  name: "AddAdvertPage",
  props: {
    Data: Object,
  },
  data: function() {
    return {
      section: 0,
    };
  },
  methods: {
    update(section) {
      this.section = section;
    },
  },
};
</script>

<style lang="scss">
#AddAdvertPage {
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: 1s;
  }
}
</style>
