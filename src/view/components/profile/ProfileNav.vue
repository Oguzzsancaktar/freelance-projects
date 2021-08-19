<template>
  <div class="ProfileNav">
    <div class="layout">
      <ul class="list">
        <li v-for="(item, index) in profileNavList" class="item" :key="index">
          <button @click="changeSection(item.keyword)">
            <Button
              margin="auto"
              padding="0px"
              direction="row"
              background="transparent"
              radius="high"
              color="white"
              type="together"
              iconType="message"
              iconAreaW="24px"
              :text="item.text"
              iconColor="var(--color-secondary)"
              iconHeight="24px"
              iconWidth="24px"
              fontSize="13px"
              textColor="var(--color-text-gray)"
              family="var(--font-light)"
              width="100%"
              textAlign="start"
              marginLeft="5px"
            />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  components: { Button },
  name: "ProfileNav",
  props: {
    section: {
      type: String,
      default: "profile",
    },
    profileNavList: Array,
  },
  methods: {
    changeSection(keyword) {
      let activeSection = this.section;
      activeSection = keyword;
      this.$emit("update-section", activeSection);
    },
  },
};
</script>

<style lang="scss" scoped>
.ProfileNav {
  width: 100%;

  .layout {
    width: 100%;
    .list {
      width: 100%;

      list-style: none;
      .item {
        width: 100%;
        button {
          width: 100%;
        }
      }
    }
  }
}
</style>
