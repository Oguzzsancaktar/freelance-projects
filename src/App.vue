<template>
  <div id="App">
    <SignInUp
      :SignInUpData="
        ApplicationLanguage == 'en' ? enData.SignInUpData : arData.SignInUpData
      "
    />
    <FullScreenNavbar
      @language-control="languageControl"
      :FullScreenNavbarData="
        ApplicationLanguage == 'en'
          ? enData.FullScreenNavbarData
          : arData.FullScreenNavbarData
      "
      @show-signin="showSignin"
      @navbar-animations="navbarAnimations"
    />
    <Navbar
      :NavbarData="
        ApplicationLanguage == 'en' ? enData.NavbarData : arData.NavbarData
      "
      @navbar-animations="navbarAnimations"
      @language-control="languageControl"
    />

    <router-view :Data="ApplicationLanguage == 'en' ? enData : arData" to="/">
    </router-view>
    <Footer
      :FooterData="
        ApplicationLanguage == 'en' ? enData.FooterData : arData.FooterData
      "
    />
  </div>
</template>

<script>
import Footer from "./view/components/General/Footer.vue";
import Navbar from "./view/components/General/Navbar.vue";
import FullScreenNavbar from "./view/components/General/FullScreenNavbar.vue";
import SignInUp from "./view/components/Sign/SignInUp.vue";

import enData from "./localization/en.json";
import arData from "./localization/ar.json";

var ApplicationLanguage = "en";

export default {
  components: { Navbar, Footer, FullScreenNavbar, SignInUp },
  name: "App",
  data: function() {
    return {
      ApplicationLanguage,
      enData,
      arData,
    };
  },
  mounted() {
    if (localStorage.ApplicationLanguage) {
      this.ApplicationLanguage = localStorage.ApplicationLanguage;
    } else {
      localStorage.setItem("ApplicationLanguage", "en");
    }
  },
  methods: {
    languageControl: function() {
      this.ApplicationLanguage == "en"
        ? (this.ApplicationLanguage = "ar")
        : (this.ApplicationLanguage = "en");
      localStorage.setItem("ApplicationLanguage", this.ApplicationLanguage);
    },
    navbarAnimations: function(fromTo) {
      this.$emit("navbar-animations", fromTo);
    },

    showSignin: function() {
      // this.$emit("show-signin");
    },
  },
};
</script>

<style>
:root {
  --color-primary: #0091a0;
  --color-primary-dark: #005b65;

  --color-primary-low: #0090a0ad;
  --color-primary-low-low: #0090a04f;

  --color-primary-low-button: #0090a00a;

  --color-secondary: #f37031;
  --color-secondary-dark: #ca551e;

  --color-secondary-low: #f36e3181;
  --color-secondary-low-low: #f36e3150;

  --color-secondary-low-button: #f36e310e;

  --color-third: #10a6b8;

  --color-other-1: #517a29ae;
  --color-other-2: #0c6069d7;
  --color-other-3: #b12d2fbb;
  --color-other-4: #4f3d88c4;
  --color-other-5: #01a4d1cc;

  --color-text-general: #333333;
  --color-nav-link: #2e2e2e;

  --color-text-gray-light: #a7a7a7;
  --color-text-gray: #777777;
  --color-text-gray-dark: #525252;
  --color-text-black: #393939;

  --color-text-subpage: #302f2f;

  --color-card-id: #656565;

  --background-white: #fff;
  --background-gray-light: #f0f0f0;
  --background-general: #f3f3f3;

  --box-shadow-color: #1b1b1bcf;

  --color-card-border: #dedede;

  --font-black: "Branding-Black";
  --font-black-italic: "Branding-BlackItalic";
  --font-bold: "Branding-Bold";
  --font-bold-italic: "Branding-BoldItalic";
  --font-light: "Branding-Light";
  --font-light-italic: "Branding-LightItalic";
  --font-medium: "Branding-Medium";
  --font-medium-italic: "Branding-MediumItalic";
  --font-semibold: "Branding-Semibold";
  --font-semibold-italic: "Branding-SemiboldItalic";
  --font-semilight: "Branding-Semilight";
  --font-semilight-italic: "Branding-SemilightItalic";
  --font-thin: "Branding-Thin";
  --font-thin-italic: "Branding-ThinItalic";
}

