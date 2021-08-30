<template>
  <div class="hero__search ">
    <SearchSelect
      :ApplicationLanguage="ApplicationLanguage"
      v-for="(item, index) in HeroSearchData.SearchSelectData"
      :key="index"
      :text="item.Text"
      :list="item.List"
    />
    <SearchInput
      :ApplicationLanguage="ApplicationLanguage"
      :text="HeroSearchData.SearchInputData.Text"
      :subText="HeroSearchData.SearchInputData.SubText"
    />
    <SearchAddNew
      :ApplicationLanguage="ApplicationLanguage"
      @show-advenced="showAdvenced"
      :text="HeroSearchData.SearchAddNewData.Text"
      :subText="HeroSearchData.SearchAddNewData.SubText"
    />
    <div
      :class="
        `hero__search__button ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`
      "
    >
      <router-link to="/category">
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
      </router-link>
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
  props: { HeroSearchData: Object, ApplicationLanguage: String },

  methods: {
    showAdvenced: function() {
      this.$emit("show-advenced");
    },
  },
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
    width: 100px;
    height: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background: var(--color-secondary);
    transition: 0.4s;
    cursor: pointer;

    /deep/ .default-button {
      cursor: pointer;
    }
  }

  &__button:hover {
    background: var(--color-secondary-dark);
    transition: 0.4s;
  }
}

.hero__search {
  &__button.rtl {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    /deep/ .default-button {
    }
  }

  &__button:hover {
  }
}

@media (max-width: 777px) {
  .hero__search {
    display: none;
  }
}
</style>
