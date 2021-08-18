<template>
  <div id="AddAdvertPage">
    <div class="subpage-content">
      <TopBar />
      <AdvertCategory />
      <AdvertInformation />
      <AdvertAdress />
      <AdvertPhotos />
      <AdvertFeatures :featuresList1="['fsdfgdfsg', 'fsdfgdfsg']" />
      <AdvertNext />
    </div>
  </div>
</template>

<script>
import AdvertCategory from "../components/AdvertCategory.vue";
import AdvertInformation from "../components/AdvertInformation.vue";
import AdvertAdress from "../components/AdvertAdress.vue";

import TopBar from "../components/TopBar.vue";
import AdvertPhotos from "../components/AdvertPhotos.vue";
import AdvertFeatures from "../components/AdvertFeatures.vue";
import AdvertNext from "../components/AdvertNext.vue";
export default {
  components: {
    TopBar,
    AdvertCategory,
    AdvertInformation,
    AdvertAdress,
    AdvertPhotos,
    AdvertFeatures,
    AdvertNext,
  },
  name: "AddAdvertPage",
};
</script>

<style lang="scss">
#AddAdvertPage {
}
</style>
