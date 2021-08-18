<template>
  <div class="BoostAdverPage">
    <div class="subpage-content">
      <TopBar />
      <PageHeading
        header="İlanı Öne Çıkar Hızlı Sonuçlara Ulaş !"
        description="İlanınızı öne çıkararak daha çok alıcıya daha hızlı şekilde ulaşabilirsiniz."
      />
    </div>
  </div>
</template>

<script>
import PageHeading from "../components/PageHeading.vue";
import TopBar from "../components/TopBar.vue";
export default {
  components: { TopBar, PageHeading },
  name: "BoostAdverPage",
};
</script>

<style lang="scss" scoped>
.BoostAdverPage {
}
</style>
