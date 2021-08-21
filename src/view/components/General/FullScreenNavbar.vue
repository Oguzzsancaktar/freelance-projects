<template>
  <div class="navbar-fullscreen">
    <div class="navbar-fullscreen-layout">
      <div class="navbar-fullscreen-item">
        <a href="./aboutus.html"> <Navlink type="white" text="Self/Rent"/></a>
      </div>
      <div class="navbar-fullscreen-item">
        <a href="./services.html"> <Navlink text="About Us" type="white"/></a>
      </div>
      <div class="navbar-fullscreen-item">
        <a href="./activities.html">
          <Navlink text="Contact Us" type="white"
        /></a>
      </div>
      <div class="navbar-fullscreen-item button">
        <a href="/add">
          <Button
            family="var(--font-medium)"
            textColor="white"
            iconWidth="17px"
            iconHeight="17px"
            iconColor="white"
            background="var(--color-primary)"
            text="Add Property"
            radius="30px"
            color="white"
            type="together"
            iconType="plus"
            width="220px"
            fontSize="20px"
            iconAreaW="auto"
          />
        </a>
      </div>

      <div class="navbar-fullscreen-item button">
        <button v-on:click="this.showSignin">
          <Button
            family="var(--font-medium)"
            color="dark"
            textColor="var(--color-general-dark)"
            text="Login / Sign up"
            type="together"
            iconType="login"
            iconColor="var(--color-primary)"
            background="var(--background-gray-light)"
            radius="30px"
            width="220px"
            padding="0 20px"
            iconWidth="22px"
            iconHeight="21px"
            fontSize="20px"
            iconAreaW="auto"
          />
        </button>
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
  // margin-top: 150px;
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
  margin: 20px 0;
  padding: 10px 20px;
  border-radius: 30px;
  background: var(--color-primary);

  font-size: 20px;
  font-family: "PoppinsSemibold";
  color: #fff;
  transition: 0.3s;
  cursor: pointer;
  text-align: center;

  button,
  a {
    text-align: center;
    background: transparent;
    border: none;

    text-decoration: none;
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
