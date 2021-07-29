<template>
  <div id="Homepage">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  name: "Homepage",
};
</script>

<style lang="scss" scoped>
#Homepage {
  background: var(--background-general);
}
</style>
