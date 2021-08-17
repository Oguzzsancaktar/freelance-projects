<template>
  <div class="CategoryInput">
    <ul class="list">
      <li class="item">
        <div class="item__layout">
          <div class="heading">
            <h3>
              {{ header }}
            </h3>
          </div>
          <div class="content">
            <ul class="content__list">
              <li class="content__list__item">
                <input type="number" />
                <span v-if="type == 'dolar'" class="icon">$</span>
                <span v-if="type == 'm2'" class="icon">m2</span>
              </li>

              <li class="content__list__item">
                <input type="number" />
                <span v-if="type == 'dolar'" class="icon">$</span>
                <span v-if="type == 'm2'" class="icon">m2</span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CategoryInput",
  props: {
    selectList: {
      type: Array,
    },
    header: {
      type: String,
      default: "You Forgot Header ! :D",
    },
  },
};
</script>

<style lang="scss" scoped>
.CategoryInput {
  display: flex;
  align-items: center;
  width: 100%;

  .list {
    width: 100%;

    list-style: none;
    .item {
      width: 100%;

      &__layout {
        width: 100%;

        .heading {
          h3 {
            display: flex;
            align-items: center;
            height: 100%;
            border-bottom: 1px solid var(--background-general);
            padding: 20px 0;
            color: var(--color-primary);
          }
        }

        .content {
          width: 100%;

          &__list {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            justify-content: space-between;
            &__item {
              width: 110px;
              display: inline-flex;
              align-items: center;
              border: 1px solid var(--color-text-gray-light);
              border-radius: 10px;

              span {
                color: var(--color-text-gray-light);
                display: flex;
                align-items: center;
                justify-content: center;
                width: 20%;
                height: 100%;

                border-left: 1px solid var(--color-text-gray-light);
              }
              input {
                color: var(--color-text-gray-light);

                padding: 10px 20px;
                border-radius: 10px;
                width: 80%;
                font-size: 18px;
                border: none;
                outline: none;
              }
              input::-webkit-outer-spin-button,
              input::-webkit-inner-spin-button {
                /* display: none; <- Crashes Chrome on hover */
                -webkit-appearance: none;
                margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
              }

              input[type="number"] {
                -moz-appearance: textfield; /* Firefox */
              }
            }
          }
        }
      }
    }
  }
}
</style>
