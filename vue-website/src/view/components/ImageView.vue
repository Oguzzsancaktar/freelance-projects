<template>
  <div id="ImageView">
    <div :style="` height:${height}; ; width:${width} `" class="image__area">
      <img :src="image" :alt="imageName" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageView",
  props: {
    imageName: { type: String, default: "" },
    imageType: { type: String, default: "images" },

    width: { type: [Number, String], default: " " },
    height: { type: [Number, String], default: " " },
  },

  data() {
    return {
      image: require(`../../assets/${this.imageType}/${this.imageName}`),
    };
  },
};
</script>

<style lang="scss" scoped>
#ImageView {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
