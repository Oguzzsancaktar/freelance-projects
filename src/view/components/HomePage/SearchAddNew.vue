<template>
  <div @click="showAdvenced" class="search__add__new">
    <p>{{ text }}</p>
    <Button
      background="transparent"
      :text="subText"
      radius="high"
      color="dark"
      textColor="var(--color-text-gray)"
      family="medium"
      fontSize="17px"
      type="together"
      iconType="advenced"
      width="100%"
      iconWidth="22px"
      iconHeight="22px"
      iconColor="var(--color-secondary)"
      height="30px"
      textAlign="left"
      iconAreaW="auto"
      justify="start"
      textMargin="0 0 0 3px"
    />
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  components: { Button },
  name: "SearchAddNew",
  props: {
    text: String,
    subText: String,
  },
  methods: {
    showAdvenced: function() {
      this.$emit("show-advenced");
    },
  },
};
</script>

<style lang="scss" scoped>
.search__add__new {
  padding: 0 0px;
  text-align: start;
  // margin: 20px auto;
  width: 90%;
  margin: 10px auto !important;

  p {
    font-size: 14px;
    color: var(--color-text-gray-light);
    font-family: var(--font-medium);
    // margin-bottom: 5px;
  }

  input {
    border: 1px solid transparent;
    outline: none;
    color: var(--text-color-general);
  }
  button {
    padding: 0 !important;
  }
}
</style>
