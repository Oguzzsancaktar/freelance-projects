<template>
  <div class="hero__search__mobile">
    <SearchSelect
      v-for="(item, index) in HeroSearchData.SearchSelectData"
      :key="index"
      :text="item.Text"
      :list="item.List"
      :zIndex="index"
    />
    <SearchInput
      :text="HeroSearchData.SearchInputData.Text"
      :subText="HeroSearchData.SearchInputData.SubText"
    />
    <SearchAddNew
      @show-advenced="showAdvenced"
      :text="HeroSearchData.SearchAddNewData.Text"
      :subText="HeroSearchData.SearchAddNewData.SubText"
    />
    <router-link to="/category">
      <div class="hero__search__mobile__button">
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
    </router-link>
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
  methods: {
    showAdvenced: function() {
      this.$emit("show-advenced");
    },
  },
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
    cursor: pointer;
    transition: 0.4s;
    text-decoration: none;

    /deep/ button {
      text-decoration: none;
      cursor: pointer;
      .together-text {
        text-decoration: none !important;
        margin-bottom: 0;
      }
    }
  }

  &__button:hover {
    transition: 0.4s;
    background: var(--color-primary);
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
      margin: 10px 0px;
    }
    &__button {
      background: var(--color-secondary);
      transition: 0.4s;
      cursor: pointer;

      /deep/ button {
        text-decoration: none;
        cursor: pointer;
        .together-text {
          text-decoration: none !important;
          margin-bottom: 0;
        }
      }
    }
    &__button:hover {
      transition: 0.4s;
      background: var(--color-primary);
    }
  }
}
</style>
