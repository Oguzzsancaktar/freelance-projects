<template>
  <div class="CategoryPage">
    <Navbar />
    <div class="subpage-content">
      <div class="wrapper">
        <div class="layout">
          <div class="section">
            <ButtonSelect />
            <Categories />
          </div>

          <div class="section">
            <TopInfo />
            <!-- <GridGallery /> -->
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ButtonSelect from "../components/CategoryPage/ButtonSelect.vue";
import Categories from "../components/CategoryPage/Categories.vue";
import TopInfo from "../components/CategoryPage/TopInfo.vue";
import Footer from "../components/Footer.vue";
import GridGallery from "../components/GridGallery.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
    Footer,
    GridGallery,
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
        }
      }
    }
  }
}
</style>
