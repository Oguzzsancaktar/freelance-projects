<template>
  <div class="SignInUp">
    <div class="wrapper">
      <div class="layout">
        <div class="signup-card">
          <SignUpCard @hideSign="hideSign" />
        </div>
        <div class="signin-card">
          <SignInCard @showSignup="showSignup" @hideSign="hideSign" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jquery from "jquery";

import SignInCard from "./SignInCard.vue";
import SignUpCard from "./SignUpCard.vue";
export default {
  components: { SignInCard, SignUpCard },
  name: "SignInUp",
  methods: {
    showSign: function() {
      jquery(".SignInUp").animate({ top: "0" });
      setTimeout(() => {
        jquery(".signin-card").addClass("active");
      }, 600);
    },
    hideSign() {
      jquery(".signin-card").removeClass("active");
      jquery(".signup-card").removeClass("active");

      setTimeout(() => {
        jquery(".SignInUp").animate({ top: "-100vh" });
      }, 1000);
    },
    showSignup() {
      jquery(".signin-card").removeClass("active");

      jquery(".signup-card").addClass("active");
    },
  },
};
</script>

<style lang="scss" scoped>
.SignInUp {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: var(--color-primary-low);
  top: -100vh;

  .wrapper {
    width: 100%;
    .layout {
      width: 100%;
      height: 100%;
      position: relative;
      .signin-card,
      .signup-card {
        position: absolute;
        margin: auto;
        width: 100%;
        left: -100vw;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: 1s;
      }

      .signup-card.active {
        left: 50%;
      }

      .signin-card.active {
        left: 50%;
      }
    }
  }
}
</style>
