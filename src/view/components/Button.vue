<template>
  <button
    :class="['default-button', `text-color-${color}`]"
    :style="
      `width:${width} ;padding:${padding} ; height:${height}; background:${background}; border-radius:${radius} ; border:${border} `
    "
  >
    <div class="button-icon" v-if="'icon' == type">
      <span
        v-if="'house' == iconType"
        :style="
          `width:${iconAreaW} ;color:${textColor}; font-family:${family};font-size:${fontSize} `
        "
      >
        <Icon
          viewBox="0 0 388.958 372.96"
          :iconColor="iconColor"
          iconName="house"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span :style="`width:${iconAreaW}  `" v-if="'Twitter' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="twitter"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span :style="`width:${iconAreaW}  `" v-if="'Facebook' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="facebook"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span :style="`width:${iconAreaW}  `" v-if="'Instagram' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="instagram"
          width="20px"
          height="20px"
          viewBox="0 0 511.8 511"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span v-if="'hearth' == iconType">
        <Icon
          iconName="hearth"
          width="20px"
          height="20px"
          :iconColor="iconColor"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>
      <span v-if="'details' == iconType">
        <Icon
          viewBox="0 0 384 384"
          iconName="details"
          width="20px"
          height="20px"
          :iconColor="iconColor"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span v-if="'login' == iconType">
        <Icon
          iconName="login"
          width="20px"
          height="20px"
          iconColor="white"
          viewBox="0 0 490 468.7"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span :style="`width:${iconAreaW} `" v-if="'plus' == iconType">
        <Icon
          iconName="plus"
          width="20px"
          height="20px"
          iconColor="white"
          viewBox="0 0 426.7 426.7"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>
    </div>
    <div
      :style="
        `color:${textColor}; font-size:${fontSize}; font-family:${family}`
      "
      v-if="'text' == type"
    >
      {{ text }}
    </div>
    <div
      class="button-together"
      :style="`flex-direction:${direction}`"
      v-if="'together' == type"
    >
      <span v-if="'hearth' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="hearth"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span
        v-if="'confirm' == iconType"
        :style="
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
        "
      >
        <Icon
          :iconColor="iconColor"
          iconName="confirm"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="-49 141 512.13 512.13"
        />
      </span>

      <span
        :style="
          `width:${iconAreaW} ;color:${textColor}; font-family:${family};font-size:${fontSize} `
        "
        v-if="'gallery' == iconType"
      >
        <Icon
          :iconColor="iconColor"
          iconName="gallery"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="-7.218 208.006 430.23 377.079"
        />
      </span>

      <span
        :style="
          `width:${iconAreaW} ;color:${textColor}; font-family:${family};font-size:${fontSize} `
        "
        v-if="'favorites' == iconType"
      >
        <Icon
          :iconColor="iconColor"
          iconName="favorites"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 -28 512.001 512"
        />
      </span>

      <span
        :style="
          `width:${iconAreaW} ;color:${textColor}; font-family:${family};font-size:${fontSize} `
        "
        v-if="'share' == iconType"
      >
        <Icon
          :iconColor="iconColor"
          iconName="share"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 -28 512.001 512"
        />
      </span>

      <span
        v-if="'phone' == iconType"
        :style="
          `width:${iconAreaW} ;color:${textColor}; font-family:${family};font-size:${fontSize} `
        "
      >
        <Icon
          viewBox="0 0 378.961 380.88"
          :iconColor="iconColor"
          iconName="phone"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span
        v-if="'house' == iconType"
        :style="
          `width:${iconAreaW} ;color:${textColor}; font-family:${family};font-size:${fontSize} `
        "
      >
        <Icon
          viewBox="0 0 388.958 372.96"
          :iconColor="iconColor"
          iconName="house"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span
        v-if="'envelope' == iconType"
        :style="
          `width:${iconAreaW} ;color:${textColor}; font-family:${family};font-size:${fontSize} `
        "
      >
        <Icon
          :iconColor="iconColor"
          iconName="envelope"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 386.641 294.238"
        />
      </span>

      <span :style="`margin:${margin}!important`" v-if="'search' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="search"
          width="20px"
          height="20px"
          viewBox="0 0 269.818 270.002"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span
        :style="`margin:${margin}!important; width:30px`"
        v-if="'advenced' == iconType"
      >
        <Icon
          :iconColor="iconColor"
          iconName="advenced"
          width="20px"
          height="20px"
          viewBox="0 0 175.602 175.602"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span :style="`width:${iconAreaW} `" v-if="'login' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="login"
          width="20px"
          height="20px"
          viewBox="0 0 490 468.7"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span :style="`width:${iconAreaW} `" v-if="'plus' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="plus"
          width="20px"
          height="20px"
          viewBox="0 0 426.7 426.7"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>
      <span
        :style="
          `width:${iconAreaW} ;color:${textColor}; font-family:${family};font-size:${fontSize} `
        "
        v-if="'rentSale' == iconType"
      >
        <Icon
          :iconColor="iconColor"
          iconName="rentSale"
          width="20px"
          height="20px"
          viewBox="0 0 511.9 445.2"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span :style="`width:${iconAreaW}  `" v-if="'maps' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="maps"
          width="20px"
          height="20px"
          viewBox="0 0 245.8 307.3"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span :style="`width:${iconAreaW}  `" v-if="'message' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="message"
          width="20px"
          height="20px"
          viewBox="0 0 359.97 359.975"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span :style="`width:${iconAreaW}  `" v-if="'Twitter' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="twitter"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span :style="`width:${iconAreaW}  `" v-if="'Facebook' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="facebook"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span :style="`width:${iconAreaW}  `" v-if="'Instagram' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="instagram"
          width="20px"
          height="20px"
          viewBox="0 0 511.8 511"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
        />
      </span>

      <span
        :style="
          `color:${textColor}; font-family:${family};font-size:${fontSize} ;text-align:${textAlign}; margin-left:${marginLeft}`
        "
        >{{ text }}</span
      >
    </div>
  </button>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  name: "Button",
  components: { Icon },
  props: {
    margin: { type: String, default: "0 10px 0 0" },
    marginLeft: { type: String, default: "0" },

    padding: { type: String, default: "0 20px" },
    iconAreaW: { type: String, default: "30px" },
    border: { type: String, default: "1px solid transparent" },
    textColor: { type: String, default: "red" },

    iconColor: { type: String, default: "red" },
    iconHeight: { type: String, default: "30px" },
    iconWidth: { type: String, default: "30px" },
    textAlign: { type: String, default: " center" },

    family: { type: String, default: "var(--font-bold)" },
    fontSize: { type: String, default: "100px" },

    width: {
      type: String,
      default: " ",
    },
    height: {
      type: String,
      default: "50px",
    },
    text: {
      type: String,
      default: "Default Button Text !!",
    },
    color: {
      type: String,
      default: " ",
    },
    background: {
      type: String,
      default: " ",
    },
    radius: {
      type: String,
      default: "low",
    },
    type: {
      type: String,
      default: "text",
    },
    iconType: {
      type: String,
      default: "hearth",
    },
    direction: {
      type: String,
      default: "row",
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  width: 100%;
}
button div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.button-icon {
  justify-content: center;
}
button span {
  width: 100%;
}

.button-together {
  span:first-child {
    // margin-right: 10px;
  }
}
</style>
