<template>
  <div class="ProfileNav">
    <div class="layout">
      <ul class="list">
        <li
          v-for="(item, index) in profileNavList"
          class="item"
          :key="index"
          :class="{ active: index == selected }"
          @click="selected = index"
        >
          <button @click="changeSection(item.keyword)">
            <Button
              margin="auto"
              padding="0px"
              direction="row"
              background="transparent"
              radius="high"
              color="white"
              type="together"
              :iconType="item.iconType"
              iconAreaW="auto"
              :text="item.text"
              iconColor="var(--color-primary)"
              iconHeight="20px"
              iconWidth="20px"
              fontSize="13px"
              textColor="var(--color-primary)"
              family="var(--font-light)"
              width="100%"
              textAlign="start"
              marginLeft="5px"
            />

            <div class="counter-circle">
              <CounterCircle :counter="1" />
            </div>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import CounterCircle from "./CounterCircle.vue";
export default {
  components: { Button, CounterCircle },
  name: "ProfileNav",
  props: {
    section: {
      type: String,
      default: "profile",
    },
    profileNavList: Array,
  },
  data: function() {
    return {
      selected: 0,
    };
  },

  methods: {
    changeSection(keyword) {
      let activeSection = this.section;
      activeSection = keyword;

      this.$emit("update-section", activeSection);
    },
  },
};
</script>

<style lang="scss" scoped>
.ProfileNav {
  // overflow: hidden;

  width: 100%;
  height: auto;
  background: var(--background-white);
  border-radius: 10px;
  .layout {
    width: 100%;
    .list {
      width: 100%;

      list-style: none;
      .item {
        padding: 0 20px;
        width: 100%;
        border-bottom: 1px solid var(--background-general);
        border-left: 1px solid transparent;

        button {
          width: 100%;
          border: none;
          background: transparent;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          .counter-circle {
            width: 25px;
          }
        }
      }
      .item.active {
        border-left: 1px solid var(--color-primary);
      }
    }
  }
}
</style>
