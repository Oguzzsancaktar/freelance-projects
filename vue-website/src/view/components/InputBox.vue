<template>
  <div
    :class="`InputBox ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`"
    :style="`padding:${padding}!important`"
  >
    <div
      :style="
        `border:${border}; border-radius:30px; height:${height} ; margin:${margin}; width:${width}; `
      "
      class="aselect"
    >
      <p :style="`font-family:${family}; color:${textColor}`">
        {{ text }} <b v-if="isRequired">*</b>
      </p>

      <input type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputBox",
  props: {
    text: String,
    border: {
      type: String,
      default: "1px solid transparent",
    },
    margin: {
      type: String,
      default: " ",
    },
    padding: {
      type: String,
      default: " ",
    },
    height: {
      type: String,
      default: " ",
    },
    width: {
      type: String,
      default: " ",
    },
    labelColor: {
      type: String,
      default: " ",
    },
    specialStyle: {
      type: String,
      default: " ",
    },

    borderRadius: {
      type: String,
      default: "30px",
    },
    List: {
      type: Array,
    },
    textColor: {
      type: String,
    },
    placeholder: {
      type: String,
      default: " Select ",
    },
    family: {
      type: String,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    ApplicationLanguage: String,
  },
};
</script>

<style lang="scss" scoped>
.InputBox {
  width: 100%;

  p {
    font-size: 14px;
    color: var(--color-text-gray-light);
    font-family: var(--font-medium);
    margin-bottom: 5px;

    b {
      margin-top: 10px;
      color: var(--color-primary);
      font-size: 20px;
    }
  }

  input {
    border-radius: 25px;
    border: 1px solid var(--color-card-border);
    padding: 10px 25px;
    width: 100%;
    outline: none;
    transition: 0.4s;
  }
  input:hover,
  input:focus {
    transition: 0.4s;

    border: 1px solid var(--color-primary);
  }
}

.InputBox.rtl {
  p {
    text-align: right;
    margin-right: 8px;

    b {
    }
  }

  input {
    text-align: right;
  }
  input:hover,
  input:focus {
  }
}

@media (max-width: 777px) {
  .InputBox {
  }
}
</style>
