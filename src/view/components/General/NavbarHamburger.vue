<template>
  <div class="navbar-collapse-button" v-on:click="toggleNavbar()">
    <div id="navbarHamburger">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import jquery from "jquery";

export default {
  name: "NavbarHamburger",

  data: function() {
    return {
      isNavbarOpen: false,
    };
  },

  methods: {
    toggleNavbar: function() {
      if (this.isNavbarOpen) {
        this.isNavbarOpen = false;
        this.$root.$refs.FullScreenNavbar.navbarAnimations(
          "close",
          this.isNavbarOpen
        );
        jquery(".navbar-fullscreen").slideUp(200);
        jquery("#navbarHamburger").removeClass("open");
      } else {
        this.isNavbarOpen = true;

        this.$root.$refs.FullScreenNavbar.navbarAnimations(
          "open",
          this.isNavbarOpen
        );
        jquery(".navbar-fullscreen").slideDown(200);
        jquery("#navbarHamburger").addClass("open");
      }
      console.log(this.isNavbarOpen);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-collapse-button {
  max-width: none;
  display: flex;
  width: 60px;
  height: 50px;
  background: var(--color-primary);
  justify-content: center !important;
  cursor: pointer;
  transition: 0.4s;
  border-radius: 30px;
  align-items: center;
}

.navbar-collapse-button:hover {
  transition: 0.4s;
  cursor: pointer;

  background: var(--color-secondary);
}
#navbarHamburger {
  top: 0%;
  left: 50%;
  z-index: 999;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40%;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg) translateX(-50%);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  padding: 5px;
}

#navbarHamburger span {
  display: block;
  position: absolute;
  height: 3px;
  width: 30px;
  background: #fff;
  border-radius: 9px;
  opacity: 1;
  left: 50%;

  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg) translateX(-50%);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#navbarHamburger span:nth-child(1) {
  top: 0px;
}

#navbarHamburger span:nth-child(2),
#navbarHamburger span:nth-child(3) {
  top: 10px;
}

#navbarHamburger span:nth-child(4) {
  top: 20px;
}

#navbarHamburger.open span:nth-child(1) {
  top: 18px;
  width: 0%;
}

#navbarHamburger.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  left: 16px;
}

#navbarHamburger.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: 16px;
}

#navbarHamburger.open span:nth-child(4) {
  top: 10px;
  width: 0%;
  left: 20px;
}
</style>
