<template>
  <div id="HeroSlider">
    <div :class="`wrapper ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
      <div class="hero__layout">
        <div class="hero__left">
          <div v-scrollanimation class="hero__left__info">
            <HeroSliderInfo
              :ApplicationLanguage="ApplicationLanguage"
              v-for="(item, index) in HeroSliderData.HeroSliderInfos"
              :key="index"
              :title="item.Title"
              :beforeText="item.BeforeText"
              :primaryText="item.PrimaryText"
              :afterText="item.AfterText"
            />
          </div>
          <div v-scrollanimation class="hero__left__search">
            <HeroSearch
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              @show-advenced="showAdvenced"
              :HeroSearchData="HeroSliderData.HeroSearchData"
            />
          </div>

          <div v-scrollanimation class="hero__left__search__advenced">
            <AdvencedSettings
              :ApplicationLanguage="ApplicationLanguage"
              @close-advenced="closeAdvenced"
              :AdvencedSettingsData="HeroSliderData.AdvencedSettingsData"
            />
          </div>

          <div v-scrollanimation class="hero__left__search__mobile">
            <HeroSearchMobile
              :ApplicationLanguage="ApplicationLanguage"
              @show-advenced="showAdvenced"
              :HeroSearchData="HeroSliderData.HeroSearchData"
            />
          </div>
          <div v-scrollanimation class="hero__left__buttons">
            <SliderButtons
              :ApplicationLanguage="ApplicationLanguage"
              :HeroSliderData="HeroSliderData.HeroSliderInfos"
              @goToSlide="goToSlide"
              activeSlide="slideCounter"
            />
          </div>
        </div>

        <div class="hero__images">
          <div
            v-for="(item, index) in HeroSliderData.HeroSliderInfos"
            :key="index"
            class="hero__slider__image"
          >
            <ImageView
              :ApplicationLanguage="ApplicationLanguage"
              width="auto"
              height="720px"
              :imageName="item.Image"
              imageType="images"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSearch from "./HeroSearch.vue";
import HeroSliderInfo from "./HeroSliderInfo.vue";
import SliderButtons from "./SliderButtons.vue";
import AdvencedSettings from "./AdvencedSettings.vue";

import jquery from "jquery";
import HeroSearchMobile from "./HeroSearchMobile.vue";
import ImageView from "../ImageView.vue";

export default {
  name: "HeroSlider",
  components: {
    HeroSliderInfo,
    SliderButtons,
    HeroSearch,
    HeroSearchMobile,
    ImageView,
    AdvencedSettings,
  },
  props: {
    HeroSliderData: Object,
    ApplicationLanguage: String,
  },
  data: function() {
    return {
      activeCounter: 0,
      activeSliderImage: `../../assets/images/heroBackground-0.jpg`,
      sliderTimer: 6,
      isAdvencedOpen: false,
    };
  },
  methods: {
    closeAdvenced: function() {
      jquery(".hero__left__search__advenced").removeClass("active");
      jquery(".hero__left__search").removeClass("active");
      this.isAdvencedOpen = false;
    },
    showAdvenced: function() {
      if (!this.isAdvencedOpen) {
        jquery(".hero__left__search__advenced").addClass("active");
        jquery(".hero__left__search").addClass("active");
        this.isAdvencedOpen = true;
      } else {
        jquery(".hero__left__search__advenced").removeClass("active");
        jquery(".hero__left__search").removeClass("active");
        this.isAdvencedOpen = false;
      }
    },
    goToSlide(event) {
      if (this.sliderTimer > 2) {
        this.sliderTimer = 0;
        var sliderCounter = 0;
        if (event !== undefined) {
          sliderCounter = event.target.getAttribute("data-slider-counter");
        }

        this.activeCounter = sliderCounter;

        // this.activeSliderImage = `../../assets/images/heroBackground-${sliderCounter}.png`;
        let lineArr = document.getElementsByClassName("button__line");
        let infoArr = document.getElementsByClassName("hero__slider__info");
        let imageArr = document.getElementsByClassName("hero__slider__image");

        for (let i = 0; i < lineArr.length; i++) {
          lineArr[i].classList.remove("active");
          infoArr[i].classList.remove("active");
          imageArr[i].classList.remove("active");
        }

        lineArr[sliderCounter].classList.add("active");

        setTimeout(() => {
          infoArr[sliderCounter].classList.add("active");
          imageArr[sliderCounter].classList.add("active");
        }, 1000);
      }
    },
  },
  mounted: function() {
    this.goToSlide();
  },
  created: function() {
    setInterval(() => {
      if (this.sliderTimer < 6) {
        this.sliderTimer++;
      } else {
        this.sliderTimer = 6;
      }
    }, 1000);

    setInterval(() => {
      let $sliderButtons = jquery(".slider__buttons .button");

      if (this.sliderTimer == 6) {
        this.activeCounter++;

        if (this.activeCounter < $sliderButtons.length) {
          jquery($sliderButtons[this.activeCounter]).click();
        } else {
          this.activeCounter = 0;
          jquery($sliderButtons[this.activeCounter]).click();
        }

        this.sliderTimer = 0;
      }
    }, 6000);
  },
};
</script>

