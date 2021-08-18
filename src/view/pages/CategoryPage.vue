<template>
  <div class="CategoryPage">
    <div class="subpage-content">
      <div class="wrapper">
        <div class="layout">
          <div class="section">
            <ButtonSelect />
            <Categories />
          </div>

          <div class="section">
            <TopInfo />
            <CategoryGallery />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonSelect from "../components/CategoryPage/ButtonSelect.vue";
import Categories from "../components/CategoryPage/Categories.vue";
import TopInfo from "../components/CategoryPage/TopInfo.vue";
import CategoryGallery from "../components/CategoryPage/CategoryGallery.vue";
export default {
  components: {
    CategoryGallery,
    ButtonSelect,
    Categories,
    TopInfo,
  },
  name: "CategoryPage",
};
</script>

<style lang="scss" scoped>
.CategoryPage {
  .subpage-content {
    .wrapper {
      .layout {
        width: 100%;
        display: flex;
        flex-direction: row;
        .section {
          display: flex;
          width: 100%;
          flex-direction: column;
        }

        .section:first-child {
          width: 275px;
          margin-right: 25px;
          margin-bottom: 25px;
        }
      }
    }
  }
}
</style>
