<template>
  <div id="AddAdvertPage">
    <div class="subpage-content">
      <TopBar
        :ApplicationLanguage="ApplicationLanguage"
        v-scrollanimation
        :TopBarData="Data.AddAdvertPage.TopBarData"
        @update-section="update"
      />

      <div class="section">
        <transition name="fade">
          <div class="section__item" v-if="section == 0">
            <AdvertCategory
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              :AdvertCategoryData="Data.AddAdvertPage.AdvertCategoryData"
            />
            <AdvertInformation
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              :AdvertInformationData="Data.AddAdvertPage.AdvertInformationData"
            />
            <AdvertAdress
              v-scrollanimation
              :ApplicationLanguage="ApplicationLanguage"
              :AdvertAdressData="Data.AddAdvertPage.AdvertAdressData"
            />
            <AdvertPhotos
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              :AdvertPhotosData="Data.AddAdvertPage.AdvertPhotosData"
            />
            <AdvertFeatures
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              :AdvertFeaturesData="Data.AddAdvertPage.AdvertFeaturesData"
            />
            <AdvertNext
              :ApplicationLanguage="ApplicationLanguage"
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
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              :DetailHeroData="Data.AdvertDetailPage.DetailHeroData"
            />
            <DetailTop
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              :DetailTopData="Data.AdvertDetailPage.DetailTopData"
            />

            <DetailInfo
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              :DetailInfoData="Data.AdvertDetailPage.DetailInfoData"
            />
            <DetailDescription
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              :DetailDescriptionData="
                Data.AdvertDetailPage.DetailDescriptionData
              "
            />
            <DetailFeatures
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              :DetailFeaturesData="Data.AdvertDetailPage.DetailFeaturesData"
            />
            <DetailInternalFeatures
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              :DetailInternalFeaturesData="
                Data.AdvertDetailPage.DetailInternalFeaturesData
              "
            />
            <NextEdit
              :ApplicationLanguage="ApplicationLanguage"
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
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              :PageHeadingData="
                Data.AdvertDetailPage.BoostPageData.PageHeadingData
              "
            />
            <BoostInfo
              :ApplicationLanguage="ApplicationLanguage"
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
    ApplicationLanguage: String,
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
