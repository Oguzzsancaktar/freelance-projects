<template>
  <div class="ProfileMessages">
    <div class="layout">
      <ul class="list">
        <li v-for="(item, index) in messages" :key="index" class="item">
          <Accordion :messages="item" :index="index" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Accordion from "../Accordion.vue";
export default {
  components: { Accordion },
  props: {
    messages: Array,
  },
};
</script>

<style lang="scss" scoped>
.ProfileMessages {
  .layout {
    width: 100%;
    .list {
      list-style: none;
      width: 100%;

      .item {
        width: 100%;
      }
    }
  }
}
</style>
