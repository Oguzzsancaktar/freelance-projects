<template>
  <div class="ProfileMessages">
    <div class="layout">
      <section>
        <div class="heading">
          <h3 v-scrollanimation>
            {{ MyProfileData.Messages }}
          </h3>
        </div>
      </section>

      <ul class="list">
        <li
          v-scrollanimation
          v-for="(item, index) in MyProfileData.messages"
          :key="index"
          class="item"
        >
          <Accordion v-scrollanimation :messages="item" :index="index" />
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
    MyProfileData: Object,
  },
};
</script>

<style lang="scss" scoped>
.ProfileMessages {
  .layout {
    border-radius: 10px;
    background: var(--background-white);
    height: 100%;
    border-radius: 10px;
    width: 100%;

    border-radius: 10px;
    width: 100%;

    section {
      width: 100%;

      .heading {
        width: 100%;
        h3 {
          text-transform: uppercase;
          padding: 20px 45px;
          display: flex;
          align-items: center;
          height: 100%;
          border-bottom: 2px solid var(--background-general);
          padding-bottom: 20px;
          width: 100%;
        }
      }
    }
    .list {
      padding: 50px 45px;

      list-style: none;
      width: 100%;

      .item {
        margin: 20px 0;
        width: 100%;
      }
    }
  }
}
</style>
