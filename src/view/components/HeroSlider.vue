<template>
  <div id="HeroSlider">
    <div class="wrapper">
      <div class="hero__layout">
        <div class="hero__left">
          <div class="hero__left__info">
            <HeroSliderInfo
              title="New Project1"
              beforeText="Find Your Next Perfect1"
              primaryText=" Place1"
              afterText=" to Live1"
            />
            <HeroSliderInfo
              title="New Project2"
              beforeText="Find Your Next Perfect2"
              primaryText=" Place2"
              afterText=" to Live2"
            />
            <HeroSliderInfo
              title="New Project3"
              beforeText="Find Your Next Perfect3"
              primaryText=" Place3"
              afterText=" to Live3"
            />
            <HeroSliderInfo
              title="New Project4"
              beforeText="Find Your Next Perfect4"
              primaryText=" Place4"
              afterText=" to Live4"
            />
            <HeroSliderInfo
              title="New Project5"
              beforeText="Find Your Next Perfect5"
              primaryText=" Place5"
              afterText=" to Live5"
            />
          </div>
          <div class="hero__left__search">
            <HeroSearch />
          </div>
          <div class="hero__left__buttons">
            <SliderButtons @goToSlide="goToSlide" activeSlide="slideCounter" />
          </div>
        </div>

        <div class="hero__images">
          <div class="hero__slider__image">
            <img
              src="../../assets/images/heroBackground-0.png"
              :alt="this.activeSliderImage"
            />
          </div>
          <div class="hero__slider__image">
            <img
              src="../../assets/images/heroBackground-1.png"
              :alt="this.activeSliderImage"
            />
          </div>
          <div class="hero__slider__image">
            <img
              src="../../assets/images/heroBackground-2.png"
              :alt="this.activeSliderImage"
            />
          </div>
          <div class="hero__slider__image">
            <img
              src="../../assets/images/heroBackground-3.png"
              :alt="this.activeSliderImage"
            />
          </div>
          <div class="hero__slider__image">
            <img
              src="../../assets/images/heroBackground-4.png"
              :alt="this.activeSliderImage"
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
export default {
  name: "HeroSlider",
  components: { HeroSliderInfo, SliderButtons, HeroSearch },
  data: function() {
    return {
      activeCounter: 0,
      activeSliderImage: `../../assets/images/heroBackground-0.png`,
    };
  },
  methods: {
    goToSlide(event) {
      var sliderCounter = 0;
      if (event !== undefined) {
        sliderCounter = event.target.getAttribute("data-slider-counter");
      }

      this.activeCounter = sliderCounter;

      // this.activeSliderImage = `../../assets/images/heroBackground-${sliderCounter}.png`;
      let lineArr = document.getElementsByClassName("slider__buttons__line");
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
      }, 1500);
    },
  },
  mounted: function() {
    this.goToSlide();
  },
};
</script>

<style lang="scss" scoped>
#HeroSlider {
  width: 100vw;
  overflow: hidden !important;
  background: var(--background-general);
  padding-top: 150px;
  height: 720px;
  display: flex;

  .wrapper {
    display: flex;
    width: 100%;
    height: 100%;

    .hero__layout {
      display: flex;
    }

    .hero__slider__image {
      transform: translateX(100%);
      position: absolute;
      display: flex;
      right: 0px;
      top: 0px;
      width: calc(100% - 350px);
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
      transform: translateX(0);
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
        display: flex;
        align-items: center;
        height: 100px;
        width: 800px;
        background: var(--background-white);
        z-index: 2;
        position: absolute;
        bottom: 130px;
        border-radius: 10px;
      }
      &__buttons {
        position: absolute;
        bottom: 40px;
      }
    }
  }
}

@media (max-width: 1200px) {
  #HeroSlider {
    .wrapper {
      .hero__slider__image {
        width: calc(100% - 350px);
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
          justify-content: center;

          &__search {
            margin: auto;
            width: 80%;
            height: 100%;
            position: initial;
          }

          &__info {
            margin: auto;
            width: 80%;
            height: 100%;
          }
        }
        .hero__images {
          position: relative;
          align-self: flex-end;
          height: 60%;
          width: 100%;

          .hero__slider__image {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
