<template>
  <div :class="`PageHeading ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="wrapper">
      <div class="layout">
        <div class="heading">
          <h3>
            {{ PageHeadingData.Heading }}
          </h3>
        </div>

        <div class="description">
          <p>{{ PageHeadingData.Description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeading",
  props: {
    PageHeadingData: Object,
  },
};
</script>
<style lang="scss" scoped>
.PageHeading {
  .wrapper {
    .layout {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .heading {
        h3 {
          font-size: 25px;
          font-family: var(--font-bold);
        }
      }
      .description {
        font-size: 15px;
        font-family: var(--font-semilight);
      }
    }
  }
}

.PageHeading.rtl {
  .wrapper {
    .layout {
      .heading {
        h3 {
          text-align: right;
          justify-content: flex-end;
        }
      }
      .description {
        text-align: right;
        justify-content: flex-end;
      }
    }
  }
}
</style>
