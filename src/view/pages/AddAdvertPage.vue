<template>
  <div id="AddAdvertPage">
    <div class="subpage-content">
      <TopBar
        v-scrollanimation
        :TopBarData="Data.AddAdvertPage.TopBarData"
        @update-section="update"
      />

      <div class="section">
        <transition name="fade">
          <div class="section__item" v-if="section == 0">
            <AdvertCategory
              v-scrollanimation
              :AdvertCategoryData="Data.AddAdvertPage.AdvertCategoryData"
            />
            <AdvertInformation
              v-scrollanimation
              :AdvertInformationData="Data.AddAdvertPage.AdvertInformationData"
            />
            <AdvertAdress
              v-scrollanimation
              :AdvertAdressData="Data.AddAdvertPage.AdvertAdressData"
            />
            <AdvertPhotos
              v-scrollanimation
              :AdvertPhotosData="Data.AddAdvertPage.AdvertPhotosData"
            />
            <AdvertFeatures
              v-scrollanimation
              :AdvertFeaturesData="Data.AddAdvertPage.AdvertFeaturesData"
            />
            <AdvertNext
              v-scrollanimation
              @section-control-button="sectionControlButton"
              :section="section"
              :AdvertNextData="Data.AddAdvertPage.AdvertNextData"
            />
          </div>
        </transition>

        <transition name="fade">
          <div class="section__item" v-if="section == 1">
            <DetailHero
              v-scrollanimation
              :DetailHeroData="Data.AdvertDetailPage.DetailHeroData"
            />
            <DetailTop
              v-scrollanimation
              :DetailTopData="Data.AdvertDetailPage.DetailTopData"
            />

            <DetailInfo
              v-scrollanimation
              :DetailInfoData="Data.AdvertDetailPage.DetailInfoData"
            />
            <DetailDescription
              v-scrollanimation
              :DetailDescriptionData="
                Data.AdvertDetailPage.DetailDescriptionData
              "
            />
            <DetailFeatures
              v-scrollanimation
              :DetailFeaturesData="Data.AdvertDetailPage.DetailFeaturesData"
            />
            <DetailInternalFeatures
              v-scrollanimation
              :DetailInternalFeaturesData="
                Data.AdvertDetailPage.DetailInternalFeaturesData
              "
            />
            <NextEdit
              v-scrollanimation
              @section-control-button="sectionControlButton"
              :section="section"
              :NextEditData="Data.AdvertDetailPage.NextEditData"
            />
          </div>
        </transition>

        <transition name="fade">
          <div class="section__item" v-if="section == 2">
            <PageHeading
              v-scrollanimation
              :PageHeadingData="
                Data.AdvertDetailPage.BoostPageData.PageHeadingData
              "
            />
            <BoostInfo
              v-scrollanimation
              :BoostInfoData="Data.AdvertDetailPage.BoostPageData.BoostInfoData"
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

import BoostInfo from "../components/AdvertPage/BoostInfo.vue";

export default {
  name: "AddAdvertPage",

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
    BoostInfo,
  },
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
    sectionControlButton: function(index) {
      this.section = index;
      this.update(index);
    },
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
