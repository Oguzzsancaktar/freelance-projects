<template>
  <div class="CategoryGallery">
    <div class="grid__gallery">
      <div class="wrapper">
        <div class="grid__gallery__layout">
          <DetailCard class="grid__gallery__layout__item" />

          <DetailCard class="grid__gallery__layout__item" />

          <DetailCard class="grid__gallery__layout__item" />

          <DetailCard class="grid__gallery__layout__item" />

          <DetailCard class="grid__gallery__layout__item" />

          <DetailCard class="grid__gallery__layout__item" />
          <DetailCard class="grid__gallery__layout__item" />

          <DetailCard class="grid__gallery__layout__item" />

          <DetailCard class="grid__gallery__layout__item" />
          <DetailCard class="grid__gallery__layout__item" />

          <DetailCard class="grid__gallery__layout__item" />

          <DetailCard class="grid__gallery__layout__item" />
          <DetailCard class="grid__gallery__layout__item" />

          <DetailCard class="grid__gallery__layout__item" />

          <DetailCard class="grid__gallery__layout__item" />
          <DetailCard class="grid__gallery__layout__item" />

          <DetailCard class="grid__gallery__layout__item" />

          <DetailCard class="grid__gallery__layout__item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailCard from "../DetailPage/DetailCard.vue";

export default {
  components: { DetailCard },
  name: "CategoryGallery",
};
</script>

<style lang="scss" scoped>
.CategoryGallery {
  padding: 0 45px;
  border-radius: 10px;
  background: var(--background-white);
  height: 100%;
  width: 100%;
  .grid__gallery {
    min-height: 1200px;
    width: 100%;
    padding: 45px 0;
    .wrapper {
    }

    &__nav {
      width: 100%;
      height: 20px;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      .section {
        display: flex;
        width: 100%;
        span {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin: 0 20px;
        }
      }

      .section:last-child {
        justify-content: flex-end;
      }
    }
    &__layout {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &__item {
        margin: 20px 0;
      }

      // &__item:nth-child(2),
      // &__item:nth-child(5) {
      //   margin: auto 20px;
      // }
    }
  }
}

@media (max-width: 660px) {
  .CategoryGallery {
    .grid__gallery {
      min-height: 1200px;
      width: 100%;
      padding: 70px 0;
      .wrapper {
      }

      &__nav {
        .section {
          .gallery-description {
            display: none;
          }
          span {
            margin: 0 20px;
          }
        }
      }
      &__layout {
      }
    }
  }
}
</style>
