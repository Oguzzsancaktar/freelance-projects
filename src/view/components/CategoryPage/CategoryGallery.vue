<template>
  <div class="CategoryGallery">
    <section>
      <div class="heading">
        <h3>
          {{ Heading }}
        </h3>
      </div>
    </section>

    <div class="grid__gallery">
      <div class="wrapper">
        <div class="grid__gallery__layout">
          <DetailCard
            v-for="(item, index) in CategoryGalleryData.CardData"
            :key="index"
            :data="item"
            class="grid__gallery__layout__item"
          />
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
  props: {
    CategoryGalleryData: Object,
    Heading: String,
  },
};
</script>

<style lang="scss" scoped>
.CategoryGallery {
  border-radius: 10px;
  background: var(--background-white);
  height: 100%;
  border-radius: 10px;
  width: 100%;

  section {
    width: 100%;

    .heading {
      width: 100%;
      h3 {
        text-transform: uppercase;

        padding: 20px 45px;
        display: flex;
        align-items: center;
        height: 100%;
        border-bottom: 2px solid var(--background-general);
        padding-bottom: 20px;
        width: 100%;
      }
    }
  }

  .grid__gallery {
    min-height: 1200px;
    width: 100%;
    padding: 45px;
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
        width: 30%;
        margin: 20px 0;
        max-width: 260px;
      }

      // &__item:nth-child(2),
      // &__item:nth-child(5) {
      //   margin: auto 20px;
      // }
    }
  }
}
@media (max-width: 1300px) {
  .CategoryGallery {
    section {
      .heading {
        h3 {
        }
      }
    }

    .grid__gallery {
      .wrapper {
        width: 100%;
      }

      &__nav {
        .section {
          span {
          }
        }

        .section:last-child {
        }
      }
      &__layout {
        &__item {
        }
      }
    }
  }
}
@media (max-width: 1270px) {
  .CategoryGallery {
    section {
      .heading {
        h3 {
        }
      }
    }

    .grid__gallery {
      .wrapper {
        width: 100%;
      }

      &__nav {
        .section {
          span {
          }
        }

        .section:last-child {
        }
      }
      &__layout {
        &__item {
          max-width: none;
          width: 48%;
        }
      }
    }
  }
}

@media (max-width: 1000px) {
  .CategoryGallery {
    section {
      .heading {
        h3 {
        }
      }
    }

    .grid__gallery {
      .wrapper {
        width: 100%;
      }

      &__nav {
        .section {
          span {
          }
        }

        .section:last-child {
        }
      }
      &__layout {
        &__item {
          max-width: none;
          width: 100%;
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .CategoryGallery {
    .grid__gallery {
      width: 100%;
      padding: 20px 10px;
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
