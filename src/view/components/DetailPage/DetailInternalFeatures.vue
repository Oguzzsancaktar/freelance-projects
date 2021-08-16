<template>
  <div class="DetailInternalFeatures">
    <div class="wrapper">
      <div class="layout">
        <div class="area">
          <div class="heading">
            asdfasdfas
          </div>

          <ul class="list">
            <li class="list__item">
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
            </li>
          </ul>
        </div>

        <div class="area">
          <div class="heading">
            asdfasdfas
          </div>

          <ul class="list">
            <li class="list__item">
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
            </li>
          </ul>
        </div>
        <div class="area">
          <div class="heading">
            asdfasdfas
          </div>

          <ul class="list">
            <li class="list__item">
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  components: { Button },
  name: "DetailInternalFeatures",
};
</script>

<style lang="scss" scoped>
.DetailInternalFeatures {
  .wrapper {
    .layout {
      width: 100%;
      display: flex;
      .area {
        width: 100%;

        .heading {
        }

        .list {
          list-style: none;
        }
      }
    }
  }
}
</style>
