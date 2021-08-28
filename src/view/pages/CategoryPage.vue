<template>
  <div class="CategoryPage">
    <div class="subpage-content">
      <div class="wrapper">
        <div class="layout">
          <div class="section">
            <ButtonSelect
              :ButtonSelectData="Data.CategoryPage.ButtonSelectData"
            />
            <Categories :CategoriesData="Data.CategoryPage.CategoriesData" />
          </div>

          <div class="section">
            <TopInfo :TopInfoData="Data.CategoryPage.TopInfoData" />
            <CategoryGallery
              :Heading="Data.ProfilePage.CategoryGalleryData.Heading2"
              :CategoryGalleryData="Data.ProfilePage.CategoryGalleryData"
            />
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
  props: {
    Data: Object,
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
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

@media (max-width: 700px) {
  .CategoryPage {
    .subpage-content {
      .wrapper {
        .layout {
          width: 100%;
          display: flex;
          flex-direction: column;
          .section {
            display: flex;
            width: 100%;
            flex-direction: column;
          }

          .section:first-child {
            width: 100%;
            margin-right: 25px;
            margin-bottom: 25px;
          }
        }
      }
    }
  }
}
</style>
