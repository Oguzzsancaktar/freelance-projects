<template>
  <div class="footer">
    <div class="wrapper">
      <div class="footer__layout">
        <FooterItem
          v-scrollanimation
          v-for="(item, index) in FooterData.FooterItems"
          :data-footer-item="index"
          :key="index"
          :type="item.Type"
          :texts="item.Texts"
          :button="item.Button"
          :FooterData="FooterData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FooterItem from "./FooterItem.vue";
export default {
  components: { FooterItem },
  name: "Footer",
  props: {
    FooterData: Object,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 285px;
  background: var(--color-primary);
  .wrapper {
    // width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .footer__layout {
      width: 100%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      [data-footer-item="6"] {
        display: none;
      }
    }
  }
}

@media (max-width: 1100px) {
  .footer {
    .wrapper {
      .footer__layout {
        [data-footer-item="2"] {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 950px) {
  .footer {
    .wrapper {
      .footer__layout {
        [data-footer-item="2"] {
          display: none;
        }
        [data-footer-item="3"] {
          display: none;
        }
        [data-footer-item="4"] {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .footer {
    height: auto;
    padding: 40px 0;

    .wrapper {
      .footer__layout {
        justify-content: center;
        [data-footer-item="0"] {
          display: none;
        }
        [data-footer-item="1"] {
          display: none;
        }
        [data-footer-item="5"] {
          display: none;
        }
        [data-footer-item="6"] {
          display: flex;
        }
      }
    }
  }
}
</style>
