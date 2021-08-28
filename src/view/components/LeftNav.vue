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
          <button @click="changeSection(item.Keyword)">
            <Button
              margin="auto"
              padding="0px"
              direction="row"
              background="transparent"
              radius="high"
              color="white"
              type="together"
              :iconType="item.IconType"
              iconAreaW="auto"
              :text="item.Text"
              iconColor="var(--color-text-general)"
              iconHeight="20px"
              iconWidth="20px"
              fontSize="13px"
              textColor="var(--color-text-general)"
              family="var(--font-light)"
              width="100%"
              textAlign="start"
              marginLeft="5px"
              textMargin=" 0 0 0 7px!important"
            />

            <div class="counter-circle">
              <CounterCircle :counter="item.Counter" />
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
  cursor: pointer;

  width: 100%;
  height: auto;
  background: var(--background-white);
  border-radius: 10px;
  .layout {
    cursor: pointer;
    width: 100%;
    .list {
      width: 100%;
      cursor: pointer;

      list-style: none;
      .item {
        cursor: pointer;
        transition: 0.4s;

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
          cursor: pointer;

          .counter-circle {
            width: 25px;
          }
        }
      }
      .item.active {
        border-left: 1px solid var(--color-primary);
        /deep/ g {
          fill: var(--color-primary);
          transition: 0.4s;
        }

        /deep/ .together-text {
          transition: 0.4s;
          color: var(--color-primary) !important;
        }
      }
    }
  }
}
</style>
