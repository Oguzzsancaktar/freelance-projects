<template>
  <div class="navbar-fullscreen">
    <div class="navbar-fullscreen-layout">
      <div
        @click="closeNavbar"
        v-for="(item, index) in FullScreenNavbarData.NavLinks"
        :key="index"
        class="navbar-fullscreen-item"
      >
        <router-link :to="item.href">
          <Navlink
            :href="item.href"
            textColor="white"
            fontSize="20px"
            :text="item.text"
            hoverClass="hover-primary"
          />
        </router-link>
      </div>

      <div class="navbar-fullscreen-item button">
        <router-link to="/add">
          <a @click="closeNavbar">
            <Button
              :ApplicationLanguage="ApplicationLanguage"
              family="var(--font-medium)"
              textColor="white"
              iconWidth="17px"
              iconHeight="17px"
              iconColor="white"
              background="var(--color-primary)"
              :text="FullScreenNavbarData.AddProperty"
              radius="30px"
              color="white"
              type="together"
              iconType="plus"
              width="220px"
              fontSize="20px"
              iconAreaW="auto"
              hoverClass="hover-primary"
              justify="center"
              textMargin="0"
              padding="0 35px"
            />
          </a>
        </router-link>
      </div>

      <div class="navbar-fullscreen-item button">
        <button @click="closeNavbar" v-on:click="this.showSignin">
          <Button
            :ApplicationLanguage="ApplicationLanguage"
            family="var(--font-medium)"
            color="dark"
            textColor="var(--color-general-dark)"
            :text="FullScreenNavbarData.LoginSignup"
            type="together"
            iconType="login"
            iconColor="var(--color-primary)"
            background="var(--background-gray-light)"
            radius="30px"
            width="220px"
            padding="0 28px"
            iconWidth="22px"
            iconHeight="21px"
            fontSize="20px"
            iconAreaW="auto"
            hoverClass="hover-secondary"
            justify="center"
          />
        </button>
      </div>

      <div class="navbar-fullscreen-item button">
        <div @click="toggleLangControl" class="language-control">
          <Button
            :ApplicationLanguage="ApplicationLanguage"
            family="var(--font-medium)"
            textColor="white"
            fontSize="15px"
            color="white"
            background="var(--color-secondary)"
            radius="30px"
            type="text"
            width="220px"
            iconAreaW="100%"
            :text="FullScreenNavbarData.Lang"
            justify="center"
            hoverClass="hover-secondary"
          />

          <div class="language-control__collapse">
            <div @click="languageControl('en')" class="item">
              <Button
                :ApplicationLanguage="ApplicationLanguage"
                family="var(--font-medium)"
                textColor="var(--color-text-gray)"
                fontSize="15px"
                color="white"
                background="transparent"
                :text="FullScreenNavbarData.Lang1"
                radius="0"
                type="text"
                width="60px"
                hoverClass="hover-text-primary"
              />
            </div>
            <div @click="languageControl('ar')" class="item">
              <Button
                :ApplicationLanguage="ApplicationLanguage"
                family="var(--font-medium)"
                textColor="var(--color-text-gray)"
                fontSize="15px"
                color="white"
                background="transparent"
                :text="FullScreenNavbarData.Lang2"
                radius="0px"
                type="text"
                width="60px"
                hoverClass="hover-text-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignInUp from "../Sign/SignInUp.vue";
import jquery from "jquery";
import Button from "../Button.vue";
import Navlink from "./Navlink.vue";

export default {
  name: "FullScreenNavbar",
  props: {
    FullScreenNavbarData: Object,
    ApplicationLanguage: String,
  },
  data: function() {
    return {
      isNavbarOpen: false,
    };
  },
  components: { Button, Navlink },

  created() {
    this.$root.$refs.FullScreenNavbar = this;

    window.addEventListener("resize", () => {
      if (this.isNavbarOpen == true) {
        this.navbarAnimations("close");
        jquery(".navbar-fullscreen").slideUp(200);
        jquery("#navbarHamburger").removeClass("open");
        this.isNavbarOpen = false;
      }
    });
  },

  destroyed() {
    window.removeEventListener("scroll", this.navbarAnimations);
  },

  methods: {
    closeNavbar: function() {
      this.isNavbarOpen = false;
      this.$root.$refs.FullScreenNavbar.navbarAnimations("close", false);
      jquery(".navbar-fullscreen").slideUp(200);
      jquery("#navbarHamburger").removeClass("open");
    },

    toggleLangControl: function() {
      if (this.isLangControlOpen) {
        jquery(".language-control__collapse").removeClass("active");
        this.isLangControlOpen = false;
      } else {
        jquery(".language-control__collapse").addClass("active");
        this.isLangControlOpen = true;
      }
    },

    languageControl: function(lang) {
      this.$emit("language-control", lang);
      this.closeNavbar();
    },

    navbarAnimations(fromTo, navStuation) {
      this.isNavbarOpen = navStuation == undefined ? this.isNavbarOpen : true;

      switch (fromTo) {
        case "open":
          jquery(".navbar-fullscreen-item").each(function(i) {
            var $item = jquery(this);
            setTimeout(function() {
              $item.animate({ left: "50%" }, 500);
            }, 100 * i);
          });
          break;
        case "close":
          jquery(".navbar-fullscreen-item").each(function() {
            var $item = jquery(this);
            $item.css({ left: "-100vw" });
          });
          break;
        default:
          jquery(".navbar-fullscreen-item").each(function() {
            var $item = jquery(this);
            $item.css({ left: "-100vw" });
            this.isNavbarOpen = false;
          });
          break;
      }
    },

    showSignin: function() {
      SignInUp.methods.showSign();
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-fullscreen {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-secondary-low);
  backdrop-filter: blur(4px);
  z-index: 8;
}

.navbar-fullscreen-layout {
  margin-top: 55px;
  padding: 20px;
  height: 100%;

  display: flex;
  flex-direction: column;

  // align-items: center;
  justify-content: center;

  .navbar-phone-icon {
    height: 40px;
  }
}

.navbar-fullscreen-item {
  position: relative;
  left: -100vw;
  width: 220px;
  transform: translateX(-50%);
  margin: 10px 0;
  // padding: 10px 20px;
  border-radius: 30px;
  background: var(--color-primary);

  font-size: 20px;
  font-family: "PoppinsSemibold";
  color: #fff;
  transition: 0.3s;
  cursor: pointer;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  button,
  a {
    text-align: center;
    background: transparent;
    border: none;
    padding: 15px 60px;
    text-decoration: none;
  }

  .language-control {
    position: relative;
    &__collapse {
      overflow: hidden;
      border: 1px solid var(--color-card-border);
      background: var(--background-general);
      width: 120px;
      border-radius: 20px;
      position: absolute;
      top: 60px;
      pointer-events: none;
      transition: 0.4s;
      opacity: 0;
      display: flex;

      .item:first-child {
        border-bottom: 1px solid var(--color-card-border);
      }
    }
    &__collapse.active {
      opacity: 1;
      pointer-events: all;

      transition: 0.4s;
    }
  }
}

.navbar-fullscreen-item.button {
  padding: 0px 0px;
  background: transparent;
}

.navbar-fullscreen-item:hover {
  transition: 0.3s;
  letter-spacing: 1px;
  background: var(--color-secondary);
}

@media (max-width: 900px) {
  .navbar-fullscreen {
    .navbar-link-icons {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
