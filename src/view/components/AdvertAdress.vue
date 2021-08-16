<template>
  <div class="AdvertAdress">
    <div class="wrapper">
      <div class="layout">
        <div class="heading">
          <h2>İlan Adress Bilgileri</h2>
        </div>

        <div class="area">
          <div class="area__left">
            <div class="row">
              <SelectBox width="100%" margin="0" text="Oda Sayısı" />
              <SelectBox width="100%" margin="0" text="Salon Sayısı" />
              <SelectBox width="100%" margin="0" text="Banyo Sayısı" />
            </div>
          </div>
          <div class="area__right">
            <div class="item icon">
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
import Button from "./Button.vue";
import SelectBox from "./SelectBox.vue";

export default {
  name: "AdvertAdress",
  components: { Button, SelectBox },
};
</script>

<style lang="scss" scoped>
.AdvertAdress {
  margin: 30px 0;

  .wrapper {
    .layout {
      background: var(--background-white);
      padding: 20px 40px;

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
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__left {
          width: 75%;
          display: flex;

          .row {
            width: 100%;
            display: flex;
          }

          .SelectBox {
            width: 100%;
          }
        }
        &__right {
          width: 25%;
        }
        .item {
        }
      }
    }
  }
}
</style>
