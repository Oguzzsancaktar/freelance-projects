<template>
  <div class="search__input">
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
  },
};
</script>

<style lang="scss" scoped>
.search__input {
  margin: 20px auto;
  width: 120px;
  padding: 0 15px;
  p {
    font-size: 14px;
    color: var(--color-text-gray-light);
    font-family: var(--font-medium);
    margin-bottom: 5px;
  }
  input {
    margin-top: 5px;
    font-size: 17px;
    color: var(--color-text-gray);
    font-family: var(--font-medium);

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

@media (max-width: 777px) {
  .search__input {
    width: 100%;
    padding: 0 15px;
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
