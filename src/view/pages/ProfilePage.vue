<template>
  <div class="ProfilePage">
    <div class="subpage-content">
      <div class="wrapper">
        <div class="layout">
          <div class="section">
            <ProfileNav
              :profileNavList="profileNavList"
              :section="section"
              @update-section="update"
            />
          </div>

          <div class="section">
            <transition name="fade">
              <div class="section__item" v-if="section == 'profile'">
                profile
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
import ProfileMessages from "../components/profile/ProfileMessages.vue";
import ProfileNav from "../components/profile/ProfileNav.vue";
export default {
  name: "ProfilePage",
  components: {
    CategoryGallery,
    ProfileNav,
    ProfileMessages,
  },
  data: function() {
    return {
      section: "profile",
      profileNavList: [
        { text: "Profilim", keyword: "profile" },
        { text: "İlanlarım", keyword: "adverts" },
        { text: "Favori İlanlarım", keyword: "favs" },
        { text: "Mesajlarım", keyword: "messages" },
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
  // .fade-enter,
  // .fade-enter-active {
  //   transition: opacity 0.5s ease-in-out 1s;
  // }
  // .fade-leave-active {
  //   transition: opacity 0.5s;
  // }

  // .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  //   opacity: 0;
  // }

  // .fade-enter,
  // .fade-enter-active {
  //   animation-delay: 1s !important;
  // }

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
          width: 100%;
          flex-direction: column;
          position: relative;

          &__item {
          }
        }

        .section:first-child {
          width: 275px;
          margin-right: 25px;
          margin-bottom: 25px;
        }
      }
    }
  }
}
</style>
