<template>
  <div :class="`footers ${ApplicationLanguage == 'ar' ? 'rtl' : ''}  `">
    <div
      v-if="type == 'logo'"
      :class="`footer-item ${ApplicationLanguage == 'ar' ? 'rtl' : ''}  `"
    >
      <div class="section">
        <ImageView
          v-scrollanimation
          style="justify-content:flex-start"
          class="footer-item__image"
          width="47px"
          height="85px"
          imageType="svg"
          imageName="logo-2.svg"
        />
      </div>
      <div class="section">
        <span v-scrollanimation class="reserved">
          <b>{{ FooterData.Borsa }}</b> {{ FooterData.All }}
          {{ FooterData.Rights }} {{ FooterData.Reserved }}
        </span>
      </div>
    </div>
    <div v-if="type == 'normal'" class="footer-item">
      <div class="section">
        <ul v-for="(text, index) in texts" :key="index" class="list">
          <li v-scrollanimation class="list__item">
            <router-link to="/about">
              <span>
                {{ text }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="section">
        <Button
          v-scrollanimation
          v-if="button"
          margin="auto"
          padding="0px"
          direction="row"
          background="transparent"
          radius="high"
          color="white"
          type="together"
          iconType="message"
          iconAreaW="auto"
          :text="FooterData.ButtonText"
          iconColor="var(--color-secondary)"
          iconHeight="24px"
          iconWidth="30px"
          fontSize="13px"
          textColor="white"
          family="var(--font-light)"
          width="170px"
          textAlign="start"
          marginLeft="5px"
        />
      </div>
    </div>
    <div v-if="type == 'social'" class="footer-item">
      <div
        class="section"
        style="height: 112px;
        width:90px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
"
      >
        <ul v-for="(text, index) in texts" :key="index" class="list">
          <li class="list__item">
            <Button
              v-scrollanimation
              margin="auto"
              padding="0px"
              direction="row"
              background="transparent"
              radius="high"
              color="white"
              type="together"
              :iconType="text"
              iconAreaW="auto"
              :text="text"
              iconColor="var(--background-white)"
              iconHeight="24px"
              iconWidth="24px"
              fontSize="13px"
              textColor="white"
              family="var(--font-light)"
              width="90px"
              height="22px"
              textAlign="start"
              marginLeft="5px"
              hoverClass="hover-color-secondary"
            />
          </li>
        </ul>
      </div>
      <div class="section">
        <ImageView
          v-scrollanimation
          style="justify-content:flex-start"
          class="footer-item__image"
          width="90px"
          height="auto"
          imageType="svg"
          imageName="gigant-beyaz.svg"
        />
      </div>
    </div>

    <div v-if="type == 'mobile'" class="footer-item">
      <div class="section">
        <ImageView
          v-scrollanimation
          style="justify-content:center"
          class="footer-item__image"
          width="47px"
          height="85px"
          imageType="svg"
          imageName="logo-2.svg"
        />
        <div
          v-scrollanimation
          style="text-align:center; margin:20px 0;"
          class="section"
        >
          <b>{{ FooterData.Borsa }}</b> {{ FooterData.All }}
          {{ FooterData.Rights }} {{ FooterData.Reserved }}
        </div>

        <ul
          style="justify-content:center; text-align:center"
          v-for="(text, index) in texts"
          :key="index"
          class="list"
        >
          <li v-scrollanimation class="list__item">
            <router-link to="/about">
              <span>
                {{ text }}
              </span>
            </router-link>
          </li>
        </ul>

        <ul
          class="list"
          style="display:flex; flex-direction:row; justify-content:space-evenly; margin:20px 0;"
        >
          <li
            v-scrollanimation
            v-for="(text, index) in social"
            :key="index"
            class="list__item"
          >
            <Button
              margin="auto"
              padding="0px"
              direction="row"
              background="transparent"
              radius="high"
              color="white"
              type="icon"
              :iconType="text"
              iconAreaW="auto"
              :text="text"
              iconColor="var(--background-white)"
              iconHeight="24px"
              iconWidth="24px"
              fontSize="13px"
              textColor="white"
              family="var(--font-light)"
              width="100%"
              height="25px"
              textAlign="start"
              marginLeft="5px"
            />
          </li>
        </ul>

        <ImageView
          v-scrollanimation
          style="justify-content:center"
          class="footer-item__image"
          imageType="svg"
          width="90px"
          height="auto"
          imageName="gigant-beyaz.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import ImageView from "../ImageView.vue";
export default {
  name: "FooterItem",
  components: { Button, ImageView },
  props: {
    ApplicationLanguage: String,
    texts: {
      type: Array,
    },
    social: {
      type: Array,
    },
    type: {
      type: String,
      default: "normal",
    },
    button: {
      type: Boolean,
      default: false,
    },
    FooterData: Object,
  },
};
</script>

<style lang="scss" scoped>
.footers {
  height: 100%;
  .footer-item {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    width: 170px;
    height: 100%;

    &__image {
      width: 100%;
    }
    .section {
      width: 100%;
      .reserved {
        cursor: default;
      }
      //   height: 100%;

      color: var(--background-white);
      b {
        font-family: var(--font-bold);
      }
      width: 100%;
      .list {
        display: flex;
        flex-direction: column;
        list-style: none;
        color: var(--background-white);
        &__item {
          transition: 0.7s;

          margin: 3px 0;
          font-size: 14px;
          font-family: var(--font-light);
          cursor: pointer;
          text-decoration: none;
          color: var(--background-white);
          a {
            text-decoration: none;

            span {
              text-decoration: none;
              color: var(--background-white);
            }
          }
        }
        &__item:hover {
          transition: 0.7s;

          color: var(--color-secondary);

          span {
            transition: 0.7s;

            color: var(--color-secondary);

            text-decoration: none;
          }
        }
      }
    }
  }
}

.footers.rtl {
  .footer-item {
    align-items: flex-end;
    &__image {
      justify-content: flex-end !important;
    }
    .section {
      text-align: right;
      .reserved {
        text-align: right;
      }

      b {
        text-align: right;
      }
      .list {
        &__item {
          text-align: right;
          a {
            text-align: right;

            span {
              text-align: right;
            }
          }
        }
        &__item:hover {
          span {
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .footers {
    .footer-item {
      &__image {
      }
      .section {
        b {
        }
        .list {
          &__item {
            margin: 5px 0;
          }
        }
      }
    }
  }
}
</style>
