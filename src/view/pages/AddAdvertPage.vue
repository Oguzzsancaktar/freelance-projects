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
import AdvertCategory from "../components/AdvertPage/AdvertCategory.vue";
import AdvertInformation from "../components/AdvertPage/AdvertInformation.vue";
import AdvertAdress from "../components/AdvertPage/AdvertAdress.vue";

import TopBar from "../components/TopBar.vue";
import AdvertPhotos from "../components/AdvertPage/AdvertPhotos.vue";
import AdvertFeatures from "../components/AdvertPage/AdvertFeatures.vue";
import AdvertNext from "../components/AdvertPage/AdvertNext.vue";
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
