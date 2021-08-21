<template>
  <div class="masonry__gallery">
    <div class="wrapper">
      <div class="grid__gallery__nav">
        <div class="section">
          <h2 style="color:var(--color-primary)">Featured Listing</h2>
        </div>
        <div class="section">
          <span class="gallery-description"
            >About
            <b style=" margin:0 5px; color:var(--color-primary)"> 765 </b> ads
            waiting for you.</span
          >
          <Button
            iconColor="var(--color-primary)"
            border="1px solid var(--color-primary)"
            background="transparent"
            text="See All"
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
          />
        </div>
      </div>

      <main class="container">
        <div>
          <MasonryCard background="var(--color-other-2)" />
        </div>
        <div class="vertical">
          <MasonryCard type="long" />
        </div>

        <div>
          <MasonryCard background="var(--color-other-5)" />
        </div>
        <div>
          <MasonryCard background="var(--color-other-3)" />
        </div>
        <div>
          <MasonryCard background="var(--color-other-1)" />
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
