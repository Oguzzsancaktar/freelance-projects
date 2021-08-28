<template>
  <ul class="CategorySelect">
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
              v-for="(item, index) in categoryList"
              :key="index"
              class="content__list__item"
            >
              <CategorySelectBox
                height="auto"
                width="100%"
                :placeholder="item"
                borderRadius="10px"
                padding="0"
              />
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import CategorySelectBox from "./CategorySelectBox.vue";

export default {
  name: "CategorySelect",
  components: { CategorySelectBox },
  props: {
    categoryList: Array,
    header: {
      type: String,
      default: "You Forgot Header ! :D",
    },
  },
};
</script>

<style lang="scss" scoped>
.CategorySelect {
  list-style: none;
  .item {
    width: 100%;

    &__layout {
      width: 100%;

      .heading {
        width: 100%;
        height: 100%;

        h3 {
          display: flex;
          align-items: center;
          padding: 20px;

          border-bottom: 1px solid var(--background-general);
          color: var(--color-primary);
        }
      }
    }

    .content {
      padding: 20px 0;
      border-bottom: 1px solid var(--background-general);

      &__list {
        padding: 0 20px;

        list-style: none;
        &__item {
        }
      }
    }
  }
}
</style>
