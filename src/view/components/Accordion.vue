<template>
  <div @click="collapseAccordion($event)" class="Accordion">
    <div class="layout">
      <section>
        <div class="heading">
          <h3>{{ messages.from }}</h3>
          <div class="date">
            <Button
              color="var(--color-secondary)"
              textColor="var(--color-text-general)"
              width="100px"
              :text="messages.date"
              radius="10px"
              type="together"
              border="1px solid transparent"
              iconType="maps"
              height="35px"
              iconColor="var(--color-secondary)"
              padding="0 10px"
              margin="0"
              iconWidth="20px"
              iconHeight="16px"
              family="var(--font-medium)"
              fontSize="14px"
            />
          </div>
        </div>
      </section>

      <section class="hiding-area">
        <p class="description">
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
  },
  methods: {
    collapseAccordion(event) {
      console.log(jquery(event.target).parents(".layout"));
      jquery(event)
        .find("section.hiding-area")
        .animate({ height: "200px" });
    },
  },
};
</script>

<style lang="scss" scoped>
.Accordion {
  .layout {
    border: 1px solid var(--color-text-gray-light);
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
      }
    }
    section.hiding-area {
      height: 0px;
    }
  }
}
</style>
