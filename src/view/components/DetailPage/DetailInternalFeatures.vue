<template>
  <div class="DetailInternalFeatures">
    <div class="wrapper">
      <div class="layout">
        <div class="area">
          <div class="heading">
            <h3>
              asdfasdfas
            </h3>
          </div>

          <ul class="list">
            <li
              v-for="(item, index) in featuresList"
              class="list__item"
              :key="index"
            >
              <Button
                family="var(--font-medium)"
                textColor="var(--color-text-gray)"
                iconWidth="17px"
                iconHeight="17px"
                iconColor="var(--color-primary)"
                background="transparent"
                :text="item"
                textAlign="start"
                radius="0px"
                color="white"
                type="together"
                iconType="confirm"
                width="100%"
                fontSize="15px"
                direction="start"
                padding="0"
                iconAreaW="30px"
              />
            </li>
          </ul>
        </div>

        <div class="area">
          <div class="heading">
            <h3>
              asdfasdfas
            </h3>
          </div>

          <ul class="list">
            <li
              v-for="(item, index) in featuresList"
              class="list__item"
              :key="index"
            >
              <Button
                family="var(--font-medium)"
                textColor="var(--color-text-gray)"
                iconWidth="17px"
                iconHeight="17px"
                iconColor="var(--color-primary)"
                background="transparent"
                :text="item"
                textAlign="start"
                radius="0px"
                color="white"
                type="together"
                iconType="confirm"
                width="100%"
                fontSize="15px"
                direction="start"
                padding="0"
                iconAreaW="30px"
              />
            </li>
          </ul>
        </div>

        <div class="area">
          <div class="heading">
            <h3>
              asdfasdfas
            </h3>
          </div>

          <ul class="list">
            <li
              v-for="(item, index) in featuresList"
              class="list__item"
              :key="index"
            >
              <Button
                family="var(--font-medium)"
                textColor="var(--color-text-gray)"
                iconWidth="17px"
                iconHeight="17px"
                iconColor="var(--color-primary)"
                background="transparent"
                :text="item"
                textAlign="start"
                radius="0px"
                color="white"
                type="together"
                iconType="confirm"
                width="100%"
                fontSize="15px"
                direction="start"
                padding="0"
                iconAreaW="30px"
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
  data: function() {
    return {
      featuresList: [
        "İlan No",
        "Son Güncelleme Tarihi",
        "İlan Durumu",
        "Konut Şekli",
        "Brüt / Metre2",
        "Bulunduğu Kat",
        "Isınma Tipi",
        "Kat Sayısı",
        "Brüt / Metre2",
        "Bulunduğu Kat",
        "Isınma Tipi",
        "Kat Sayısı",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.DetailInternalFeatures {
  margin: 20px 0;

  .wrapper {
    .layout {
      padding: 35px 45px;

      background: var(--background-white);

      width: 100%;
      display: flex;
      .area {
        width: 100%;

        .heading {
          h3 {
            display: flex;
            align-items: center;
            height: 100%;
            border-bottom: 1px solid var(--background-general);
            padding-bottom: 20px;
          }
        }

        .list {
          list-style: none;
        }
      }
    }
  }
}
</style>
