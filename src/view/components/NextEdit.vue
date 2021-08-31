<template>
  <div :class="`NextEdit ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="wrapper">
      <div class="layout">
        <p class="text">
          {{ NextEditData.Paragraph }}
        </p>
        <div @click="sectionControlButton(0)" class="buttons">
          <Button
            :ApplicationLanguage="ApplicationLanguage"
            color="var(--color-primary)"
            textColor="var(--color-nav-link)"
            width="100%"
            background="var(--background-white)"
            :text="NextEditData.Edit"
            radius="10px"
            type="together"
            border="1px solid transparent"
            iconType="edit"
            height="70px"
            iconColor="var(--color-primary)"
            padding="0 10px"
            margin="0"
            iconWidth="30px"
            iconHeight="28px"
            family="var(--font-semibold)"
            fontSize="23px"
            iconAreaW="auto"
            hoverClass="hover-secondary"
            justify="center"
          />

          <button @click="sectionControlButton(2)">
            <Button
              :ApplicationLanguage="ApplicationLanguage"
              color="var(--color-primary)"
              textColor="var(--background-white)"
              width="100%"
              background="var(--color-primary)"
              :text="NextEditData.Next"
              radius="10px"
              type="text"
              border="1px solid transparent"
              height="70px"
              iconColor="var(--color-primary)"
              padding="0 10px"
              margin="10px"
              iconWidth="30px"
              iconHeight="28px"
              family="var(--font-semibold)"
              fontSize="23px"
              textAlign="center"
              justify="center"
              hoverClass="hover-primary"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  name: "NextEdit",
  props: {
    NextEditData: Object,
    section: Number,
    ApplicationLanguage: String,
  },
  methods: {
    sectionControlButton: function(x) {
      this.$emit("section-control-button", x);
    },
  },
};
</script>

<style lang="scss" scoped>
.NextEdit {
  padding: 20px 0;
  .wrapper {
    .layout {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // padding: 35px 45px;
      .text {
        font-size: 22px;
        font-family: var(--font-bold);
        margin: 30px 0;
      }

      .buttons {
        button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          outline: none;
        }
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        /deep/ button {
          max-width: 300px;
          margin: 0 10px;
          text-transform: uppercase;

          .button-together {
            justify-content: center;
          }
          .together-text {
            width: auto;
            text-transform: uppercase;
          }
        }
      }
    }
  }
}

.NextEdit.rtl {
  .wrapper {
    .layout {
      .text {
        text-align: right;
      }

      .buttons {
        flex-direction: row-reverse;
        button {
        }
        /deep/ button {
          .button-together {
          }
          .together-text {
          }
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .NextEdit {
    padding: 20px 0;
    .wrapper {
      .layout {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        // padding: 35px 45px;
        .text {
          font-size: 22px;
          font-family: var(--font-bold);
          margin: 30px 0;
        }

        .buttons {
          flex-direction: column;
          button {
            border: none;
            outline: none;

            margin: 5px 0;
          }
        }
      }
    }
  }

  .NextEdit.rtl {
    .wrapper {
      .layout {
        .text {
          text-align: right;
        }

        .buttons {
          flex-direction: column;
          button {
          }
          /deep/ button {
            .button-together {
            }
            .together-text {
            }
          }
        }
      }
    }
  }
}
</style>
