<template>
  <div class="slider__buttons">
    <div
      data-slider-counter="0"
      @click="goToSlide"
      class="slider__buttons__button"
    >
      01
    </div>
    <span class="slider__buttons__line"></span>
    <div
      data-slider-counter="1"
      @click="goToSlide"
      class="slider__buttons__button"
    >
      02
    </div>
    <span class="slider__buttons__line"></span>

    <div
      data-slider-counter="2"
      @click="goToSlide"
      class="slider__buttons__button"
    >
      03
    </div>
    <span class="slider__buttons__line"></span>

    <div
      data-slider-counter="3"
      @click="goToSlide"
      class="slider__buttons__button"
    >
      04
    </div>
    <span class="slider__buttons__line"></span>

    <div
      data-slider-counter="4"
      @click="goToSlide"
      class="slider__buttons__button"
    >
      05
    </div>
    <span class="slider__buttons__line"></span>
  </div>
</template>

<script>
export default {
  name: "SliderButtons",
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

  &__button {
    cursor: pointer;
    font-family: var(--font-medium);
    font-size: 15px;
    margin: 0 10px;
  }
  &__button:first-child {
    margin-left: 0;
  }
  &__button:last-child {
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
</style>
