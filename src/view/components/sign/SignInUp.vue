<template>
  <div class="SignInUp">
    <div class="wrapper">
      <div class="layout">
        <div class="signin-card">
          <SignInCard />
        </div>
        <div class="signup-card">
          <SignUpCard />
          <button v-on:click="this.showSignin">asdfasd</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignInCard from "./SignInCard.vue";
import SignUpCard from "./SignUpCard.vue";
export default {
  components: { SignInCard, SignUpCard },
  name: "SignInUp",
  methods: {
    showSignin: function() {
      console.log("asdf1234");
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
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
