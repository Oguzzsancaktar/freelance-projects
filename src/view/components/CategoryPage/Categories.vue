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
          <CategoryInput type="dolar" header="Price" />
        </li>
        <li class="item">
          <CategoryInput type="m2" header="Square Meters" />
        </li>

        <li class="item">
          <CategoryCheckbox header="Number Of Rooms" :selectList="selectList" />
        </li>

        <li class="item">
          <CategoryCheckbox header="Building Age" :selectList="selectList" />
        </li>

        <li class="item">
          <CategoryCheckbox header="Floor Location" :selectList="selectList" />
        </li>

        <li class="item">
          <CategoryCheckbox
            header="Number Of Floors In The Building"
            :selectList="selectList"
          />
        </li>

        <li class="item">
          <CategoryCheckbox header="Title Status" :selectList="selectList" />
        </li>

        <li class="item">
          <CategoryCheckbox header="Front" :selectList="selectList" />
        </li>

        <li class="item">
          <Button
            margin="auto"
            direction="column"
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
  border-radius: 10px;

  background: var(--background-white);

  padding: 0px 20px;
  .layout {
    display: flex;
    flex-direction: column;
    width: 100%;

    .list {
      list-style: none;

      .item:last-child {
        padding: 20px 0;
      }
    }
  }
}
</style>
