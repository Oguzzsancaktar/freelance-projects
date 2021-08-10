<template>
  <div class="masonry-card">
    <div v-if="type == 'short'" class="card">
      <div class="card__layout">
        <div class="card__image">
          <div class="card__image__hover">
            <Button
              style="margin:5px"
              background="transparent"
              radius="0px"
              type="icon"
              iconType="details"
              width="55px"
              height="55px"
              iconColor="var(--background-white)"
              border="1px solid transparent"
              margin="0 10px"
              iconWidth="55px"
              iconHeight="55px"
              padding="0px"
            />
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
          <div class="card__image__hover">
            <Button
              style="margin:5px"
              background="transparent"
              radius="0px"
              type="icon"
              iconType="details"
              width="55px"
              height="55px"
              iconColor="var(--background-white)"
              border="1px solid transparent"
              margin="0 10px"
              iconWidth="55px"
              iconHeight="55px"
              padding="0px"
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
