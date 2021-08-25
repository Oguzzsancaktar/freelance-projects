<template>
  <div class="AdvencedSettings">
    <div class="wrapper">
      <div class="layout">
        <section>
          <div class="heading">
            <h3>{{ AdvencedSettingsData.Heading }}</h3>

            <button @click="closeAdvenced" class="close-button">
              <Button
                margin="auto"
                direction="row"
                background="var(--color-primary)"
                radius="high"
                color="white"
                type="icon"
                iconType="plus"
                :text="AdvencedSettingsData.Search"
                iconColor="white"
                iconHeight="20px"
                iconWidth="20px"
                fontSize="16px"
                textColor="white"
                family="var(--font-semibold)"
                iconAreaW="20px"
                justify="center"
                hoverClass="hover-primary"
                height="100%"
                width="100%"
              />
            </button>
          </div>
        </section>
        <section>
          <div class="flex-grid">
            <div
              v-for="(item, index) in AdvencedSettingsData.SelectBoxData"
              :key="index"
              class="item"
            >
              <SelectBox
                family="var(--font-semibold)"
                :text="item.Text"
                :List="item.List"
                height="auto"
                width="100%"
                textColor="var(--color-nav-link)"
                :placeholder="item.Placeholder"
                :isRequired="item.Required"
                :zIndex="100 - index"
                margin="5px 0"
              />
            </div>
          </div>
        </section>

        <section>
          <div class="flex-grid">
            <div
              v-for="(item, index) in AdvencedSettingsData.CheckBoxData"
              :key="index"
              class="item checkbox"
            >
              <CheckBox :item="item.Text" />
            </div>
          </div>
        </section>
        <section>
          <div class="button">
            <Button
              margin="auto"
              direction="row"
              background="var(--color-secondary)"
              radius="high"
              color="white"
              type="together"
              iconType="search"
              :text="AdvencedSettingsData.Search"
              iconColor="white"
              iconHeight="19px"
              iconWidth="19px"
              fontSize="16px"
              textColor="white"
              family="var(--font-semibold)"
              iconAreaW="80px"
              justify="center"
              hoverClass="hover-secondary"
              height="60px"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import SelectBox from "../SelectBox.vue";
import CheckBox from "../Checkbox.vue";
import Button from "../Button.vue";

export default {
  components: { SelectBox, CheckBox, Button },
  name: "AdvencedSettings",
  props: {
    AdvencedSettingsData: Object,
  },
  methods: {
    closeAdvenced() {
      this.$emit("close-advenced");
    },
  },
};
</script>

<style lang="scss" scoped>
.AdvencedSettings {
  height: inherit;
  width: 100%;

  .wrapper {
    width: 100%;
    .layout {
      border-radius: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;

      section {
        .heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          h3 {
            text-transform: uppercase;
            padding: 20px 30px;
            font-size: 16px;
            font-family: var(--font-semibold);
            display: flex;
            align-items: center;
            height: 100%;
            border-bottom: 2px solid var(--background-general);
            padding-bottom: 20px;
          }

          button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0px 30px;

            background: transparent;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            transform: rotate(45deg);
            transition: 0.4s;
          }

          button:hover {
            transition: 0.4s;

            transform: rotate(90deg);
          }
        }
      }
      .flex-grid {
        padding: 5px 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item {
          margin: 5px 0;

          width: 100%;
          max-width: 220px;
        }
      }

      .button {
        width: 100%;
        margin-top: 20px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        overflow: hidden;
        /deep/ .default-button {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .AdvencedSettings {
    .wrapper {
      .layout {
        section {
          .heading {
            h3 {
            }
          }
        }
        .flex-grid {
          justify-content: center;
          .item {
            margin: 0;
            max-width: unset;
            min-width: 200px;
          }
          .item.checkbox {
            justify-content: center;
            margin: 4px 0;
            max-width: 200px;
          }
        }

        .button {
          /deep/ .default-button {
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
