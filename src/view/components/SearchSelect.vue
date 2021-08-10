<template>
  <div class="hero__search__select" :style="`padding:${padding}!important`">
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
          <span :style="`color:${labelColor}!important`"
            >{{ value }} {{ text }}
          </span>
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
              v-for="item in list"
              @click="select(item)"
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
  },
  data: function() {
    return {
      value: "Select ",
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
.hero__search__select {
  padding: 0 15px;
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
    }
    width: 140px;
    margin: 20px auto;
    .selector {
      border: 1px solid transparent;
      background: transparent;
      position: relative;
      z-index: 1;
      .arrow {
        position: absolute;
        right: 10px;
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
      width: 100%;
      list-style-type: none;
      padding: 0;
      margin: 0;
      font-size: 16px;
      border: 1px solid transparent;
      position: absolute;
      z-index: 1;
      background: #fff;
    }
    li {
      margin-top: 5px;

      padding: 12px;
      font-size: 17px;
      color: var(--color-text-gray);
      font-family: var(--font-medium);
      background: var(--background-white);

      &:hover {
        color: white;
        background: var(--color-secondary);
      }
    }
    .current {
      background: #eaeaea;
    }
    .hidden {
      visibility: hidden;
    }
    .visible {
      visibility: visible;
    }
  }
}

@media (max-width: 777px) {
  .hero__search__select {
    .aselect {
      width: auto;
    }
  }
}
</style>
