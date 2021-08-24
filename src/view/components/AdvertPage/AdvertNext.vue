<template>
  <div class="AdvertNext">
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

        <button>
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

          span {
            width: 100%;
            b {
            }
          }
        }
        button {
          cursor: pointer;
          margin-top: 20px;
          max-width: none;
          width: 100%;
        }
      }
    }
  }
}
</style>
