<template>
  <div
    :class="`CategorySelectBox ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`"
    :style="`padding:${padding}!important`"
  >
    <div
      :style="
        `border:${border};  height:${height} ; margin:${margin}; width:${width} ; `
      "
      class="aselect"
      :data-value="value"
      :data-list="list"
    >
      <p>{{ text }}</p>

      <div
        class="selector"
        :style="`${specialStyle};border-radius:${borderRadius};`"
        @click="toggle()"
      >
        <div class="label">
          <span :style="`color:${labelColor}!important`"> {{ value }} </span>
        </div>
        <div
          :style="`border-top-color:${labelColor}`"
          class="arrow"
          :class="{ expanded: visible }"
        ></div>
        <div :class="{ hidden: !visible, visible }">
          <ul>
            <li
              :class="{ current: item === value }"
              v-for="(item, index) in list"
              @click="select(item)"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategorySelectBox",
  props: {
    ApplicationLanguage: String,
    text: {
      type: String,
      default: " ",
    },

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
    placeholder: {
      type: String,
      default: " - ",
    },
    borderRadius: {
      type: String,
      default: "30px",
    },
  },
  data: function() {
    return {
      value: this.placeholder,
      list: ["Orange", "Apple", "Kiwi", "Lemon", "Pineapple"],
      visible: false,
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    select(option) {
      this.value = option;
    },
  },
};
</script>

<style lang="scss" scoped>
.CategorySelectBox {
  margin: 5px 0;
  padding: 0 5px;
  h1 {
    color: #f9f9f9;
    text-align: center;
    font-size: 36px;
    line-height: 1;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-family: "Mogra";
    margin-bottom: 0;
    text-shadow: 3px 4px 0px rgba(0, 0, 0, 0.3);
  }

  .aselect {
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
    width: 140px;
    margin: 20px auto;
    .selector {
      border: 1px solid var(--color-card-border);
      padding: 10px 25px;
      border-radius: 25px;
      background: transparent;
      position: relative;
      width: 100%;
      cursor: pointer;
      transition: 0.4s;

      .arrow {
        position: absolute;
        right: 20px;
        top: 40%;
        width: 15px;
        height: 15px;
        border-left: 2px solid var(--color-primary);
        border-bottom: 2px solid var(--color-primary);
        // border-top: 10px solid var(--color-text-gray-light);
        transform: rotateZ(-45deg) translateY(-10px);
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
      }
      .expanded {
        transform: rotateZ(180deg) translateY(2px);
      }
      .label {
        display: flex;
        flex-direction: column;
        //   padding: 12px;
        font-size: 16px;
        color: #888;
        background: transparent;

        span {
          margin-top: 5px;
          font-size: 17px;
          color: var(--color-text-gray);
          font-family: var(--font-medium);
        }
      }
    }

    .selector:hover {
      transition: 0.4s;
      border-color: var(--color-secondary);
    }
    ul {
      overflow: hidden;
      // background: var(--background-white);
      width: 100%;
      list-style-type: none;
      padding: 0;
      margin: 0;
      font-size: 16px;
      border: 1px solid transparent;
      position: absolute;
      z-index: 1;
      left: 0;
      top: 50px;
      border-radius: 10px;
      border: 1px solid var(--color-card-border);
    }
    li {
      border-bottom: 1px solid var(--color-card-border);
      width: 100%;
      // margin: 10px 0;
      padding: 12px;
      font-size: 17px;
      color: var(--color-text-gray-light);
      text-align: start;
      font-family: var(--font-medium);
      background: var(--background-white);
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;

      transition: border 0.4s, color 0.4s;

      &:hover {
        transition: border 0.4s, color 0.4s;

        cursor: pointer;
        color: var(--color-secondary);
        border-left: 1px solid var(--color-secondary);
      }
    }
    li:last-child {
      border-bottom: transparent;
    }
    .current {
      border-left: 1px solid var(--color-secondary);
      color: var(--color-secondary);
    }
    .hidden {
      visibility: hidden;
    }
    .visible {
      visibility: visible;
    }
  }
}

.CategorySelectBox.rtl {
  h1 {
  }

  .aselect {
    p {
      text-align: right;
      justify-content: flex-end;
      b {
      }
    }
    .selector {
      .arrow {
        left: 30px;
      }
      .expanded {
      }
      .label {
        span {
          text-align: right !important;
          justify-content: flex-end;
        }
      }
    }

    .selector:hover {
    }
    ul {
    }
    li {
      text-align: right !important;
      justify-content: flex-end;
      &:hover {
        transition: border 0.4s, color 0.4s;

        border-left: 1px solid transparent;
        border-right: 1px solid var(--color-secondary);
      }
    }
    li:last-child {
    }
    .current {
      transition: border 0.4s, color 0.4s;

      border-left: 1px solid transparent;
      border-right: 1px solid var(--color-secondary);
    }
    .hidden {
    }
    .visible {
    }
  }
}

@media (max-width: 777px) {
  .CategorySelectBox {
    .aselect {
      width: auto;
    }
  }
}
</style>
