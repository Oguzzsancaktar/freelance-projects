<template>
  <div v-if="counter != 0" class="CounterCircle">
    <span class="count">
      {{ counter }}
    </span>
  </div>
</template>

<script>
export default {
  name: "CounterCircle",
  props: {
    counter: Number,
  },
};
</script>

<style lang="scss" scoped>
.CounterCircle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid var(--color-secondary);
  background: var(--color-secondary);
  color: var(--background-white);
  span.count {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--background-white);
  }
}
</style>
