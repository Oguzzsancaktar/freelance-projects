<template>
  <div :class="`TopInfo ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="layout">
      <div class="section">
        <span>
          {{ TopInfoData.Before }} <b>{{ TopInfoData.Count }} </b>
          {{ TopInfoData.After }}
        </span>
      </div>
      <div class="section">
        <Button
          :ApplicationLanguage="ApplicationLanguage"
          background="transparent"
          :text="TopInfoData.ButtonText"
          radius="high"
          color="dark"
          textColor="var(--color-text-gray)"
          family="var(--font-medium)"
          fontSize="17px"
          type="together"
          iconType="transfer"
          width="100%"
          iconWidth="22px"
          iconHeight="22px"
          iconColor="var(--color-primary)"
          height="auto"
          textAlign="left"
          iconAreaW="auto"
          justify="start"
          textMargin="0 0 0 3px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  components: { Button },
  name: "TopInfo",
  props: {
    ApplicationLanguage: String,

    TopInfoData: Object,
  },
};
</script>

<style lang="scss" scoped>
.TopInfo {
  padding: 30px 0;
  width: 100%;
  .layout {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-white);
    border-radius: 10px;

    height: 65px;
    .section {
      padding: 0px 15px;
      height: 100%;
      display: flex;
      align-items: center;

      span {
        font-size: 15px;
        font-family: var(--font-semilight);
        color: var(--color-text-gray);

        b {
          font-family: var(--font-semibold);
          color: var(--color-primary);
        }
      }
    }
  }
}

.TopInfo.rtl {
  .layout {
    flex-direction: row-reverse;
    .section {
      span {
        b {
        }
      }
    }
  }
}
</style>
