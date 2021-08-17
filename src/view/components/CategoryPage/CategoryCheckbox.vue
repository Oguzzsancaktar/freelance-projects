<template>
  <div class="CategoryCheckbox">
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
              <li
                v-for="(item, index) in selectList"
                :key="index"
                class="content__list__item"
              >
                <input type="checkbox" :name="item" />
                <label for="check"> {{ item }} </label>
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
  name: "CategoryCheckbox",
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
.CategoryCheckbox {
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
              display: flex;
              align-items: center;
              padding: 5px 0;
              /* custom checkbox */

              label {
                font-size: 13px;
              }
              input[type="checkbox"] {
                transition: 0.4s;
                cursor: pointer;

                height: 25px;
                width: 25px;
                margin: 0;
                padding: 0;
                opacity: 1;
                appearance: none;
                border: 2px solid var(--background-general);
                border-radius: 5px;
                background: #fff;
                position: relative;
                margin-right: 10px;
              }

              input[type="checkbox"]:checked {
                transition: 0.4s;

                border: 2px solid var(--color-primary);
                background: var(--background-white);
              }

              input[type="checkbox"]:checked:before,
              input[type="checkbox"]:checked:after {
                transition: 0.4s;

                content: "";
                position: absolute;
                border-radius: 3px;
                height: 12px;
                background: var(--color-primary);
              }

              //   input[type="checkbox"]:checked:before {
              //     width: 15px;
              //     left: 50%;
              //     top: 50%;
              //     // transform: rotate(44deg);
              //   }

              input[type="checkbox"]:checked:after {
                transition: 0.4s;
                width: 12px;
                left: 4.9px;
                top: 4.9px;
                // transform: rotate(-55deg);
              }

              input[type="checkbox"]:focus {
                outline: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
