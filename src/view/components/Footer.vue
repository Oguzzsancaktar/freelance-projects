<template>
  <div class="footer">
    <div class="wrapper">
      <div class="footer__layout">
        <FooterItem type="logo" :texts="firstTexts" />

        <FooterItem :button="true" :texts="firstTexts" />
        <FooterItem :texts="secondTexts" />
        <FooterItem :texts="firstTexts" />
        <FooterItem :texts="firstTexts" />
        <FooterItem type="social" :texts="socialTexts" />
      </div>
    </div>
  </div>
</template>

<script>
import FooterItem from "./FooterItem.vue";
export default {
  components: { FooterItem },
  name: "Footer",
  data: function() {
    return {
      firstTexts: [
        "Yasal Uyarı",
        "Kullanım Koşulları",
        "Aydınlatma Metni",
        "Çerez Politikası",
        "İlan Yayınlanma Kuralları",
      ],
      secondTexts: [
        "Yasal Uyarı",
        "Kullanım Koşulları",
        "Aydınlatma Metni",
        "Çerez Politikası",
      ],
      socialTexts: ["Twitter", "Facebook", "Instagram"],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 285px;
  background: var(--color-primary);
  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .footer__layout {
      width: 100%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }
}
</style>
