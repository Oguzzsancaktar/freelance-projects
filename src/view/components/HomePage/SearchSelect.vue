<template>
  <div
    :class="`hero__search__select ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`"
    :style="`padding:${padding}!important`"
  >
    <div
      :style="
        `border:${border}; border-radius:30px; height:${height} ; margin:${margin}; width:${width} ; `
      "
      class="aselect"
      :data-value="value"
      :data-list="list"
    >
      <p>{{ text }}</p>
      <div class="selector" :style="`${specialStyle}`" @click="toggle()">
        <div class="label">
          <span :style="`color:${labelColor}!important`">{{ value }} </span>
        </div>
        <div
          :style="`border-top-color:${labelColor}`"
          class="arrow"
          :class="{ expanded: visible }"
        ></div>
        <div :class="{ hidden: !visible, visible }">
          <ul :style="`z-index:${100 - zIndex}!important`">
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
  name: "SearchSelect",
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
    list: {
      type: Array,
    },
    zIndex: {
      type: Number,
    },
    ApplicationLanguage: String,
  },
  data: function() {
    return {
      value: "Select ",
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
.hero__search__select {
  cursor: pointer;
  position: relative;
  width: 100%;
  margin: auto;

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

      i {
        color: var(--color-primary);
      }
    }

    width: 140px;
    margin: 20px auto;
    margin-top: -10px;

    .selector {
      border: 1px solid transparent;
      background: transparent;
      position: absolute;
      width: 60%;
      .arrow {
        position: absolute;
        right: 20px;
        top: 40%;
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 10px solid var(--color-secondary);
        transform: rotateZ(0deg) translateY(0px);
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
    ul {
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
      top: 40px;
      border-radius: 10px;
      overflow: hidden;

      border: 1px solid var(--color-card-border);
    }
    li {
      border-bottom: 1px solid var(--color-card-border);
      width: 100%;
      // margin: 10px 0;
      // border-radius: 50px;
      padding: 12px;
      font-size: 14px;
      color: var(--color-text-gray);
      font-family: var(--font-medium);
      background: var(--background-white);

      transition: border 0.4s, color 0.4s;

      &:hover {
        color: var(--color-secondary);
        transition: border 0.4s, color 0.4s;

        border-left: 1px solid var(--color-secondary);

        // background: var(--color-secondary);
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

.hero__search__select.rtl {
  h1 {
    text-align: right;
  }

  .aselect {
    p {
      text-align: right;
      justify-content: flex-end;

      i {
      }
    }
    .selector {
      right: 20px;
      .arrow {
        left: 20px;
      }
      .expanded {
      }
      .label {
        justify-content: flex-end;
        text-align: right;
        span {
        }
      }
    }
    ul {
    }
    li {
      border-right: 1px solid transparent;

      text-align: right !important;
      transition: border 0.4s, color 0.4s;

      &:hover {
        transition: border 0.4s, color 0.4s;

        border-left: transparent;
        border-right: 1px solid var(--color-secondary);
      }
    }
    li:last-child {
    }
    .current {
      border-left: transparent;
      border-right: 1px solid var(--color-secondary);
    }
    .hidden {
    }
    .visible {
    }
  }
}

@media (max-width: 777px) {
  .hero__search__select {
    justify-content: center;
    margin: auto;

    .aselect {
      width: 90%;
      margin: 45px auto;
      justify-content: center;

      .selector {
        width: 90%;
        margin: auto;
      }
      li {
        width: 100%;
      }
    }
  }
}
</style>
