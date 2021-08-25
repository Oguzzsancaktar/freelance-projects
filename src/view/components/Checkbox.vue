<template>
  <div class="Checkbox">
    <input type="checkbox" :name="item" />
    <label for="check"> {{ item }} </label>
  </div>
</template>

<script>
export default {
  name: "Chexkbox",
  props: {
    item: {
      type: String,
      default: " ",
    },
  },
};
</script>

<style lang="scss" scoped>
.Checkbox {
  display: flex;
  align-items: center;
  /* custom checkbox */
  input[type="checkbox"] {
    cursor: pointer;

    height: 25px;
    width: 25px;
    margin: 0;
    padding: 0;
    opacity: 1;
    appearance: none;
    border: 2px solid var(--background-general);
    border-radius: 5px;
    background: #fff;
    position: relative;
    margin-right: 10px;
  }

  input[type="checkbox"]:hover {
    border: 2px solid var(--color-primary);
  }

  input[type="checkbox"]:checked {
    border: 2px solid var(--color-primary);
    background: var(--color-primary);
  }

  input[type="checkbox"]:checked:before,
  input[type="checkbox"]:checked:after {
    content: "";
    position: absolute;
    height: 2px;
    background: #fff;
  }

  input[type="checkbox"]:checked:before {
    width: 8px;
    top: 12px;
    left: 2px;
    transform: rotate(44deg);
  }

  input[type="checkbox"]:checked:after {
    width: 14px;
    top: 9px;
    left: 6px;
    transform: rotate(-55deg);
  }

  input[type="checkbox"]:focus {
    outline: none;
  }
}
</style>
