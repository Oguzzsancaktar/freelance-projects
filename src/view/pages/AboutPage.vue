<template>
  <div class="AboutPage">
    <div class="subpage-content">
      <div class="wrapper">
        <div class="layout">
          <div class="section">
            <LeftNav
              :profileNavList="aboutNavList"
              :section="section"
              @update-section="update"
            />
          </div>

          <div class="section">
            <transition name="fade">
              <div class="section__item" v-if="section == 'profile'">
                asdf
              </div>
            </transition>

            <transition name="fade">
              <div class="section__item" v-if="section == 'adverts'">
                asdf
              </div>
            </transition>

            <transition name="fade">
              <div class="section__item" v-if="section == 'favs'">
                adsf
              </div>
            </transition>

            <transition name="fade">
              <div class="section__item" v-if="section == 'messages'">
                asdf
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from "../components/LeftNav.vue";
export default {
  name: "AboutPage",
  components: {
    LeftNav,
  },
  data: function() {
    return {
      section: "profile",
      aboutNavList: [
        { text: "Hakkımızda", keyword: "profile", iconType: "profile" },
        { text: "Üyelik Sözleşmesi", keyword: "adverts", iconType: "list" },
        { text: "Yasal Uyarı", keyword: "favs", iconType: "favorites" },
        {
          text: "Kullanım Koşulları",
          keyword: "messages",
          iconType: "envelope",
        },
        { text: "Aydınlatma Metni", keyword: "messages", iconType: "envelope" },
        { text: "Bize Ulaşın", keyword: "messages", iconType: "envelope" },
      ],
    };
  },

  methods: {
    update(section) {
      this.section = section;
    },
  },
};
</script>

<style lang="scss" scoped>
.AboutPage {
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: 1s;
  }

  .subpage-content {
    display: block;
    position: relative;
    height: auto;
    .wrapper {
      .layout {
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        .section {
          display: flex;
          flex-direction: column;
          position: relative;

          margin-top: 60px;
          &__item {
          }
        }

        .section:first-child {
          width: 275px;
          margin-right: 25px;
          margin-bottom: 25px;
        }
        .section:last-child {
          width: calc(100% - 275px);
        }
      }
    }
  }
}
</style>
