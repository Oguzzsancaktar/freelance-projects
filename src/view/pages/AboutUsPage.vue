<template>
  <div class="AboutUsPage">
    <div class="subpage-content">
      <div class="wrapper">
        <div class="layout">
          <div class="section">
            <LeftNav
              :profileNavList="Data.AboutUsPage.LeftNavData"
              :section="section"
              @update-section="update"
            />
          </div>

          <div class="section">
            <transition name="fade">
              <div class="section__item" v-if="section == 'about'">
                <TextContent
                  :paragraphs="Data.AboutUsPage.AboutUsData.Paragraphs"
                  :heading="Data.AboutUsPage.AboutUsData.Heading"
                />
              </div>
            </transition>

            <transition name="fade">
              <div class="section__item" v-if="section == 'member'">
                <TextContent
                  :paragraphs="Data.AboutUsPage.MembershipData.Paragraphs"
                  :heading="Data.AboutUsPage.MembershipData.Heading"
                />
              </div>
            </transition>

            <transition name="fade">
              <div class="section__item" v-if="section == 'warn'">
                <TextContent
                  :paragraphs="Data.AboutUsPage.LegalWarnData.Paragraphs"
                  :heading="Data.AboutUsPage.LegalWarnData.Heading"
                />
              </div>
            </transition>

            <transition name="fade">
              <div class="section__item" v-if="section == 'rules'">
                <TextContent
                  :paragraphs="Data.AboutUsPage.RulesData.Paragraphs"
                  :heading="Data.AboutUsPage.RulesData.Heading"
                />
              </div>
            </transition>

            <transition name="fade">
              <div class="section__item" v-if="section == 'light'">
                <TextContent
                  :paragraphs="Data.AboutUsPage.LightnessData.Paragraphs"
                  :heading="Data.AboutUsPage.LightnessData.Heading"
                />
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextContent from "../components/AboutUsPage/TextContent.vue";
import LeftNav from "../components/LeftNav.vue";
export default {
  name: "AboutUsPage",
  components: {
    LeftNav,
    TextContent,
  },

  props: {
    Data: Object,
  },
  data: function() {
    return {
      section: "about",
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    update(section) {
      this.section = section;
    },
  },
};
</script>

<style lang="scss" scoped>
.AboutUsPage {
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
      padding: 30px 0;
      .layout {
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        .section {
          display: flex;
          flex-direction: column;
          position: relative;

          margin-top: 20px;
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

@media (max-width: 700px) {
  .AboutUsPage {
    .fade-enter {
    }

    .fade-enter-active {
    }

    .subpage-content {
      .wrapper {
        .layout {
          flex-direction: column;
          .section {
            width: 100%;

            &__item {
            }
          }

          .section:first-child {
            width: 100%;
          }
          .section:last-child {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
