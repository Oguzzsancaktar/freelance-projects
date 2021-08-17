<template>
  <div class="Categories">
    <div class="layout">
      <ul class="list">
        <li class="item">
          <CategorySelect header="Location" :categoryList="this.locationList" />
        </li>

        <li class="item">
          <CategoryCheckbox header="Categories" :selectList="selectList" />
        </li>
        <li class="item">
          <CategorySelect
            header="Housing Type"
            :categoryList="this.housingType"
          />
        </li>
        <li class="item">
          <CategoryInput header="Price" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CategoryCheckbox from "./CategoryCheckbox.vue";
import CategoryInput from "./CategoryInput.vue";
import CategorySelect from "./CategorySelect.vue";
export default {
  components: { CategorySelect, CategoryCheckbox, CategoryInput },
  name: "Categories",
  data: function() {
    return {
      locationList: ["Select City", "Select City", "Select City"],
      housingType: ["Select City"],
      selectList: [
        "Select City",
        "Select City",
        "Select City",
        "Select City",
        "Select City",
        "Select City",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.Categories {
  background: var(--background-white);

  padding: 0 20px;
  .layout {
    display: flex;
    flex-direction: column;
    width: 100%;

    .list {
      list-style: none;
    }
  }
}
</style>