<style lang="scss" scoped>
#HeroSlider {
  width: 100vw;
  background: var(--background-general);
  padding-top: 150px;
  height: 720px;
  display: flex;

  .wrapper {
    display: flex;
    height: 100%;

    .hero__layout {
      display: flex;
    }

    .hero__images {
      .hero__slider__image {
        opacity: 0;
        position: absolute;
        display: flex;
        right: 0px;
        top: 0px;
        width: calc(100% - 335px);
        height: 720px;
        justify-content: flex-end;
        transition: 1s;

        img {
          width: 100%;
          height: 720px;
          object-fit: cover;
        }
      }
      .hero__slider__image.active {
        transition: 1s;
        opacity: 1;
      }
    }

    .hero__left {
      z-index: 2;
      background: var(--background-general);
      overflow-x: visible;
      position: relative;
      height: 100%;
      width: 335px;
      &__info {
        width: 100%;
        height: 200px;
        display: inline-block;
        position: absolute;
        top: 90px;
      }

      &__search {
        transition: 0.7s;

        display: flex;
        align-items: center;
        height: 100px;
        width: 800px;
        background: var(--background-white);
        z-index: 2;
        position: absolute;
        bottom: 130px;
        border-radius: 10px;
        box-shadow: 0 0 10px -7px var(--box-shadow-color);

        /deep/ .before-enter {
          transition-delay: 4s;
        }

        &__mobile {
          width: 90%;
          display: none;
        }
      }

      &__search.before-enter {
        transition-delay: 2.5s;
      }

      // &__search.enter {

      // }
      &__search.active {
        transition: 0.7s;
        transform: translateY(100%);
        bottom: calc(100% - 20px);
      }

      &__search__advenced {
        display: flex;
        align-items: center;
        width: 800px;
        background: var(--background-white);
        z-index: 2;
        position: absolute;
        bottom: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px -7px var(--box-shadow-color);

        max-height: 0px;
        transition: 0.4s;
        overflow: hidden;

        &__mobile {
          width: 90%;
          display: none;
        }
      }

      &__search__advenced.active {
        height: auto;
        transition: 1s;
        overflow: hidden;
        max-height: 500px;

        height: auto;
      }

      &__buttons {
        position: absolute;
        bottom: 40px;
      }

      &__buttons.before-enter {
        transition-delay: 2.5s;
      }

      // &__buttons.enter {
      //   transform: translateY(0px) !important;
      // }
    }
  }

  .wrapper.rtl {
    justify-content: flex-end;

    .hero__left__info {
      text-align: right;
    }
    .hero__slider__image {
      left: 0;
    }
    .hero__left__search {
      right: 0;

      .hero__search {
        flex-direction: row-reverse;
      }
    }
    .hero__left__search__advenced {
      right: 0;
    }

    .hero__left__buttons {
      right: 0;
      .slider__buttons {
        flex-direction: row-reverse;
      }
    }
  }
}

@media (max-width: 1200px) {
  #HeroSlider {
    .wrapper {
      .hero__slider__image {
        width: calc(100% - 335px);
        img {
        }
      }
    }
  }
}

@media (min-width: 1199px) {
  #HeroSlider {
    .wrapper {
      .hero__slider__image {
        width: calc((100vw - 1200px) / 2 + 850px);
        img {
          width: calc((100vw - 1200px) / 2 + 850px);
        }
      }
    }
  }
}

@media (max-width: 900px) {
  #HeroSlider {
    padding-top: 80px;
    height: 100vh;
    .wrapper {
      width: 100vw;

      .hero__layout {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column-reverse;

        .hero__left {
          position: relative;
          align-self: flex-end;
          height: 40%;
          width: 100%;
          display: flex;
          // justify-content: center;
          flex-direction: column;

          &__search__advenced {
            margin: auto;
            width: 90%;
            // height: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            &__mobile {
            }
          }

          &__search__advenced.active {
            overflow-y: scroll;
            overflow-x: hidden;
            height: 100%;
          }

          &__buttons {
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
          }

          &__search {
            margin: 0 auto;
            width: 90%;
            // height: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            &__mobile {
              margin: 0 auto;
            }
          }
          &__search.active {
            bottom: 450px;
          }

          &__info {
            margin: auto;
            width: 80%;
            height: 240px;
            border-radius: 20px;
            padding: 20px 10px;
            top: -300px;
          }
        }
        .hero__images {
          position: relative;
          align-self: flex-end;
          height: 60%;
          width: 100%;

          filter: brightness(1.2);

          .hero__slider__image {
            width: 100%;
          }
        }
      }
    }
  }
}

@media (max-width: 800px) {
  #HeroSlider {
    .wrapper {
      .hero__layout {
      }

      .hero__images {
        .hero__slider__image {
          img {
          }
        }
        .hero__slider__image.active {
        }
      }

      .hero__left {
        &__info {
        }

        &__search {
          &__mobile {
          }
        }

        &__search.active {
        }

        &__search__advenced {
          &__mobile {
          }
        }

        &__search__advenced.active {
        }

        &__buttons {
        }
      }
    }
  }
}

@media (max-width: 777px) {
  #HeroSlider {
    min-height: 1000px;
    .wrapper {
      .hero__layout {
        border-radius: 10px;
        .hero__left {
          padding: 30px 20px;
          height: 600px;

          &__buttons {
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
          }
          &__search {
            height: auto;
            display: none;
            &__mobile {
              display: flex;
              flex-direction: column;
            }
          }

          &__info {
          }
        }
        .hero__images {
          height: 50%;

          .hero__slider__image {
          }
        }
      }
    }
  }
}
</style>
