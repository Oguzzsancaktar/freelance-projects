<template>
  <div class="TopBar">
    <div class="wrapper">
      <div class="layout">
        <div @click="changeSection(0)" class="item">
          <Button
            family="var(--font-bold) "
            color="dark"
            textColor="var(--color-general-dark)"
            :text="TopBarData.AdvertInfo"
            type="together"
            iconType="editt"
            iconColor="var(--color-primary)"
            radius="30px"
            width="210px"
            padding="0 0px"
            iconWidth="18px"
            iconHeight="18px"
            fontSize="14px"
            iconAreaW="auto"
            :activeSection="selected"
            height="60px"
            textTransfrom="uppercase"
          />
        </div>
        <div @click="changeSection(1)" class="item">
          <Button
            family="var(--font-bold)"
            color="dark"
            textColor="var(--color-general-dark)"
            :text="TopBarData.Preview"
            type="together"
            iconType="preview"
            iconColor="var(--color-primary)"
            radius="30px"
            width="170px"
            padding="0 20px"
            iconWidth="24px"
            iconHeight="20px"
            fontSize="15px"
            iconAreaW="auto"
            height="60px"
            :activeSection="selected"
            textTransfrom="uppercase"
          />
        </div>

        <div @click="changeSection(2)" class="item">
          <Button
            family="var(--font-bold)"
            color="dark"
            textColor="var(--color-general-dark)"
            :text="TopBarData.Boost"
            type="together"
            iconType="boost"
            iconColor="var(--color-secondary)"
            radius="30px"
            width="180px"
            padding="0 10px"
            iconWidth="20px"
            iconHeight="20px"
            fontSize="15px"
            height="60px"
            iconAreaW="auto"
            justify="center"
            textAlign="start"
            :activeSection="selected"
            textTransfrom="uppercase"
          />
        </div>

        <div class="item progress">
          <ProgressBar :data="TopBarData.Entered" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import ProgressBar from "./ProgressBar.vue";
export default {
  name: "TopBar",
  components: { Button, ProgressBar },
  props: {
    section: {
      type: Number,
      default: 0,
    },
    TopBarData: Object,
  },
  data: function() {
    return {
      selected: 0,
    };
  },
  methods: {
    changeSection(num) {
      let activeSection = this.section;
      activeSection = num;

      this.selected = activeSection;

      this.$emit("update-section", activeSection);
    },
  },
};
</script>

<style lang="scss" scoped>
.TopBar {
  margin: 30px 0;

  height: 95px;
  .wrapper {
    height: 100%;
    .layout {
      border-radius: 10px;
      padding: 20px 40px;
      background: var(--background-white);

      width: 100%;
      height: 100%;

      align-items: center;
      display: flex;
      .item {
        align-items: center;
        display: flex;
        justify-content: center;
        height: 100%;
        background: var(--background-white);
        width: 100%;
        border-right: 1px solid var(--background-general);

        /deep/.button-together {
          cursor: pointer;

          span:first-child {
            width: 35px !important;
          }
          span:last-child {
            width: calc(100% - 35px) !important;
          }
        }
      }
      .item.progress {
        padding: 0 25px;
        border-right: none;
      }
    }
  }
}

@media (max-width: 900px) {
  .TopBar {
    height: auto;
    .wrapper {
      height: 100%;
      .layout {
        height: 100%;

        flex-wrap: wrap;

        .item {
          justify-content: flex-start;
          border-right: transparent;
          /deep/ button {
            width: 100% !important;
            padding: 0 !important;

            .together-text {
              justify-content: start !important;
              text-align: start !important;
              margin: 0 0 0 20px !important;
            }
          }
        }
        .item.progress {
          min-width: 180px;
          padding: 0;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .TopBar {
    height: auto;
    .wrapper {
      height: 100%;
      .layout {
        padding: 30px 25px;

        .item {
          /deep/ button {
            .together-text {
            }
          }
        }
        .item.progress {
          min-width: 180px;
          padding: 0;
        }
      }
    }
  }
}
</style>
