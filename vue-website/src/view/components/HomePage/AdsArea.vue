<template>
  <div :class="`ads__area ${ApplicationLanguage == 'ar' ? 'rtl' : ''}  `">
    <div class="wrapper">
      <div class="ads__area__layout">
        <div class="info">
          <div class="info__section">
            <span v-scrollanimation>
              {{ AdsAreaData.FirstKey }}
              <span class="key-bg">{{ AdsAreaData.BgKey }}</span
              >{{ AdsAreaData.SecondKey }}
            </span>
          </div>
          <div class="info__section">
            <div v-scrollanimation class="info__section__item">
              <SearchSelect
                :ApplicationLanguage="ApplicationLanguage"
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
            <div v-scrollanimation class="info__section__item">
              <router-link to="/category">
                <Button
                  :ApplicationLanguage="ApplicationLanguage"
                  v-scrollanimation
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
              </router-link>
            </div>
          </div>
        </div>

        <div v-scrollanimation class="image">
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
  props: { AdsAreaData: Object, ApplicationLanguage: String },
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
  .image.before-enter {
    transform: opacity(0);
    opacity: 0;
  }
  .image.enter {
    transform: opacity(0);

    opacity: 1;
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

.ads__area.rtl {
  .ads__area__layout {
    flex-direction: row-reverse;
  }
  .image {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
  .image.before-enter {
  }
  .image.enter {
  }
  .info {
    text-align: right;
    &__section {
      flex-direction: row-reverse;
      &__item {
        margin: 0 10px;

        /deep/.selector {
          z-index: 999;
          left: 0;
        }
      }
      span {
        span.key-bg {
        }
      }
    }
  }
}
@media (max-width: 700px) {
  .ads__area {
    &__layout {
      justify-content: center;
    }
    .image {
      display: none;
    }
    .image.before-enter {
    }
    .image.enter {
    }
    .info {
      width: 90%;
      &__section {
        span {
          span.key-bg {
          }
        }
      }
    }
  }
}
</style>
