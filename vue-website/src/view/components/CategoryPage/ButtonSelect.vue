<template>
  <div :class="`ButtonSelect ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="buttons">
      <div
        v-for="(item, index) in ButtonSelectData"
        :key="index"
        class="button"
        :class="{ active: index == selected }"
        @click="selected = index"
      >
        <span>
          {{ item.Text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonSelect",
  props: {
    ButtonSelectData: Array,
    ApplicationLanguage: String,
  },
  data: function() {
    return {
      selected: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.ButtonSelect {
  padding: 30px 0;

  .buttons {
    display: flex;
    overflow: hidden;

    .button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 140px;
      background: var(--background-white);
      border: 2px solid transparent;
      height: 65px;
      transition: 0.5s;

      span {
        padding: 25px 35px;
        color: var(--color-primary);
      }
    }

    .button:first-child {
      border-right: 1px solid var(--background-general);
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    .button:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    .button.active {
      transition: 0.5s;

      background-image: linear-gradient(
        to top,
        var(--color-primary-low) -200%,
        rgb(255, 255, 255) 50%
      );

      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      border-bottom: 2px solid var(--color-primary);
    }
  }
}

.ButtonSelect.rtl {
  .buttons {
    // flex-direction: row-reverse;
    .button {
      span {
      }
    }

    .button:first-child {
    }
    .button:last-child {
    }

    .button.active {
    }
  }
}
</style>
