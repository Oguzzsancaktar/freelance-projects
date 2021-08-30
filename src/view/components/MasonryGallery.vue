<template>
  <div
    :class="`masonry__gallery ${ApplicationLanguage == 'ar' ? 'rtl' : ''}  `"
  >
    <div class="wrapper">
      <div v-scrollanimation class="grid__gallery__nav">
        <div class="section">
          <h2 style="color:var(--color-primary)">
            {{ MasonryGalleryData.TopHeader }}
          </h2>
        </div>
        <div class="section">
          <span class="gallery-description"
            >{{ MasonryGalleryData.About }}
            <b style=" margin:0 5px; color:var(--color-primary)">
              {{ MasonryGalleryData.Counter }}
            </b>
            {{ MasonryGalleryData.CounterAfter }}</span
          >
          <router-link to="/category">
            <Button
              v-scrollanimation
              iconColor="var(--color-primary)"
              border="1px solid var(--color-primary)"
              background="transparent"
              :text="MasonryGalleryData.SeeAll"
              radius="10px"
              color="--color-text-general"
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

      <main class="container">
        <div
          v-for="(item, index) in MasonryGalleryData.MasonryCards"
          :key="index"
          :class="item.Class"
        >
          <MasonryCard
            :ApplicationLanguage="ApplicationLanguage"
            v-scrollanimation
            :text="item.Text"
            :text2="item.Text2"
            :background="item.Background"
            :type="item.Type"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import MasonryCard from "./MasonryCard.vue";
export default {
  components: { MasonryCard, Button },
  name: "MasonryGallery",
  props: {
    MasonryGalleryData: Object,
    ApplicationLanguage: String,
  },
};
</script>

<style lang="scss" scoped>
.masonry__gallery {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 850px;
  padding: 70px 0;
  background: var(--background-white);
  .wrapper {
    .grid__gallery {
      &__nav {
        padding: 25px 0;
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
          justify-content: flex-start;
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
    }

    .container {
      width: 100%;
      display: grid;
      grid-gap: 25px;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-auto-rows: 300px;
      grid-auto-flow: dense;
    }

    div {
      overflow: hidden;
      padding: 0;
      display: flex;
      align-items: stretch;
      justify-content: center;
    }

    .vertical {
      grid-row: span 2;
    }
  }
}
.masonry__gallery.rtl {
  .wrapper {
    .grid__gallery {
      &__nav {
        flex-direction: row-reverse;
        .section {
          justify-content: flex-end;
          span {
          }
        }

        .section:last-child {
          flex-direction: row-reverse;
          justify-content: flex-end;
        }
      }
    }
    .container {
    }

    div {
    }

    .vertical {
    }
  }

  @media (max-width: 676px) {
    .wrapper {
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
      .container {
        height: 100%;
        display: flex !important;
        flex-direction: column;
      }
    }
  }
}
</style>
