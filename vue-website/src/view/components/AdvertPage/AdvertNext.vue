<template>
  <div :class="`AdvertNext ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="wrapper">
      <div class="layout">
        <div class="check-terms">
          <Checkbox />
          <span
            >{{ AdvertNextData.ReadAccept
            }}<b>{{ AdvertNextData.AdvertRules }}</b
            >.</span
          >
        </div>

        <button class="hover-primary" @click="sectionControlButton">
          <span> {{ AdvertNextData.Next }} </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "../Checkbox.vue";
export default {
  components: { Checkbox },
  props: {
    AdvertNextData: Object,
    section: Number,
    ApplicationLanguage: String,
  },
  methods: {
    sectionControlButton: function() {
      this.$emit("section-control-button", 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.AdvertNext {
  padding: 40px 0px;
  .wrapper {
    .layout {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .check-terms {
        display: flex;
        align-items: center;
        padding: 20px 10px;
        background: var(--background-white);
        border-radius: 10px;
        margin-left: 20px;
        span {
          b {
            color: var(--color-primary);
          }
        }
      }
      button {
        max-width: 250px;
        width: 100%;
        background: var(--color-primary);
        padding: 10px 10px;
        color: var(--background-white);
        border: 1px solid var(--color-primary);
        border-radius: 10px;
        margin-left: 20px;
        font-size: 25px;
        height: 60px;
        transition: 0.4s;
        cursor: pointer;
        span {
          text-transform: uppercase;
        }
      }
    }
  }
}

.AdvertNext.rtl {
  .wrapper {
    .layout {
      flex-direction: row-reverse;
      .check-terms {
        flex-direction: row-reverse;

        span {
          margin-right: 5px;
          b {
          }
        }
      }
      button {
        span {
        }
      }
    }
  }
}

@media (max-width: 700px) {
  .AdvertNext {
    padding: 40px 0px;
    .wrapper {
      .layout {
        flex-direction: column;
        width: 100%;

        .check-terms {
          width: 100%;
          margin-left: 0;

          span {
            width: 100%;
            b {
            }
          }
        }
        button {
          cursor: pointer;
          margin-top: 20px;
          margin-left: 0;
          max-width: none;
          width: 100%;
        }
      }
    }
  }

  .AdvertNext.rtl {
    .wrapper {
      .layout {
        flex-direction: column;
        .check-terms {
          flex-direction: row-reverse;
          justify-content: flex-end;
          text-align: right;
          span {
            margin-right: 5px;
            b {
            }
          }
        }
        button {
          span {
          }
        }
      }
    }
  }
}
</style>
