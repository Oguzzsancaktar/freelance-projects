<template>
  <div class="DetailTop">
    <div class="wrapper">
      <div class="layout">
        <div class="area">
          <div class="home-button">
            <router-link to="/">
              <Button
                background="transparent"
                family="var(--font-medium)"
                radius="30px"
                color="white"
                type="icon"
                iconType="house"
                width="60px"
                padding="0 10px"
                iconColor="var(--color-primary)"
                iconWidth="30px"
                iconHeight="26px"
                fontSize="15px"
                direction="center"
              />
            </router-link>
          </div>
          <span> {{ DetailTopData.Header }}</span>
        </div>

        <div class="area">
          <div>
            <Button
              family="var(--font-medium)"
              color="dark"
              textColor="var(--color-general-dark)"
              :text="DetailTopData.Btn1"
              textAlign="left"
              type="together"
              iconType="gallery"
              iconColor="var(--color-primary)"
              background="transparent"
              radius="0"
              width="110px"
              padding="0 0px"
              iconWidth="22px"
              iconHeight="21px"
              fontSize="15px"
              iconAreaW="auto"
              direction="center"
            />
          </div>

          <div>
            <Button
              family="var(--font-medium)"
              color="dark"
              textColor="var(--color-general-dark)"
              :text="DetailTopData.Btn2"
              textAlign="left"
              type="together"
              iconType="share"
              iconColor="var(--color-primary)"
              background="transparent"
              radius="0"
              width="80px"
              padding="0 0px"
              iconWidth="30px"
              iconHeight="30px"
              fontSize="15px"
              iconAreaW="25px"
            />
          </div>

          <div>
            <router-link to="/profile">
              <Button
                family="var(--font-medium)"
                color="dark"
                textColor="var(--color-general-dark)"
                :text="DetailTopData.Btn3"
                textAlign="left"
                type="together"
                iconType="favorites"
                iconColor="var(--color-primary)"
                background="transparent"
                radius="0"
                width="110px"
                padding="0 0px"
                iconWidth="22px"
                iconHeight="21px"
                fontSize="15px"
                iconAreaW="auto"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  name: "DetailTop",
  components: { Button },
  props: {
    DetailTopData: Object,
  },
};
</script>

<style lang="scss" scoped>
.DetailTop {
  margin: 20px 0;
  height: 60px;

  .wrapper {
    height: 100%;

    .layout {
      height: 100%;
      border-radius: 5px;
      width: 100%;
      background: var(--background-white);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .area {
        height: 100%;
        display: flex;
        align-items: center;
        // justify-content: space-between;

        div {
          height: 100%;
          text-decoration: none;
          width: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid var(--background-general);
          border-left: 1px solid var(--background-general);
          cursor: pointer;
          /deep/ button {
            cursor: pointer;
          }
        }

        span {
          line-height: 15px;

          margin-left: 10px;
        }

        .home-button {
          border-right: 1px solid var(--background-general);
        }
      }
      .area:first-child {
        // width: 60%;
        max-width: 600px;
        div {
          width: 80px;
          /deep/ button {
            cursor: pointer;
          }
        }
      }
      .area:last-child {
        // width: 40%;
        justify-content: flex-end;

        div {
          border-bottom: 2px solid transparent;
          transition: 0.4s;
        }

        div:hover {
          transition: 0.4s;
          background-image: linear-gradient(
            to top,
            var(--color-primary-low) -200%,
            rgb(255, 255, 255) 50%
          );

          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;

          border-bottom: 2px solid var(--color-primary);
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .DetailTop {
    height: auto;
    .wrapper {
      height: 100%;

      .layout {
        flex-direction: column;
        height: auto;
        .area {
          margin: 10px 0;
          a {
          }

          span {
          }

          .home-button {
          }
        }
        .area:first-child {
          // width: 60%;
          a {
          }
        }
        .area:last-child {
          a {
          }

          a:hover {
          }
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .DetailTop {
    .wrapper {
      .layout {
        padding: 0 20px;
        flex-direction: column;
        height: auto;
        .area {
          flex-direction: column;
          height: auto;
          margin: 10px 0;
          border: transparent;

          div {
            border: transparent;
          }

          span {
            text-align: center;
          }

          .home-button {
            border: transparent;
          }
        }
        .area:first-child {
          // width: 60%;
          a {
          }
        }
        .area:last-child {
          a {
          }

          a:hover {
          }
        }
      }
    }
  }
}
</style>
