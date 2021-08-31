<template>
  <div :class="`DetailHero  ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="wrapper">
      <div class="wrapper__relative">
        <div class="card">
          <InfoCard
            :ApplicationLanguage="ApplicationLanguage"
            :InfoCardData="DetailHeroData.InfoCardData"
          />
        </div>
      </div>
    </div>
    <div class="layout">
      <div class="item">
        <ImageView
          width="100%"
          height="100%"
          imageType="images"
          imageName="heroBackground-0.jpg"
        />
      </div>
      <div class="item">
        <ImageView
          width="100%"
          height="100%"
          imageType="images"
          imageName="heroBackground-1.jpg"
        />
      </div>
      <div class="item">
        <ImageView
          width="100%"
          height="100%"
          imageType="images"
          imageName="heroBackground-2.jpg"
        />
      </div>
      <div class="item">
        <ImageView
          width="100%"
          height="100%"
          imageType="images"
          imageName="heroBackground-3.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ImageView from "../ImageView.vue";
import InfoCard from "./InfoCard.vue";
export default {
  name: "DetailHero",
  components: { InfoCard, ImageView },
  props: {
    DetailHeroData: Object,
    ApplicationLanguage: String,
  },
};
</script>

<style lang="scss" scoped>
.DetailHero {
  height: 425px;
  width: 100%;

  .layout {
    display: flex;
    height: 100%;

    .item {
      width: 100%;
    }
  }
  .wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 425px;
    &__relative {
      height: 100%;
      width: 100%;
      position: relative;
    }
    .card {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
}

.DetailHero {
  .layout {
    .item {
    }
  }
  .wrapper {
    &__relative {
    }
    .card {
      left: 0;
    }
  }
}

@media (max-width: 900px) {
  .DetailHero {
    .layout {
      .item {
      }
    }
    .wrapper {
      width: 100%;
      &__relative {
      }
      .card {
        min-width: 280px;

        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
