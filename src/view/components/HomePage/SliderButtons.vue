<template>
  <div class="slider__buttons">
    <div
      @click="goToSlide"
      v-for="(item, index) in HeroSliderData"
      :key="index"
      class="button"
      :data-slider-counter="index"
    >
      <div class="button__counter" :data-slider-counter="index">
        0{{ index + 1 }}
      </div>
      <span class="button__line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderButtons",
  props: { HeroSliderData: Array },
  methods: {
    goToSlide(event) {
      this.$emit("goToSlide", event);
    },
  },
};
</script>

<style lang="scss" scoped>
.slider__buttons {
  display: flex;
  align-items: center;

  .button {
    display: flex;
    align-items: center;
    &__counter {
      cursor: pointer;
      font-family: var(--font-medium);
      font-size: 15px;
      margin: 0 10px;
    }
    &__counter:first-child {
      margin-left: 0;
    }
    &__counter:last-child {
      margin-right: 0;
    }
    &__line {
      margin: 0 5px;
      width: 0px;
      height: 1px;
      background: var(--color-primary);
      transition: 1.5s;
    }

    &__line.active {
      transition: 1.5s;
      width: 70px;
    }
  }
}
</style>
