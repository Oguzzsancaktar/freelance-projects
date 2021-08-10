<template>
  <div class="hero__search__mobile">
    <SearchSelect class="item" text="Type" />
    <SearchSelect class="item" text="City" />
    <SearchInput class="item" text="Size" subText="Accusantium" />
    <SearchAddNew class="item" text="Advanced" subText="Accusantium" />
    <div class="hero__search__mobile__button">
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
        iconAreaW="150px"
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
.hero__search__mobile {
  border-radius: 20px;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-white);

  .item {
    border-bottom: 1px solid var(--background-gray-light);
  }
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: var(--color-secondary);
    width: 100%;
    height: 60px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
}

@media (max-width: 777px) {
  .hero__search__mobile {
    width: 100%;
    height: 100%;
    background: var(--background-white);
    display: block;
    margin: auto;

    .search__add__new {
      margin: 10px 5px;
    }
    &__button {
      background: var(--color-secondary);
    }
  }
}
</style>
