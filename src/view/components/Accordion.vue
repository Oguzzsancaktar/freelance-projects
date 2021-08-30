<template>
  <div
    @click="collapseAccordion()"
    :class="`Accordion ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`"
  >
    <div class="layout">
      <section>
        <div class="heading">
          <h3 v-scrollanimation>{{ messages.from }}</h3>
          <div class="date">
            <Button
              v-scrollanimation
              color="var(--color-secondary)"
              textColor="var(--color-text-general)"
              width="100px"
              :text="messages.date"
              radius="10px"
              type="together"
              border="1px solid transparent"
              iconType="calendar"
              height="35px"
              iconColor="var(--color-primary)"
              padding="0 0px"
              margin="0"
              iconWidth="20px"
              iconHeight="16px"
              family="var(--font-medium)"
              fontSize="15px"
              iconAreaW="auto"
            />
          </div>
        </div>
      </section>

      <section ref="hidingArea" class="hiding-area">
        <p v-scrollanimation class="description">
          {{ messages.message }}
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import jquery from "jquery";

export default {
  components: { Button },
  name: "Accordion",
  props: {
    messages: Object,
    index: Number,
    ApplicationLanguage: String,
  },

  methods: {
    collapseAccordion() {
      let AccordionArr = [];
      AccordionArr = jquery(".ProfileMessages .item .hiding-area");
      if (jquery(this.$refs.hidingArea).hasClass("show")) {
        jquery(this.$refs.hidingArea).removeClass("show");
        return 1;
      }
      for (let i = 0; i < AccordionArr.length; i++) {
        jquery(AccordionArr[i]).removeClass("show");
      }
      jquery(this.$refs.hidingArea).addClass("show");
    },
  },
};
</script>

<style lang="scss" scoped>
.Accordion {
  .layout {
    border: 1px solid var(--color-card-border);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;

    section {
      width: 100%;
      overflow: hidden;
      .heading {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 20px 30px;

        h3 {
          text-transform: uppercase;

          font-size: 15px;
          font-family: var(--color-semibold);
          color: var(--color-text-general);
        }
      }
    }

    section.hiding-area {
      padding: 0px 30px;

      max-height: 0px;
      transition: 0.7s;

      transition-delay: 0;
      border-top: 2px solid transparent;

      .description {
        font-size: 15px;
        font-family: var(--color-semilight);
        color: var(--color-text-general);
      }
    }

    section.hiding-area.show {
      border-top: 2px solid var(--background-general);

      padding: 35px 30px;
      transition-delay: 0;

      max-height: 200px;
      transition: 0.7s;
      overflow-y: scroll;
    }
  }
}

.Accordion {
  .layout {
    section {
      .heading {
        flex-direction: row-reverse;
        h3 {
        }
      }
    }

    section.hiding-area {
      .description {
        text-align: right;
      }
    }

    section.hiding-area.show {
    }
  }
}
</style>
