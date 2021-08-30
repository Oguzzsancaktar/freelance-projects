<template>
  <button
    :class="['default-button', `text-color-${color}`, `${hoverClass}`]"
    :style="
      `width:${width} ;padding:${padding} ; height:${height}; background:${background}; border-radius:${radius} ; border:${border} `
    "
  >
    <!-- type TEXT -->
    <div
      :style="
        `color:${textColor}; font-size:${fontSize}; font-family:${family}; justify-content:${justify}; text-align:${textAlign} ;text-transform:${textTransfrom}`
      "
      v-if="'text' == type"
    >
      {{ text }}
    </div>

    <!-- type ICON -->

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

      <span class="hearth-icon" v-if="'hearth' == iconType">
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
    <!-- type TOGETHER -->

    <div
      :class="
        `button-together ${
          ApplicationLanguage == 'ar' && direction != 'column' ? 'rtl' : ''
        }`
      "
      :style="
        `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
      "
      v-if="'together' == type"
    >
      <span :style="`width:${iconAreaW}`" v-if="'home' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="home"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 1 511 511.999"
        />
      </span>

      <span :style="`width:${iconAreaW}`" v-if="'transfer' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="transfer"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 128 128"
        />
      </span>

      <span :style="`width:${iconAreaW}`" v-if="'calendar' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="calendar"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 512 512"
        />
      </span>

      <span :style="`width:${iconAreaW}`" v-if="'resume' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="resume"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 512 512"
        />
      </span>

      <span :style="`width:${iconAreaW}`" v-if="'notification' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="notification"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 1 511 511.999"
        />
      </span>

      <span :style="`width:${iconAreaW}`" v-if="'writing' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="writing"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 512 512"
        />
      </span>

      <span :style="`width:${iconAreaW}`" v-if="'lamp' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="lamp"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 24 24"
        />
      </span>

      <span :style="`width:${iconAreaW}`" v-if="'send' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="send"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 512.001 512.001"
        />
      </span>
      <span :style="`width:${iconAreaW}`" v-if="'fax' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="fax"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 163.15 165.516"
        />
      </span>

      <span :style="`width:${iconAreaW}`" v-if="'livingRoom' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="livingRoom"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 -26 512.00046 512"
        />
      </span>
      <span :style="`width:${iconAreaW}  `" v-if="'camera' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="camera"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 359.984 311.999"
        />
      </span>
      <span :style="`width:40px`" v-if="'information' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="information"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 330 384"
        />
      </span>

      <span
        :class="{ active: activeSection >= 0 }"
        :style="`width:${iconAreaW}`"
        v-if="'editt' == iconType"
      >
        <Icon
          :iconColor="iconColor"
          iconName="editt"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="-31.933 158.066 477.873 477.867"
        />
      </span>

      <span :style="`width:${iconAreaW}`" v-if="'edit' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="edit"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="-31.933 158.066 477.873 477.867"
        />
      </span>

      <span
        :class="{ active: activeSection >= 1 }"
        :style="`width:${iconAreaW}`"
        v-if="'preview' == iconType"
      >
        <Icon
          :iconColor="iconColor"
          iconName="preview"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 384.001 225"
        />
      </span>

      <span
        :class="{ activeSecondary: activeSection >= 2 }"
        :style="`width:${iconAreaW}`"
        v-if="'boost' == iconType"
      >
        <Icon
          :iconColor="iconColor"
          iconName="boost"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 380.33 370.226"
        />
      </span>

      <span :style="`width:${iconAreaW}`" v-if="'cube' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="cube"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 340.8 389.76"
        />
      </span>

      <span :style="`width:${iconAreaW}`" v-if="'nearLocation' == iconType">
        <Icon
          :iconColor="iconColor"
          iconName="nearLocation"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 512 512"
        />
      </span>

      <span
        v-if="'profile' == iconType"
        :style="
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
        "
      >
        <Icon
          :iconColor="iconColor"
          iconName="profile"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 512 512"
        />
      </span>

      <span
        v-if="'list' == iconType"
        :style="
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
        "
      >
        <Icon
          :iconColor="iconColor"
          iconName="list"
          width="20px"
          height="20px"
          :iconWidth="iconWidth"
          :iconHeight="iconHeight"
          viewBox="0 0 60.123 60.123"
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
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
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
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
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
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
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
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
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
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
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
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
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

      <span
        :style="
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
        "
        v-if="'search' == iconType"
      >
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
        :style="
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
        "
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

      <span
        :style="
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
        "
        v-if="'login' == iconType"
      >
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

      <span
        :style="
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
        "
        v-if="'plus' == iconType"
      >
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
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
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

      <span
        :style="
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
        "
        v-if="'maps' == iconType"
      >
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

      <span
        :style="
          `width:${iconAreaW} ;color:${textColor};flex-direction:${direction}; font-family:${family};font-size:${fontSize} `
        "
        v-if="'message' == iconType"
      >
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
        class="together-text"
        :style="
          `color:${textColor}; font-family:${family};font-size:${fontSize} ;text-align:${textAlign}; margin-left:${marginLeft}; justify-content:${justify}; margin:${textMargin} ; text-transform:${textTransfrom}`
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

  data: function() {
    return {
      activeTab: 0,
      ApplicationLanguage: localStorage.ApplicationLanguage,
    };
  },

  components: { Icon },
  props: {
    margin: { type: String, default: "0 10px 0 0" },
    textMargin: { type: String },

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
      default: "plus",
    },
    direction: {
      type: String,
      default: "row",
    },
    justify: {
      type: String,
      default: " ",
    },
    hoverClass: {
      type: String,
      default: " ",
    },
    activeSection: {
      type: Number,
      default: 0,
    },
    textTransfrom: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  align-items: center;
}
button div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.button-icon {
  justify-content: center;
  .hearth-icon {
    margin-top: 5px;
  }
}
button span {
  width: 100%;
  align-items: center;
}

.button-together {
  span.together-text {
    text-align: center;
    margin-bottom: 4px;
    margin-left: 3px !important;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }

  span:first-child {
    background: transparent;
    box-shadow: 0 0 0px 5px transparent;
  }
  span:last-child {
    background: transparent;
    box-shadow: 0 0 0px 5px transparent;
  }
  span.active {
    transition: 0.4s;

    background: var(--color-primary);
    height: 35px;

    border-radius: 50%;
    box-shadow: 0 0 0px 5px var(--color-primary-low-low);

    /deep/ g {
      fill: var(--background-white) !important;
    }
  }

  span.activeSecondary {
    transition: 0.4s;
    height: 35px;

    background: var(--color-secondary);

    border-radius: 50%;
    box-shadow: 0 0 0px 5px var(--color-secondary-low-low);

    /deep/ g {
      fill: var(--background-white) !important;
    }
  }

  span:first-child {
    // margin-right: 10px;
  }
}

.button-together.rtl {
  flex-direction: row-reverse !important;
  text-align: right !important;
  justify-content: right !important;
  .together-text {
    text-align: right !important;
    justify-content: flex-end !important;
    margin-right: 5px !important;
  }
}
</style>
