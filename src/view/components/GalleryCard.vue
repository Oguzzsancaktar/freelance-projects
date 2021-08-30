<template>
  <div
    v-scrollanimation
    :class="`card ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`"
  >
    <div v-scrollanimation class="card__layout">
      <div class="card__image">
        <router-link to="detail">
          <a>
            <div class="card__image__hover">
              <Button
                style="margin:5px"
                background="transparent"
                radius="0px"
                type="icon"
                iconType="details"
                width="55px"
                height="55px"
                iconColor="var(--background-white)"
                border="1px solid transparent"
                margin="0 10px"
                iconWidth="55px"
                iconHeight="55px"
                padding="0px"
                iconAreaW="auto"
              />
            </div>
            <ImageView
              width="100%"
              height="100%"
              imageType="images"
              :imageName="data.Image"
            />
          </a>
        </router-link>
      </div>
      <div class="card__info">
        <div class="info__layout">
          <div v-scrollanimation class="info__row">
            <div v-scrollanimation class="row__item">
              <span v-scrollanimation class="text">
                {{ AppLang == "en" ? "Property ID: " : "Ar Prop Id: " }}
              </span>
              <span v-scrollanimation class="text"> {{ data.PropID }}</span>
            </div>
            <div class="row__item">
              <router-link to="/profile">
                <Button
                  v-scrollanimation
                  style="margin:5px"
                  background="var(--color-secondary-low-button)"
                  radius="10px"
                  type="icon"
                  iconType="hearth"
                  width="44px"
                  height="36px"
                  iconColor="var(--color-secondary)"
                  border="1px solid var(--color-secondary)"
                  padding="0 10px"
                  margin="0 10px"
                  iconWidth="19px"
                  iconHeight="18px"
                  iconAreaW="auto"
                  hoverClass="hover-primary"
                />
              </router-link>

              <Button
                v-scrollanimation
                color="var(--color-primary)"
                textColor="var(--color-primary)"
                width="100px"
                background="var(--color-primary-low-button)"
                :text="data.AdvertType"
                radius="10px"
                type="together"
                border="1px solid var(--color-primary)"
                iconType="rentSale"
                height="35px"
                iconColor="var(--color-primary)"
                padding="0 10px"
                margin="0"
                iconWidth="20px"
                iconHeight="16px"
                family="var(--font-medium)"
                fontSize="14px"
                iconAreaW="auto"
              />
            </div>
          </div>

          <div class="info__col">
            <h2 v-scrollanimation class="header">
              {{ data.Header }}
            </h2>

            <span v-scrollanimation class="subtitle">
              {{ data.Description }}
            </span>
          </div>

          <div class="info__row">
            <h2 v-scrollanimation class="price">{{ data.Price }}</h2>
            <Button
              color="var(--color-secondary)"
              textColor="var(--color-text-general)"
              width="100px"
              :text="data.Location"
              radius="10px"
              type="together"
              border="1px solid transparent"
              iconType="maps"
              height="35px"
              iconColor="var(--color-secondary)"
              padding="0 10px"
              margin="0"
              iconWidth="20px"
              iconHeight="16px"
              family="var(--font-medium)"
              fontSize="14px"
              iconAreaW="auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import ImageView from "./ImageView.vue";
export default {
  name: "GalleryCard",
  props: {
    data: Object,
    ApplicationLanguage: String,
  },
  components: { ImageView, Button },
  data: function() {
    let AppLang = localStorage.ApplicationLanguage;
    return { AppLang };
  },
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 0 5px -5px var(--box-shadow-color);

  overflow: hidden;
  position: relative;
  border-radius: 10px;
  height: 500px;
  width: 380px;
  background: var(--background-white);
  margin: 15px 0;

  &__layout {
    display: flex;
    flex-direction: column;
  }
  &__image {
    position: relative;

    width: 100%;
    height: 233px;
    border-radius: 10px;

    &__hover {
      transition: 0.4s;

      border-radius: 10px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      transition: 0.5s;
      position: absolute;
      top: 0;
      left: 0;
      background: var(--color-primary-low);
      opacity: 0;

      /deep/ .default-button {
        cursor: pointer;
      }
    }
    &__hover:hover {
      transition: 0.4s;
      opacity: 1;

      cursor: pointer;
      transition: 0.5s;
    }
  }
  &__info {
    padding: 20px 25px;
    height: 270px;

    .info__layout {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .info__row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        .price {
          color: var(--color-primary);
          font-size: 26px;
        }
        .row__item {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .text {
            color: var(--color-card-id);
            font-size: 14px;
            font-family: var(--font-medium);
          }
        }
      }

      .info__col {
        display: flex;
        flex-direction: column;
        .header {
          color: var(--color-text-black);
          font-size: 23px;
          font-family: var(--font-semibold);
          margin-bottom: 10px;
        }
        .subtitle {
          margin-top: 10px;

          color: var(--color-text-gray-dark);
          font-size: 15px;
          font-family: var(--font-semilight);
        }
      }
    }
  }
}

.card.rtl {
  .card__layout {
  }
  .card__image {
    &__hover {
      /deep/ .default-button {
        cursor: pointer;
      }
    }
    &__hover:hover {
    }
  }
  .card__info {
    .info__layout {
      .info__row {
        flex-direction: row-reverse;
        .price {
        }
        .row__item {
          flex-direction: row-reverse;

          .text {
          }
        }
      }

      .info__col {
        .header {
          text-align: right;
        }
        .subtitle {
          text-align: right;
        }
      }
    }
  }
}

@media (max-width: 1300px) {
  .card {
    position: relative;
    border-radius: 10px;

    width: 32%;
    background: var(--background-white);
    margin: 15px 0;

    &__layout {
    }
    &__image {
      &__hover {
      }
      &__hover:hover {
      }
    }
    &__info {
      padding: 20px 15px;
      .info__layout {
        .info__row {
          .price {
          }
          .row__item {
            .text {
            }
          }
        }

        .info__col {
          .header {
          }
          .subtitle {
          }
        }
      }
    }
  }
}

@media (max-width: 1150px) {
  .card {
    position: relative;
    border-radius: 10px;
    height: 460px;
    width: 49%;
    background: var(--background-white);
    margin: 15px 0;

    &__layout {
    }
    &__image {
      &__hover {
      }
      &__hover:hover {
      }
    }
    &__info {
      padding: 10px 25px;
      height: 230px;
      .info__layout {
        .info__row {
          .price {
          }
          .row__item {
            .text {
            }
          }
        }

        .info__col {
          .header {
          }
          .subtitle {
          }
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .card {
    width: 100%;
    background: var(--background-white);
    margin: 15px 0;

    &__layout {
    }
    &__image {
      height: 200px;
      &__hover {
      }
      &__hover:hover {
      }
    }
    &__info {
      padding: 20px 15px;
      .info__layout {
        .info__row {
          .price {
          }
          .row__item {
            .text {
            }
          }
        }

        .info__col {
          .header {
          }
          .subtitle {
          }
        }
      }
    }
  }
}
</style>
