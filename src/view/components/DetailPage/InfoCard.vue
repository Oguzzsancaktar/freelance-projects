<template>
  <div :class="`InfoCard ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="layout">
      <div class="area">
        <ImageView
          width="70%"
          imageType="images"
          imageName="refferance-logo-6.png"
        />
      </div>

      <div class="area">
        <div class="texts">
          <h2>{{ InfoCardData.Text }}</h2>
          <p>{{ InfoCardData.Type }}</p>
        </div>

        <div class="buttons">
          <Button
            class="btn"
            family="var(--font-medium)"
            color="dark"
            textColor="var(--color-general-dark)"
            :text="InfoCardData.Phone"
            type="together"
            iconType="phone"
            iconColor="var(--color-primary)"
            background="transparent"
            radius="30px"
            width="200px"
            padding="0 10px"
            iconWidth="22px"
            iconHeight="21px"
            fontSize="15px"
            border="2px solid var(--background-general)"
            iconAreaW="auto"
            hoverClass="hover-secondary"
          />
          <Button
            hoverClass="hover-secondary"
            class="btn"
            family="var(--font-medium)"
            color="dark"
            textColor="var(--color-general-dark)"
            :text="InfoCardData.Message"
            type="together"
            iconType="envelope"
            iconColor="var(--color-primary)"
            background="transparent"
            radius="30px"
            width="200px"
            padding="0 30px"
            iconWidth="22px"
            iconHeight="21px"
            fontSize="15px"
            border="2px solid var(--background-general)"
            iconAreaW="auto"
          />
        </div>
      </div>

      <div class="area">
        <Button
          family="var(--font-medium)"
          color="dark"
          textColor="var(--color-general-dark)"
          :text="InfoCardData.Other"
          type="together"
          iconType="house"
          iconColor="var(--color-primary)"
          background="transparent"
          radius="30px"
          width="100%"
          padding="0 0px"
          iconWidth="22px"
          iconHeight="21px"
          fontSize="12px"
          iconAreaW="auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import ImageView from "../ImageView.vue";
export default {
  name: "InfoCard",
  components: { Button, ImageView },
  props: {
    InfoCardData: Object,
    ApplicationLanguage: String,
  },
};
</script>

<style lang="scss" scoped>
.InfoCard {
  width: 280px;
  height: 380px;
  background: var(--background-white);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  .layout {
    height: 100%;
    padding-bottom: 20px 25px;
    display: flex;
    flex-direction: column;
    .area {
      display: flex;
      flex-direction: column;
      height: calc(100% - 150px);
      align-items: center;
      justify-content: space-between;
      padding: 15px 30px;

      .texts {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
      .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .btn {
          margin: 3px 0;
        }
      }
    }

    .area:first-child {
      height: 100px;
      border-bottom: 1px solid var(--background-general);
    }
    .area:last-child {
      height: 50px;
      border-top: 1px solid var(--background-general);

      /deep/ .default-button {
        cursor: pointer;
      }
    }
  }
}

.InfoCard.rtl {
  .layout {
    .area {
      .texts {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: right;
      }
      .buttons {
        text-align: right;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .btn {
          margin: 3px 0;
        }
      }
    }

    .area:first-child {
      height: 100px;
      border-bottom: 1px solid var(--background-general);
    }
    .area:last-child {
      height: 50px;
      border-top: 1px solid var(--background-general);

      /deep/ .default-button {
        cursor: pointer;
      }
    }
  }
}

@media (max-width: 900px) {
  .InfoCard {
    width: 100%;
    min-width: 280px;
    .layout {
      height: 100%;
      padding-bottom: 20px 25px;
      display: flex;
      flex-direction: column;
      .area {
        display: flex;
        flex-direction: column;
        height: calc(100% - 150px);
        align-items: center;
        justify-content: space-between;
        padding: 15px 30px;

        .texts {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }
        .buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          .btn {
            margin: 3px 0;
          }
        }
      }

      .area:first-child {
        height: 100px;
        border-bottom: 1px solid var(--background-general);
      }
      .area:last-child {
        height: 50px;
        border-top: 1px solid var(--background-general);
      }
    }
  }
}
</style>
