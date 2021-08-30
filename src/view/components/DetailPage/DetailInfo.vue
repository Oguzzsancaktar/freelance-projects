<template>
  <div :class="`DetailInfo ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="wrapper">
      <div class="layout">
        <div class="area">
          <div class="section">
            <h3>{{ DetailInfoData.Header }}</h3>
          </div>
          <div class="section">
            <Button
              color="var(--color-secondary)"
              textColor="var(--color-text-general)"
              width="120px"
              :text="DetailInfoData.Feature1"
              radius="10px"
              type="together"
              border="1px solid transparent"
              iconType="maps"
              height="35px"
              iconColor="var(--color-primary)"
              padding="0 0px"
              margin="0"
              iconWidth="20px"
              iconHeight="26px"
              family="var(--font-medium)"
              fontSize="14px"
              iconAreaW="auto"
            />
            <Button
              color="var(--color-secondary)"
              textColor="var(--color-text-general)"
              width="105px"
              :text="DetailInfoData.Feature2"
              radius="10px"
              type="together"
              border="1px solid transparent"
              iconType="rentSale"
              height="35px"
              iconColor="var(--color-primary)"
              padding="0 10px"
              margin="0"
              iconWidth="25px"
              iconHeight="26px"
              family="var(--font-medium)"
              fontSize="14px"
              iconAreaW="auto"
            />
            <Button
              color="var(--color-primary)"
              textColor="var(--color-text-general)"
              width="100px"
              :text="DetailInfoData.Feature3"
              radius="10px"
              type="together"
              border="1px solid transparent"
              iconType="cube"
              height="35px"
              iconColor="var(--color-primary)"
              padding="0 10px"
              margin="0"
              iconWidth="20px"
              iconHeight="26px"
              family="var(--font-medium)"
              fontSize="14px"
              iconAreaW="auto"
            />
            <Button
              color="var(--color-primary)"
              textColor="var(--color-text-general)"
              width="80px"
              :text="DetailInfoData.Feature4"
              radius="10px"
              type="together"
              border="1px solid transparent"
              iconType="livingRoom"
              height="35px"
              iconColor="var(--color-primary)"
              padding="0 10px"
              margin="0"
              iconWidth="20px"
              iconHeight="26px"
              family="var(--font-medium)"
              fontSize="14px"
              iconAreaW="auto"
            />
          </div>
        </div>
        <div class="area">
          <Button
            class="btn"
            family="var(--font-medium)"
            color="dark"
            textColor="var(--color-primary)"
            :text="DetailInfoData.Price"
            type="text"
            background="var(--color-primary-low-low)"
            radius="30px"
            width="200px"
            padding="0 20px"
            iconWidth="22px"
            iconHeight="21px"
            fontSize="25px"
            iconAreaW="auto"
            justify="center"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  name: "DetailInfo",
  components: { Button },
  props: {
    DetailInfoData: Object,
    ApplicationLanguage: String,
  },
};
</script>

<style lang="scss" scoped>
.DetailInfo {
  margin: 20px 0;

  .wrapper {
    .layout {
      padding: 35px 45px;
      width: 100%;
      background: var(--background-white);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .area {
        display: flex;
        flex-direction: column;

        .section {
          // padding: 20px 0;

          h3 {
            display: flex;
            align-items: center;
            height: 100%;
            padding-bottom: 20px;
          }
        }
      }
    }
  }
}

.DetailInfo.rtl {
  .wrapper {
    .layout {
      flex-direction: row-reverse;
      .area {
        .section {
          display: flex;
          flex-direction: row-reverse;
          justify-content: flex-start;

          /deep/.together-text {
            margin-left: 0 !important;
            margin-right: 5px;
          }
          h3 {
          }
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .DetailInfo {
    margin: 20px 0;

    .wrapper {
      .layout {
        flex-direction: column;
        .area {
          margin: 10px 0;

          .section {
            display: flex;
            justify-content: space-between;
            h3 {
            }
          }
        }
      }
    }
  }

  .DetailInfo.rtl {
    .wrapper {
      .layout {
        flex-direction: column;
        .area {
          .section {
            flex-direction: row-reverse;

            /deep/.together-text {
            }
            h3 {
            }
          }
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .DetailInfo {
    margin: 20px 0;

    .wrapper {
      .layout {
        flex-direction: column;
        .area {
          margin: 10px 0;

          .section {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h3 {
            }
          }
        }
      }
    }
  }

  .DetailInfo.rtl {
    .wrapper {
      .layout {
        flex-direction: column;
        .area {
          .section {
            flex-direction: column;
            justify-content: center;
            align-items: center;

            /deep/.together-text {
            }
            h3 {
            }
          }
        }
      }
    }
  }
}
</style>
