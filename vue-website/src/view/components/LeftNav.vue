<template>
  <div :class="`ProfileNav ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="layout">
      <ul class="list">
        <li
          v-scrollanimation
          v-for="(item, index) in profileNavList"
          class="item"
          :key="index"
          :class="{ active: index == selected }"
          @click="selected = index"
        >
          <button @click="changeSection(item.Keyword)">
            <Button
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
              margin="auto"
              padding="0px"
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
              textMargin=" 0 0 0 7px"
            />

            <div v-scrollanimation class="counter-circle">
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
    ApplicationLanguage: String,
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
        border: 1px solid transparent;
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
      .item:hover {
        transition: 0.5s;
        border-right: transparent;
        border-left: 1px solid var(--color-primary);

        /deep/button {
          g {
            transition: 0.4s;
            fill: var(--color-primary) !important;
          }
          .together-text {
            transition: 0.4s;
            color: var(--color-primary) !important;
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

.ProfileNav.rtl {
  .layout {
    .list {
      .item {
        transition: 0.5s;
        border-right: 1px solid transparent;

        justify-content: flex-end;
        display: flex;

        button {
          width: 100%;
          text-align: right;
          align-self: flex-end;
          display: flex;
          flex-direction: row-reverse;

          /deep/button {
            justify-content: flex-start !important;
          }
          .counter-circle {
          }

          /deep/ .default-button {
            justify-content: flex-end;
          }
        }
      }

      .item:hover {
        transition: 0.5s;
        border-left: transparent;
        border-right: 1px solid var(--color-primary);
      }
      .item.active {
        border-left: transparent;
        border-right: 1px solid var(--color-primary);
      }
    }
  }
}
</style>
