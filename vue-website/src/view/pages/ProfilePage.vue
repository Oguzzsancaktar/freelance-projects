<template>
  <div :class="`ProfilePage ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="subpage-content">
      <div class="wrapper">
        <div class="layout">
          <div v-scrollanimation class="section">
            <LeftNav
              :ApplicationLanguage="ApplicationLanguage"
              :profileNavList="Data.ProfilePage.LeftNavData"
              :section="section"
              @update-section="update"
            />
          </div>

          <div v-scrollanimation class="section">
            <transition name="fade">
              <div class="section__item" v-if="section == 'profile'">
                <MyProfile
                  :ApplicationLanguage="ApplicationLanguage"
                  :MyProfileData="Data.ProfilePage.MyProfileData"
                />
              </div>
            </transition>

            <transition name="fade">
              <div class="section__item" v-if="section == 'adverts'">
                <CategoryGallery
                  :ApplicationLanguage="ApplicationLanguage"
                  :Heading="Data.ProfilePage.CategoryGalleryData.Heading2"
                  :CategoryGalleryData="Data.ProfilePage.CategoryGalleryData"
                />
              </div>
            </transition>

            <transition name="fade">
              <div class="section__item" v-if="section == 'favs'">
                <CategoryGallery
                  :ApplicationLanguage="ApplicationLanguage"
                  :Heading="Data.ProfilePage.CategoryGalleryData.Heading1"
                  :CategoryGalleryData="Data.ProfilePage.CategoryGalleryData"
                />
              </div>
            </transition>

            <transition name="fade">
              <div class="section__item" v-if="section == 'messages'">
                <ProfileMessages
                  :ApplicationLanguage="ApplicationLanguage"
                  :MyProfileData="Data.ProfilePage.MyProfileData"
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
import CategoryGallery from "../components/CategoryPage/CategoryGallery.vue";
import MyProfile from "../components/ProfilePage/MyProfile.vue";
import ProfileMessages from "../components/ProfilePage/ProfileMessages.vue";
import LeftNav from "../components/LeftNav.vue";
export default {
  name: "ProfilePage",
  components: {
    CategoryGallery,
    LeftNav,
    ProfileMessages,
    MyProfile,
  },
  props: {
    Data: Object,
    ApplicationLanguage: String,
  },
  data: function() {
    return {
      section: "profile",
    };
  },

  methods: {
    update(section) {
      this.section = section;
    },
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>

<style lang="scss" scoped>
.ProfilePage {
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
      padding-bottom: 50px;
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

.ProfilePage.rtl {
  .subpage-content {
    .wrapper {
      .layout {
        flex-direction: row-reverse;
        .section {
          &__item {
          }
        }

        .section:first-child {
          margin-left: 25px;
          margin-right: 0;
        }
        .section:last-child {
        }
      }
    }
  }
}

@media (max-width: 700px) {
  .ProfilePage {
    .subpage-content {
      .wrapper {
        .layout {
          flex-direction: column;
          .section {
            &__item {
            }
          }

          .section:first-child {
            margin-top: 60px;
            width: 100%;
          }
          .section:last-child {
            margin-top: 0px;

            width: 100%;
          }
        }
      }
    }
  }

  .ProfilePage.rtl {
    .subpage-content {
      .wrapper {
        .layout {
          flex-direction: column;
          .section {
            &__item {
            }
          }

          .section:first-child {
            margin-left: 0px;
            margin-right: 0px;
          }
          .section:last-child {
          }
        }
      }
    }
  }
}
</style>
