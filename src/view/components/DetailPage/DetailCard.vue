<template>
  <div :class="`card ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="card__layout">
      <a href="/detail">
        <div class="card__image">
          <div class="card__image__hover">
            <Button
              :ApplicationLanguage="ApplicationLanguage"
              v-scrollanimation
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
            />
          </div>
          <ImageView
            v-scrollanimation
            width="100%"
            height="100%"
            imageType="images"
            imageName="cardImage-1.jpg"
          />
        </div>
      </a>
      <div class="card__info">
        <div class="info__layout">
          <div class="info__row">
            <div class="row__item">
              <Button
                :ApplicationLanguage="ApplicationLanguage"
                v-scrollanimation
                color="var(--color-secondary)"
                textColor="var(--color-text-general)"
                width="100%"
                :text="data.Location"
                radius="10px"
                type="together"
                border="1px solid transparent"
                iconType="maps"
                height="35px"
                iconColor="var(--color-secondary)"
                padding="0 0px"
                margin="0"
                iconWidth="20px"
                iconHeight="16px"
                family="var(--font-medium)"
                fontSize="12px"
                iconAreaW="auto"
              />
            </div>
            <div class="row__item">
              <Button
                :ApplicationLanguage="ApplicationLanguage"
                v-scrollanimation
                color="var(--color-primary)"
                textColor="var(--color-primary)"
                width="70px"
                background="var(--color-primary-low-button)"
                :text="data.Type"
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

              <router-link to="/profile">
                <Button
                  :ApplicationLanguage="ApplicationLanguage"
                  v-scrollanimation
                  style="margin:5px"
                  background="var(--color-secondary-low-button)"
                  radius="10px"
                  type="icon"
                  iconType="hearth"
                  width="40px"
                  height="36px"
                  iconColor="var(--color-secondary)"
                  border="1px solid var(--color-secondary)"
                  padding="0 10px"
                  margin="0 10px"
                  iconWidth="19px"
                  iconHeight="18px"
                  hoverClass="hover-primary"
                />
              </router-link>
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
            <h2 class="price">{{ data.Price }}</h2>
            <div class="refferance">
              <ImageView
                v-scrollanimation
                width="80%"
                height="auto"
                imageType="images"
                imageName="refferance-logo-0.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import ImageView from "../ImageView.vue";
export default {
  name: "DetailCard",
  components: { ImageView, Button },
  props: {
    ApplicationLanguage: String,

    data: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  // height: 425px;
  width: 100%;
  margin: 0 20px;
  background: var(--background-white);
  min-width: 250px;
  border: 1px solid var(--color-card-border);
  // max-width: 250px;

  &__layout {
    display: flex;
    flex-direction: column;
  }
  &__image {
    position: relative;

    width: 100%;
    height: 180px;
    border-radius: 5px;

    &__hover {
      border-radius: 5px;
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
      opacity: 1;

      cursor: pointer;
      transition: 0.5s;
    }
  }
  &__info {
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

        .refferance {
          border-left: 1px solid var(--color-card-border);

          width: 95px;
        }
        .price {
          padding: 20px;
          color: var(--color-primary);
        }
        .row__item {
          display: flex;
          align-items: center;
          // justify-content: space-between;

          .text {
            color: var(--color-card-id);
            font-size: 14px;
            font-family: var(--font-medium);
          }
        }

        .row__item:first-child {
          padding: 20px;
        }
      }
      .info__row:first-child {
        border-bottom: 1px solid var(--color-card-border);
      }
      .info__row:last-child {
        border-top: 1px solid var(--color-card-border);
      }

      .info__col {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        max-height: 100px;
        overflow: hidden;
        .header {
          color: var(--color-text-black);
          font-size: 18px;
          font-family: var(--font-semibold);
          margin-bottom: 10px;
        }
        .subtitle {
          color: var(--color-text-gray-dark);
          font-size: 15px;
          font-family: var(--font-semilight);
          line-height: 16px;
          max-height: 50px;
          overflow: hidden;
        }
      }
    }
  }
}

.card.rtl {
  .card__layout {
  }
  &__image {
    &__hover {
    }
    &__hover:hover {
    }
  }
  .card__info {
    .info__layout {
      .info__row {
        flex-direction: row-reverse;

        .price {
          border-left: 1px solid var(--color-card-border);
          padding: 15px;
        }
        .row__item {
          padding: 15px 10px;
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
    width: 100%;
    position: relative;
    border-radius: 5px;

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

// @media (max-width: 1150px) {
//   .card {
//     position: relative;
//     border-radius: 5px;
//     // height: 460px;
//     width: 49%;
//     background: var(--background-white);
//     margin: 15px 0;

//     &__layout {
//     }
//     &__image {
//       &__hover {
//       }
//       &__hover:hover {
//       }
//     }
//     &__info {
//       height: 230px;
//       .info__layout {
//         .info__row {
//           .price {
//           }
//           .row__item {
//             .text {
//             }
//           }
//         }

//         .info__col {
//           .header {
//           }
//           .subtitle {
//           }
//         }
//       }
//     }
//   }
// }

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
