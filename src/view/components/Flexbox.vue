<template>
  <div class="masonry__gallery">
    <div class="wrapper">
      <main class="container">
        <div>
          <MasonryCard />
        </div>
        <div class="vertical">
          <MasonryCard type="long" />
        </div>

        <div>
          <MasonryCard />
        </div>
        <div>
          <MasonryCard />
        </div>
        <div>
          <MasonryCard />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import MasonryCard from "./MasonryCard.vue";
export default {
  components: { MasonryCard },
  name: "MasonryGallery",
};
</script>

<style lang="scss" scoped>
.masonry__gallery {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 850px;
  background: var(--background-white);
  .wrapper {
    .container {
      width: 100%;
      display: grid;
      grid-gap: 25px;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-auto-rows: 300px;
      grid-auto-flow: dense;
    }

    div {
      overflow: hidden;
      padding: 0;
      display: flex;
      align-items: stretch;
      justify-content: center;
    }

    .vertical {
      grid-row: span 2;
    }
  }

  @media (max-width: 676px) {
    .wrapper {
      .container {
        height: 100%;
        display: flex !important;
        flex-direction: column;
      }
    }
  }
}
</style>
