<template>
  <div :class="`search__input ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <p>{{ text }}</p>
    <input :value="subText" :placeholder="subText" />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    text: String,
    subText: String,
    ApplicationLanguage: String,
  },
  data: function() {
    return {
      activeTab: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.search__input {
  // margin: auto;
  width: 20%;
  padding: 0 15px;
  cursor: pointer;
  p {
    font-size: 14px;
    color: var(--color-text-gray-light);
    font-family: var(--font-medium);
    margin-bottom: 5px;
  }
  input {
    // margin-top: 5px;
    font-size: 17px;
    color: var(--color-text-gray);
    font-family: var(--font-medium);
    width: 120px;
    border: 1px solid transparent;
    outline: none;
  }

  input:focus {
    font-size: 17px;
    color: var(--color-text-gray);
    font-family: var(--font-medium);
    border-bottom: 1px solid var(--color-primary);
    outline: none;
  }

  input::placeholder {
    font-size: 17px;
    color: var(--color-text-gray);
    font-family: var(--font-medium);
  }
}

.search__input.rtl {
  p {
    text-align: right;
  }
  input {
    text-align: right;
  }

  input:focus {
    text-align: right;
  }

  input::placeholder {
    text-align: right;
  }
}

@media (max-width: 777px) {
  .search__input {
    width: 90%;
    padding: 0 0px;
    margin: 0 auto;
    p {
      font-size: 14px;
      color: var(--color-text-gray-light);
      font-family: var(--font-medium);
      margin-bottom: 5px;
    }
    input {
      width: 100%;

      margin-top: 5px;
      font-size: 17px;
      color: var(--color-text-gray);
      font-family: var(--font-medium);

      border: 1px solid transparent;
      outline: none;
    }

    input:focus {
      width: 100%;

      font-size: 17px;
      color: var(--color-text-gray);
      font-family: var(--font-medium);
      border-bottom: 1px solid var(--color-primary);
      outline: none;
    }

    input::placeholder {
      font-size: 17px;
      color: var(--color-text-gray);
      font-family: var(--font-medium);
    }
  }
}
</style>
