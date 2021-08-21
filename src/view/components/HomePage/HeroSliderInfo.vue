<template>
  <div class="hero__slider__info">
    <p class="text-color-primary">{{ title }}</p>
    <h2 class="text-color-general">
      {{ beforeText }}
      <span class="text-color-primary">{{ primaryText }}</span> {{ afterText }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "HeroSliderInfo",
  props: {
    title: {
      type: String,
      default: "Default Info Title !",
    },
    beforeText: {
      type: String,
      default: "Default Info Before Text!",
    },
    primaryText: {
      type: String,
      default: "Default Info Primary Text !",
    },
    afterText: {
      type: String,
      default: "Default Info After Text!",
    },
  },
};
</script>

<style lang="scss" scoped>
.hero__slider__info {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  height: 200px;
  top: 0%;
  overflow: hidden;

  h2 {
    font-family: var(--font-bold);
    font-size: 45px;
    transform: translateY(200px);
    transition: 1.7s;
    span {
      font-family: var(--font-bold);
      font-size: 45px;
    }
  }
  p {
    margin-bottom: 20px;
    font-family: var(--font-semibold);
    font-size: 20px;
    transform: translateY(-200px);
    transition: 1.7s;
  }
}
.hero__slider__info.active {
  h2 {
    transform: translateY(0px);
    transition: 1.7s;
  }
  p {
    transform: translateY(0px);
    transition: 1.7s;
  }
}
</style>
