<template>
  <div id="Navbar">
    <div class="wrapper">
      <div class="layout">
        <div class="area vertical-center">
          <h1>Navbar</h1>
        </div>
        <div class="area  vertical-center">
          <div class="area__layout">
            <div class="area__layout__section">
              <Button color="primary" text="button asdfadfasdf" radius="high" />
              <Button color="primary" text="button asdfadfasdf" radius="high" />
            </div>

            <div class="area__layout__section">
              <Button color="primary" text="AR" radius="high" />
            </div>
          </div>
        </div>
        <div class="area vertical-center">
          <h1>Navbar</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
#Navbar {
  height: 150px;
  background: var(--background-white);

  .layout {
    height: 100%;
    width: 100%;
    background: rgb(74, 74, 74);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    :first-child {
      max-width: 180px;
    }
    :nth-child(2) {
      justify-content: space-between;
      margin: 0 20px;
    }
    :last-child {
      max-width: 180px;
    }

    .area {
      width: 100%;
      height: 100%;
      background: chocolate;

      &__layout {
        max-width: none;

        display: flex;
        justify-content: space-between;
        width: 100%;

        :first-child {
          max-width: 180px;
        }

        &__section {
          display: flex;
        }
      }
    }
  }
}
</style>
