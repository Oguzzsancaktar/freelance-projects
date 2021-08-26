<template>
  <div class="ProfilePage">
    <div class="subpage-content">
      <div class="wrapper">
        <div class="layout">
          <div class="section">
            <LeftNav
              :profileNavList="Data.ProfilePage.LeftNavData"
              :section="section"
              @update-section="update"
            />
          </div>

          <div class="section">
            <transition name="fade">
              <div class="section__item" v-if="section == 'profile'">
                <MyProfile />
              </div>
            </transition>

            <transition name="fade">
              <div class="section__item" v-if="section == 'adverts'">
                <CategoryGallery />
              </div>
            </transition>

            <transition name="fade">
              <div class="section__item" v-if="section == 'favs'">
                <CategoryGallery />
              </div>
            </transition>

            <transition name="fade">
              <div class="section__item" v-if="section == 'messages'">
                <ProfileMessages :messages="messages" />
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
  },
  data: function() {
    return {
      section: "profile",
      profileNavList: [
        { text: "Profilim", keyword: "profile", iconType: "profile" },
        { text: "İlanlarım", keyword: "adverts", iconType: "list" },
        { text: "Favori İlanlarım", keyword: "favs", iconType: "favorites" },
        { text: "Mesajlarım", keyword: "messages", iconType: "envelope" },
      ],
      messages: [
        {
          from: "Kemal TUNCER",
          date: "02.03.2021",
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ut
          incidunt, iure fugiat cum accusantium repellendus officia dolorem ipsa
          corporis dolores laborum! Unde soluta, repellendus minus a distinctio,
          nulla iure alias natus ab quam enim?`,
        },

        {
          from: "Kemal TUNCER",
          date: "02.03.2021",
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ut
          incidunt, iure fugiat cum accusantium repellendus officia dolorem ipsa
          corporis dolores laborum! Unde soluta, repellendus minus a distinctio,
          nulla iure alias natus ab quam enim?`,
        },

        {
          from: "Kemal TUNCER",
          date: "02.03.2021",
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ut
          incidunt, iure fugiat cum accusantium repellendus officia dolorem ipsa
          corporis dolores laborum! Unde soluta, repellendus minus a distinctio,
          nulla iure alias natus ab quam enim?`,
        },

        {
          from: "Kemal TUNCER",
          date: "02.03.2021",
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ut
          incidunt, iure fugiat cum accusantium repellendus officia dolorem ipsa
          corporis dolores laborum! Unde soluta, repellendus minus a distinctio,
          nulla iure alias natus ab quam enim?`,
        },
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
