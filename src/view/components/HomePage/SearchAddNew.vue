<template>
  <div class="search__add__new">
    <p>{{ text }}</p>
    <Button
      background="transparent"
      text="Other options"
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
};
</script>

<style lang="scss" scoped>
.search__add__new {
  padding: 0 10px;
  text-align: start;
  // margin: 20px auto;
  width: 25%;

  p {
    font-size: 14px;
    color: var(--color-text-gray-light);
    font-family: var(--font-medium);
    margin-bottom: 5px;
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
