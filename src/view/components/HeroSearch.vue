<template>
  <div class="hero__search">
    <SearchSelect text="Type" />
    <SearchSelect text="City" />
    <SearchInput text="Size" subText="Accusantium" />
    <SearchAddNew text="Size" subText="Accusantium" />
    <div class="hero__search__button">
      <Button
        margin="auto"
        direction="column"
        background="transparent"
        radius="high"
        color="white"
        type="together"
        iconType="search"
        text="Search"
        iconColor="white"
        iconHeight="19px"
        iconWidth="19px"
        fontSize="16px"
        textColor="white"
        family="var(--font-semibold)"
      />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import SearchAddNew from "./SearchAddNew.vue";
import SearchInput from "./SearchInput.vue";
import SearchSelect from "./SearchSelect.vue";
export default {
  components: { SearchSelect, SearchInput, Button, SearchAddNew },
  name: "HeroSearch",
};
</script>

<style lang="scss" scoped>
.hero__search {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: var(--color-secondary);
    width: 100px;
    height: 100%;
  }
}

@media (max-width: 900px) {
  .hero__search {
    flex-direction: column;
  }
}
</style>
