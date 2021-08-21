<template>
  <div class="AdvertCategory">
    <div class="wrapper">
      <div class="layout">
        <div class="heading">
          <h2>İlan Kategorisi</h2>
        </div>
        <div class="area ">
          <div class="area__left">
            <div class="item">
              <SelectBox text="Kategori" height="auto" width="100%" />
            </div>
            <div class="item">
              <SelectBox text="Konut Alt Kategori" height="auto" width="100%" />
            </div>
            <div class="item">
              <SelectBox text="Yayın Tipi" height="auto" width="100%" />
            </div>
          </div>

          <div class="area__right">
            <div class="item">
              <Button
                margin="auto"
                padding="0px"
                direction="row"
                background="transparent"
                radius="high"
                color="white"
                type="together"
                iconType="message"
                iconAreaW="24px"
                text="İlanınızın daha hızlı satılıp/kiralanabilmesi için ilan kategorisinin doğru seçimi önemlidir."
                iconColor="var(--color-secondary)"
                iconHeight="24px"
                iconWidth="24px"
                fontSize="13px"
                textColor="var(--color-text-gray)"
                family="var(--font-light)"
                width="100%"
                textAlign="start"
                marginLeft="5px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectBox from "../SelectBox.vue";
import Button from "../Button.vue";

export default {
  name: "AdvertCategory",
  components: { SelectBox, Button },
};
</script>

<style lang="scss" scoped>
.AdvertCategory {
  margin: 30px 0;

  .wrapper {
    .layout {
      padding: 20px 40px;

      background: var(--background-white);

      display: flex;
      flex-direction: column;
      width: 100%;

      .heading {
        h2 {
          display: flex;
          align-items: center;
          height: 100%;
          border-bottom: 1px solid var(--background-general);
          padding-bottom: 20px;
        }
      }

      .area {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        &__left {
          width: 75%;
          display: flex;
        }
        &__right {
          width: 25%;
        }

        .item {
          width: 100%;
        }
      }
    }
  }
}
</style>
