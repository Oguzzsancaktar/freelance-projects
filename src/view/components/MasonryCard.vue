<template>
  <div class="masonry-card">
    <div v-if="type == 'short'" class="card">
      <div class="card__layout">
        <div class="card__image">
          <div
            class="card__image__hover"
            :style="`background:${background}!important`"
          >
            <div class="layout">
              <div class="heading">
                <h2>Al Mansour Mall / Baghdad</h2>
              </div>

              <Button
                color="var(--background-white)"
                textColor="var(--background-white)"
                width="230px"
                background="var(--color-primary-low-button)"
                text="Show nearby areas"
                radius="28px"
                type="together"
                border="1px solid var(--background-white)"
                iconType="nearLocation"
                height="55px"
                iconColor="var(--background-white)"
                padding="0 30px"
                margin="0"
                iconWidth="30px"
                iconHeight="30px"
                family="var(--font-light)"
                fontSize="14px"
                iconAreaW="auto"
              />
            </div>
          </div>
          <ImageView
            width="100%"
            height="100%"
            imageType="images"
            imageName="cardImage-1.png"
          />
        </div>
      </div>
    </div>

    <div v-if="type == 'long'" class="card long">
      <div class="card__layout">
        <div class="card__image">
          <div
            class="card__image__hover"
            style="background:var(--color-other-4)!important"
          >
            <Button
              color="var(--background-white)"
              textColor="var(--background-white)"
              width="230px"
              background="var(--color-primary-low-button)"
              text="Show nearby areas"
              radius="28px"
              type="together"
              border="1px solid var(--background-white)"
              iconType="nearLocation"
              height="55px"
              iconColor="var(--background-white)"
              padding="0 30px"
              margin="0"
              iconWidth="30px"
              iconHeight="30px"
              family="var(--font-light)"
              fontSize="14px"
              iconAreaW="auto"
            />
          </div>
          <ImageView
            height="100%"
            imageType="images"
            imageName="cardImage-1.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import ImageView from "./ImageView.vue";
export default {
  name: "masonryCard",
  components: { ImageView, Button },
  props: {
    type: {
      type: String,
      default: "short",
    },
    background: {
      type: String,
      default: "red",
    },
  },
};
</script>

<style lang="scss" scoped>
.masonry-card {
  display: inline-flex;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid-column;
  width: 100%;
  // height: 295px;
  justify-content: space-between;

  .card.long {
    position: relative;
    border-radius: 10px;
    height: 615px;
    width: 100%;
    background: var(--background-white);
  }
  .card {
    position: relative;
    border-radius: 10px;
    height: 295px;
    width: 100%;
    background: var(--background-white);

    &__layout {
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      height: 100%;
    }
    &__image {
      overflow: hidden;
      position: relative;
      object-fit: cover;

      width: 100%;
      height: 100%;
      border-radius: 10px;

      &__hover {
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        transition: 0.5s;
        position: absolute;
        top: 0;
        left: 0;
        background: var(--color-primary-low);
        opacity: 0;
        border-radius: 10px;
        opacity: 1;
        .layout {
          .heading {
            h2 {
              text-align: center;
              margin-bottom: 20px;
              font-size: 23px;
              color: var(--background-white);
              font-family: var(--font-semibold);
            }
          }
        }
      }
      &__hover:hover {
        opacity: 1;

        transition: 0.5s;
      }
    }
  }
}
@media (max-width: 1300px) {
  .masonry-card {
    display: inline-flex;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid-column;
    width: 100%;
    // height: 295px;
    justify-content: space-between;

    .card.long {
      position: relative;
      border-radius: 10px;
      height: 615px;
      width: 100%;
      background: var(--background-white);
    }
    .card {
      &__layout {
      }
      &__image {
        &__hover {
        }
        &__hover:hover {
        }
      }
    }
  }
}
</style>
