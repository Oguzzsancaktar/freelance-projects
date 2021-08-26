<template>
  <div class="ads__area">
    <div class="wrapper">
      <div class="ads__area__layout">
        <div class="info">
          <div class="info__section">
            <span>
              {{ AdsAreaData.FirstKey }}
              <span class="key-bg">{{ AdsAreaData.BgKey }}</span
              >{{ AdsAreaData.SecondKey }}
            </span>
          </div>
          <div class="info__section">
            <div class="info__section__item">
              <SearchSelect
                :list="AdsAreaData.SearchData.List"
                border="1px solid white"
                height="55px"
                width="170px"
                margin="0px"
                padding="0px"
                labelColor="white"
                specialStyle=" width:100%; padding:0 20px; margin-top: 10px;"
              />
            </div>
            <div class="info__section__item">
              <Button
                style="margin-left:20px"
                background="var(--color-secondary)"
                radius="30px"
                type="together"
                iconType="maps"
                width="120px"
                height="55px"
                iconColor="white"
                border="1px solid var(--color-secondary)"
                padding="0 20px"
                margin="0 10px"
                iconWidth="22px"
                iconHeight="27px"
                :text="AdsAreaData.Search"
                fontSize="14px"
                family="var(--font-semibold)"
                textColor="white"
                hoverClass="hover-secondary-dark"
                iconAreaW="auto"
              />
            </div>
          </div>
        </div>

        <div class="image">
          <ImageView
            width="100%"
            height="100%"
            imageType="images"
            imageName="AdsImage.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import SearchSelect from "./SearchSelect.vue";
import ImageView from "../ImageView.vue";

export default {
  components: { SearchSelect, Button, ImageView },
  name: "AdsArea",
  props: { AdsAreaData: Object },
};
</script>

<style lang="scss" scoped>
.ads__area {
  width: 100vw;
  height: 375px;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  &__layout {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
  .image {
    width: 100%;
    height: 100%;
  }
  .info {
    width: 330px;
    height: 220px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    &__section {
      display: flex;
      span {
        font-size: 32px;
        font-family: var(--font-semibold);
        color: var(--background-white);

        span.key-bg {
          color: var(--background-white);
          background: var(--color-third);
        }
      }
    }
  }
}
</style>
