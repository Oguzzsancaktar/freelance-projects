<template>
  <div :class="`Checkbox ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <input type="checkbox" :name="item" />
    <label for="check"> {{ item }} </label>
  </div>
</template>

<script>
export default {
  name: "Chexkbox",
  props: {
    ApplicationLanguage: String,
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
  background: #fff;

  /* custom checkbox */
  input[type="checkbox"] {
    cursor: pointer;
    transition: 0.4s;

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
    transition: 0.4s;
    border: 2px solid var(--color-primary);
    background: #fff;
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

.Checkbox.rtl {
  flex-direction: row-reverse;
  input {
    margin-left: 10px;
  }
}
</style>