@font-face {
  font-family: "Branding-Black";
  src: local("Branding-Black"),
    url("../src/assets/fonts/Branding-Black.ttf") format("truetype");
}
@font-face {
  font-family: "Branding-BlackItalic";
  src: local("Branding-BlackItalic"),
    url("../src/assets/fonts/Branding-BlackItalic.ttf") format("truetype");
}
@font-face {
  font-family: "Branding-Bold";
  src: local("Branding-Bold"),
    url("../src/assets/fonts/Branding-Bold.ttf") format("truetype");
}
@font-face {
  font-family: "Branding-BoldItalic";
  src: local("Branding-BoldItalic"),
    url("../src/assets/fonts/Branding-BoldItalic.ttf") format("truetype");
}
@font-face {
  font-family: "Branding-Light";
  src: local("Branding-Light"),
    url("../src/assets/fonts/Branding-Light.ttf") format("truetype");
}
@font-face {
  font-family: "Branding-LightItalic";
  src: local("Branding-LightItalic"),
    url("../src/assets/fonts/Branding-LightItalic.ttf") format("truetype");
}
@font-face {
  font-family: "Branding-Medium";
  src: local("Branding-Medium"),
    url("../src/assets/fonts/Branding-Medium.ttf") format("truetype");
}
@font-face {
  font-family: "Branding-MediumItalic";
  src: local("Branding-MediumItalic"),
    url("../src/assets/fonts/Branding-MediumItalic.ttf") format("truetype");
}
@font-face {
  font-family: "Branding-Semibold";
  src: local("Branding-Semibold"),
    url("../src/assets/fonts/Branding-Semibold.ttf") format("truetype");
}
@font-face {
  font-family: "Branding-SemiboldItalic";
  src: local("Branding-SemiboldItalic"),
    url("../src/assets/fonts/Branding-SemiboldItalic.ttf") format("truetype");
}
@font-face {
  font-family: "Branding-Semilight";
  src: local("Branding-Semilight"),
    url("../src/assets/fonts/Branding-Semilight.ttf") format("truetype");
}
@font-face {
  font-family: "Branding-SemilightItalic";
  src: local("Branding-SemilightItalic"),
    url("../src/assets/fonts/Branding-SemilightItalic.ttf") format("truetype");
}
@font-face {
  font-family: "Branding-Thin";
  src: local("Branding-Thin"),
    url("../src/assets/fonts/Branding-Thin.ttf") format("truetype");
}
@font-face {
  font-family: "Branding-ThinItalic";
  src: local("Branding-ThinItalic"),
    url("../src/assets/fonts/Branding-ThinItalic.ttf") format("truetype");
}

* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) var(--color-primary-low);
  /* overflow-x: hidden; */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Branding-Medium";
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px var(--color-primary-low-button);
  background-color: var(--color-text-gray-light);
}

::-webkit-scrollbar {
  height: 5px;
  background-color: var(--color-primary);
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-primary);
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.2) 75%,
    transparent 75%,
    transparent
  );
}

#App {
  width: 100vw;
  overflow-x: hidden;
}

.subpage-content {
  height: 100%;
  min-height: calc(100vh - 285px);
  padding-top: 150px;
  background: var(--background-general);
  color: var(--color-text-subpage);
}

.wrapper {
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 1200px;
}

.vertical-center {
  display: flex;
  align-items: center;
}

.border-radius-high {
  border-radius: 30px;
}
.border-radius-low {
  border-radius: 10px;
}

.default-button {
  transition: 0.4s;
  width: auto;
  padding: 0 20px;
  border: 1px solid transparent;
  height: 50px;
  background: transparent;
  width: auto;
}

.background-primary {
  background: var(--color-primary);
}
.background-secondary {
  background: var(--color-secondary);
}
.background-gray-light {
  background: var(--background-gray-light);
}
.background-general {
  background: var(--background-general);
}

.text-color-white {
  color: var(--background-white);
}

.text-color-dark {
  color: var(--color-nav-link);
}

.text-color-general {
  color: var(--color-text-general);
}
.text-color-primary {
  color: var(--color-primary);
}
.text-color-secondary {
  color: var(--color-secondary);
}

/* Hover Class */
/* Hover Class */
/* Hover Class */

.hover-error:hover {
  transition: 0.4s !important;
  background: rebeccapurple !important;
}
.hover-error:hover g {
  transition: 0.4s !important;
  fill: red !important;
}
.hover-error:hover span {
  transition: 0.4s !important;
  color: violet !important;
}

.hover-primary:hover {
  transition: 0.4s !important;
  background: var(--color-secondary) !important;
}
.hover-primary:hover g {
  transition: 0.4s !important;
  fill: var(--background-white) !important;
}
.hover-primary:hover span {
  transition: 0.4s !important;
  color: var(--background-white) !important;
}

.hover-secondary:hover {
  transition: 0.4s !important;
  background: var(--color-primary) !important;
}
.hover-secondary:hover g {
  transition: 0.4s !important;
  fill: var(--background-white) !important;
}
.hover-secondary:hover span {
  transition: 0.4s !important;
  color: var(--background-white) !important;
}

.hover-white:hover {
  transition: 0.4s !important;
  background: var(--background-white) !important;
}
.hover-white:hover g {
  transition: 0.4s !important;
  fill: var(--color-nav-link) !important;
}
.hover-white:hover span {
  transition: 0.4s !important;
  color: var(--color-nav-link) !important;
}

.hover-secondary-dark:hover {
  transition: 0.4s !important;
  background: var(--color-secondary-dark) !important;
}
.hover-secondary-dark:hover g {
  transition: 0.4s !important;
  fill: var(--background-white) !important;
}
.hover-secondary-dark:hover span {
  transition: 0.4s !important;
  color: var(--background-white) !important;
}

.nav-hover:hover {
  transition: 0.4s !important;
  color: var(--color-primary) !important;
}

/* Hover Class */
/* Hover Class */
/* Hover Class */

@media (max-width: 1400px) {
  .wrapper {
    width: 100%;
  }
}

@media (max-width: 1300px) {
  .wrapper {
    width: 90%;
  }
}
</style>
