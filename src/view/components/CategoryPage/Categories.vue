<template>
  <div :class="`Categories ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="layout">
      <ul class="list">
        <li v-for="(item, index) in CategoriesData" :key="index" class="item">
          <CategorySelect
            :ApplicationLanguage="ApplicationLanguage"
            v-if="item.Type == 'select'"
            :header="item.Header"
            :categoryList="item.List"
          />
          <CategoryCheckbox
            :ApplicationLanguage="ApplicationLanguage"
            v-if="item.Type == 'check'"
            :header="item.Header"
            :selectList="item.List"
          />

          <CategoryInput
            :ApplicationLanguage="ApplicationLanguage"
            v-if="item.Type == 'input'"
            :header="item.Header"
            :selectList="item.List"
            :type="item.InputType"
          />
        </li>

        <li class="item">
          <Button
            margin="auto"
            direction="row"
            background="var(--color-primary)"
            radius="high"
            color="white"
            type="together"
            iconType="search"
            text="Search"
            iconColor="white"
            iconHeight="19px"
            iconWidth="19px"
            fontSize="16px"
            textColor="white"
            family="var(--font-semibold)"
            style="border-radius:5px"
            iconAreaW="80px"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import CategoryCheckbox from "./CategoryCheckbox.vue";
import CategoryInput from "./CategoryInput.vue";
import CategorySelect from "./CategorySelect.vue";
export default {
  components: { CategorySelect, CategoryCheckbox, CategoryInput, Button },
  name: "Categories",
  props: {
    ApplicationLanguage: String,
    CategoriesData: Array,
  },
};
</script>

<style lang="scss" scoped>
.Categories {
  border-radius: 10px;

  background: var(--background-white);

  .layout {
    display: flex;
    flex-direction: column;
    width: 100%;

    .list {
      list-style: none;

      .item:last-child {
        padding: 20px;

        /deep/ .button-together {
          margin: auto;
        }
      }
    }
  }
}

.Categories.rtl {
  .layout {
    display: flex;
    flex-direction: column;
    width: 100%;

    .list {
      list-style: none;

      .item:last-child {
        padding: 20px;

        /deep/ .button-together {
          margin: auto;
        }
      }
    }
  }
}
</style>
