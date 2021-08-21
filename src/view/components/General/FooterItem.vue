<template>
  <div class="footers">
    <div v-if="type == 'logo'" class="footer-item">
      <div class="section">
        <ImageView
          style="justify-content:flex-start"
          class="footer-item__image"
          width="47px"
          height="85px"
          imageType="svg"
          imageName="logo-2.svg"
        />
      </div>
      <div class="section">Tüm hakları <b>Borsa</b> da saklıdır.</div>
    </div>
    <div v-if="type == 'normal'" class="footer-item">
      <div class="section">
        <ul v-for="(text, index) in texts" :key="index" class="list">
          <li class="list__item">{{ text }}</li>
        </ul>
      </div>
      <div class="section">
        <Button
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
          text="Bizim ile görüşlerinizi paylaşabilirsiniz!"
          iconColor="var(--color-secondary)"
          iconHeight="24px"
          iconWidth="24px"
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
              margin="auto"
              padding="0px"
              direction="row"
              background="transparent"
              radius="high"
              color="white"
              type="together"
              :iconType="text"
              iconAreaW="25px"
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
            />
          </li>
        </ul>
      </div>
      <div class="section">
        <ImageView
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
          style="justify-content:center"
          class="footer-item__image"
          width="47px"
          height="85px"
          imageType="svg"
          imageName="logo-2.svg"
        />
        <div style="text-align:center; margin:20px 0;" class="section">
          Tüm hakları <b>Borsa</b> da saklıdır.
        </div>

        <ul
          style="justify-content:center; text-align:center"
          v-for="(text, index) in texts"
          :key="index"
          class="list"
        >
          <li class="list__item">{{ text }}</li>
        </ul>

        <ul
          class="list"
          style="display:flex; flex-direction:row; justify-content:space-evenly; margin:20px 0;"
        >
          <li v-for="(text, index) in social" :key="index" class="list__item">
            <Button
              margin="auto"
              padding="0px"
              direction="row"
              background="transparent"
              radius="high"
              color="white"
              type="icon"
              :iconType="text"
              iconAreaW="25px"
              :text="text"
              iconColor="var(--background-white)"
              iconHeight="24px"
              iconWidth="24px"
              fontSize="13px"
              textColor="white"
              family="var(--font-light)"
              width="25px"
              height="25px"
              textAlign="start"
              marginLeft="5px"
            />
          </li>
        </ul>

        <ImageView
          style="justify-content:center"
          class="footer-item__image"
          imageType="svg"
          width="90px"
          height="auto"
          imageName="gigant-tech-logo.svg"
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
          margin: 3px 0;
          font-size: 14px;
          font-family: var(--font-light);
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
