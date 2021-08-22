<template>
  <div class="hero__search">
    <SearchSelect
      v-for="(item, index) in HeroSearchData.SearchSelectData"
      :key="index"
      :text="item.Text"
      :list="item.List"
    />
    <SearchInput
      :text="HeroSearchData.SearchInputData.Text"
      :subText="HeroSearchData.SearchInputData.SubText"
    />
    <SearchAddNew
      :text="HeroSearchData.SearchAddNewData.Text"
      :subText="HeroSearchData.SearchAddNewData.SubText"
    />
    <div class="hero__search__button">
      <Button
        margin="auto"
        direction="column"
        background="transparent"
        radius="high"
        color="white"
        type="together"
        iconType="search"
        :text="HeroSearchData.Search"
        iconColor="white"
        iconHeight="19px"
        iconWidth="19px"
        fontSize="16px"
        textColor="white"
        family="var(--font-semibold)"
        iconAreaW="auto"
      />
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import SearchAddNew from "./SearchAddNew.vue";
import SearchInput from "./SearchInput.vue";
import SearchSelect from "./SearchSelect.vue";
export default {
  components: { SearchSelect, SearchInput, Button, SearchAddNew },
  name: "HeroSearch",
  props: { HeroSearchData: Object },
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
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}

@media (max-width: 777px) {
  .hero__search {
    display: none;
  }
}
</style>
