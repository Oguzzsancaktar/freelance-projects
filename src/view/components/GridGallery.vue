<template>
  <div :class="`grid__gallery ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="wrapper">
      <div v-scrollanimation class="grid__gallery__nav">
        <div v-scrollanimation class="section">
          <h2 v-scrollanimation style="color:var(--color-primary)">
            {{ GridGalleryData.TopHeader }}
          </h2>
        </div>
        <div v-scrollanimation class="section">
          <span v-scrollanimation class="gallery-description">
            {{ GridGalleryData.About }}
            <b
              v-scrollanimation
              style=" margin:0 5px; color:var(--color-primary)"
            >
              {{ GridGalleryData.Counter }}
            </b>
            {{ GridGalleryData.CounterAfter }}</span
          >
          <router-link to="/category">
            <Button
              :ApplicationLanguage="ApplicationLanguage"
              iconColor="var(--color-primary)"
              border="1px solid var(--color-primary)"
              background="transparent"
              :text="GridGalleryData.SeeAll"
              radius="10px"
              color="--color-text-gray-dark"
              type="together"
              iconType="plus"
              width="100px"
              height="35px"
              padding="0 10px"
              iconWidth="13px"
              iconHeight="13px"
              textColor="var(--text-color-gray-dark)"
              family="var(--font-semilight)"
              fontSize="15px"
              iconAreaW="auto"
              hoverClass="hover-secondary"
            />
          </router-link>
        </div>
      </div>
      <div class="grid__gallery__layout">
        <GalleryCard
          :ApplicationLanguage="ApplicationLanguage"
          v-for="(data, index) in GridGalleryData.GalleryCards"
          :key="index"
          class="grid__gallery__layout__item"
          :data="data"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import GalleryCard from "./GalleryCard.vue";
export default {
  components: { GalleryCard, Button },
  name: "GridGallery",
  props: {
    GridGalleryData: Object,
    ApplicationLanguage: String,
  },
};
</script>

<style lang="scss" scoped>
.grid__gallery {
  min-height: 1200px;
  width: 100%;
  padding: 70px 0;
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
        color: var(--color-text-gray-dark);
        font-size: 15px;
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

    // &__item:nth-child(2),
    // &__item:nth-child(5) {
    //   margin: auto 20px;
    // }
  }
}

.grid__gallery.rtl {
  .wrapper {
    .grid__gallery__nav {
      flex-direction: row-reverse;
      .section {
        justify-content: flex-end;
        span {
          text-align: right;
        }
      }

      .section:last-child {
        flex-direction: row-reverse;
        justify-content: flex-end;
      }
    }
    &__layout {
      // &__item:nth-child(2),
      // &__item:nth-child(5) {
      //   margin: auto 20px;
      // }
    }
  }
}

@media (max-width: 660px) {
  .grid__gallery {
    min-height: 1200px;
    width: 100%;
    padding: 70px 0;
    .wrapper {
    }

    &__nav {
      .section {
        h2 {
          font-size: 20px;
        }
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
</style>
