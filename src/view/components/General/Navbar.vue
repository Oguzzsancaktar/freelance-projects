<template>
  <div id="Navbar">
    <div class="wrapper">
      <div class="layout">
        <div class="area vertical-center">
          <a href="/">
            <ImageView width="100%" imageType="svg" imageName="logo.svg" />
          </a>
        </div>
        <div class="area  vertical-center">
          <div class="area__layout">
            <div class="area__layout__section ">
              <Button
                background="var(--color-secondary)"
                family="var(--font-medium)"
                radius="30px"
                color="white"
                type="icon"
                iconType="hearth"
                width="60px"
                padding="0"
                iconColor="var(--background-white)"
                iconWidth="30px"
                iconHeight="26px"
                fontSize="15px"
                hoverClass="hover-secondary"
              />
              <a href="/add">
                <Button
                  family="var(--font-medium)"
                  textColor="white"
                  iconWidth="17px"
                  iconHeight="17px"
                  iconColor="white"
                  background="var(--color-primary)"
                  :text="NavbarData.AddProperty"
                  radius="30px"
                  color="white"
                  type="together"
                  iconType="plus"
                  width="155px"
                  fontSize="15px"
                  iconAreaW="auto"
                  hoverClass="hover-primary"
                />
              </a>
            </div>

            <div class="area__layout__section">
              <Navlink
                textColor="var(--color-nav-link)"
                fontSize="16px"
                v-for="(item, index) in NavbarData.NavLinks"
                :key="index"
                :text="item.text"
                :href="item.href"
                :isNavbar="true"
                hoverClass="nav-hover"
              />
            </div>
          </div>
        </div>

        <div class="area vertical-center collapse-hidden">
          <Button
            background="var(--color-secondary)"
            family="var(--font-medium)"
            radius="30px"
            color="white"
            type="icon"
            iconType="hearth"
            width="60px"
            padding="0"
            iconColor="var(--background-white)"
            iconWidth="30px"
            iconHeight="26px"
            fontSize="15px"
            margin="0 10px"
            hoverClass="hover-secondary"
          />
          <NavbarHamburger @navbar-animations="navbarAnimations" />
        </div>

        <div class="area vertical-center login-language">
          <div class="area__layout__section">
            <div v-on:click="this.showSignin" class="control-sign">
              <Button
                family="var(--font-medium)"
                color="dark"
                textColor="var(--color-general-dark)"
                :text="NavbarData.LoginSignup"
                type="together"
                iconType="login"
                iconColor="var(--color-primary)"
                background="var(--background-gray-light)"
                radius="30px"
                width="170px"
                padding="0 20px"
                iconWidth="22px"
                iconHeight="21px"
                fontSize="15px"
                iconAreaW="auto"
                hoverClass="hover-primary"
              />
            </div>
            <div @click="languageControl" class="language-control">
              <Button
                family="var(--font-medium)"
                textColor="white"
                fontSize="15px"
                color="white"
                background="var(--color-primary)"
                :text="NavbarData.Lang"
                radius="30px"
                type="text"
                width="60px"
                hoverClass="hover-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jquery from "jquery";
import SignInUp from "../Sign/SignInUp.vue";

import Button from "../Button.vue";
import Navlink from "./Navlink.vue";
import ImageView from "../ImageView.vue";
import NavbarHamburger from "./NavbarHamburger.vue";

export default {
  components: { Button, Navlink, ImageView, NavbarHamburger },
  name: "Navbar",
  props: {
    NavbarData: Object,
  },
  methods: {
    languageControl: function() {
      this.$emit("language-control");
    },

    navbarAnimations: function(fromTo) {
      this.$emit("navbar-animations", fromTo);
    },
    showSignin: function() {
      SignInUp.methods.showSign();
    },
  },

  created() {
    this.$root.$refs.Navbar = this;

    jquery(window).scroll(function() {
      var $nav = jquery("#Navbar");
      $nav.toggleClass("scrolled", jquery(this).scrollTop() > $nav.height());
    });
  },
};
</script>

<style lang="scss" scoped>
#Navbar.scrolled {
  height: 80px;

  transition: 0.4s;
}
#Navbar {
  position: fixed;
  transition: 0.4s;
  top: 0;
  left: 0;
  height: 150px;
  background: var(--background-white);
  width: 100vw;
  z-index: 9;
  justify-content: center;
  box-shadow: 0 0 10px -7px var(--box-shadow-color);

  .layout {
    margin: auto;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .collapse-hidden {
      button:first-child {
        margin-right: 10px;
      }
      width: 130px !important;
      display: none;
      align-items: center;
      justify-content: space-between;
    }

    .login-language {
      display: flex;
    }

    :first-child {
      max-width: 180px;
    }

    .area:last-child {
      // max-width: 140px !important;
    }
    .area:nth-child(2) {
      justify-content: space-between;
      margin: 0 100px;
      max-width: 900px;
    }
    :last-child {
      max-width: 250px;
      justify-content: flex-end;
    }

    .area {
      width: 100%;
      height: 100%;

      &__layout {
        max-width: none;
        display: flex;
        justify-content: space-between;
        width: 100%;

        :first-child {
          max-width: 240px !important;
        }

        &__section {
          // width: 100%;
          display: flex;
          max-width: none !important;
          align-items: center;

          .active {
            color: red;
          }
          button {
            margin: 0 10px 0 0;
          }
          .nav__link {
            margin: 0 15px;
          }
        }
      }
    }
  }
}

@media (max-width: 1300px) {
  #Navbar {
    .wrapper {
      .layout {
        .area:nth-child(2) {
          margin: 0 50px;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  #Navbar {
    .wrapper {
      .layout {
        .collapse-hidden {
          display: flex;
        }
        .login-language {
          display: none;
        }
        .area:nth-child(2) {
          margin: 0 40px;
        }

        .area {
          &__layout {
            width: 95%;
            justify-content: center;
            &__section {
              justify-content: center;
            }
            &__section:first-child {
              button:first-child {
                display: none;
              }
            }
            .nav__link {
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1100px) {
  #Navbar {
    .wrapper {
      .layout {
        .area:nth-child(2) {
          margin: 0 10px;
          justify-content: center;
        }
        .area {
          &__layout {
            width: 85%;

            .nav__link {
              margin: 0 8px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 950px) {
  #Navbar {
    .wrapper {
      .layout {
        .area:nth-child(2) {
          display: none;
        }
      }
    }
  }
}
</style>
}
