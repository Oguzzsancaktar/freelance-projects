<template>
  <div id="Navbar">
    <div class="wrapper">
      <div class="layout">
        <div class="area vertical-center">
          <ImageView width="100%" imageType="svg" imageName="logo.svg" />
        </div>
        <div class="area  vertical-center">
          <div class="area__layout">
            <div class="area__layout__section ">
              <Button
                background="--color-secondary"
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
              />
              <Button
                family="var(--font-medium)"
                textColor="white"
                iconWidth="17px"
                iconHeight="17px"
                iconColor="white"
                background="--color-primary"
                text="Add Property"
                radius="30px"
                color="white"
                type="together"
                iconType="plus"
                width="155px"
                fontSize="15px"
              />
            </div>

            <div class="area__layout__section">
              <Navlink text="Self/Rent" />
              <Navlink text="About Us" />
              <Navlink text="Contact Us" />
            </div>
          </div>
        </div>

        <div class="area vertical-center collapse-hidden">
          <Button
            background="--color-secondary"
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
          />
          <NavbarHamburger @navbar-animations="navbarAnimations" />
        </div>

        <div class="area vertical-center login-language">
          <div class="area__layout__section">
            <Button
              family="var(--font-medium)"
              color="dark"
              textColor="var(--color-general-dark)"
              text="Login / Sign up"
              type="together"
              iconType="login"
              iconColor="var(--color-primary)"
              background="--background-gray-light"
              radius="30px"
              width="170px"
              padding="0 20px"
              iconWidth="22px"
              iconHeight="21px"
              fontSize="15px"
            />
            <Button
              family="var(--font-medium)"
              textColor="white"
              fontSize="15px"
              color="white"
              background="--color-primary"
              text="AR"
              radius="30px"
              type="text"
              width="60px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jquery from "jquery";

import Button from "./Button.vue";
import Navlink from "./Navlink.vue";
import ImageView from "./ImageView.vue";
import NavbarHamburger from "./NavbarHamburger.vue";

export default {
  components: { Button, Navlink, ImageView, NavbarHamburger },
  name: "Navbar",
  methods: {
    navbarAnimations: function(fromTo) {
      this.$emit("navbar-animations", fromTo);
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
      max-width: 140px !important;
    }
    .area:nth-child(2) {
      justify-content: space-between;
      margin: 0 100px;
      max-width: 600px;
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
        justify-content: flex-start;
        width: 100%;

        :first-child {
          max-width: 240px !important;
        }

        &__section {
          // width: 100%;
          display: flex;
          max-width: none !important;
          align-items: center;

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
