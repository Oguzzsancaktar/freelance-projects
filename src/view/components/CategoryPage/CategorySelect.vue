<template>
  <ul class="CategoryInput">
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
              <SelectBox
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
import SelectBox from "../SelectBox.vue";

export default {
  name: "CategoryInput",
  components: { SelectBox },
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
.CategoryInput {
  list-style: none;
  .item {
    &__layout {
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
    }

    .content {
      &__list {
        list-style: none;
        &__item {
        }
      }
    }
  }
}
</style>
