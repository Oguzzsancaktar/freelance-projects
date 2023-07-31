<template>
  <div :class="`TextContent ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="layout">
      <section>
        <div class="heading">
          <h3 v-scrollanimation>{{ heading }}</h3>
        </div>
      </section>

      <section>
        <div class="paragraph" v-for="(item, index) in paragraphs" :key="index">
          <p v-scrollanimation>
            {{ item.Paragraph }}
          </p>
          <br />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextContent",
  props: {
    ApplicationLanguage: String,
    paragraphs: Array,
    heading: String,
  },
};
</script>
<style lang="scss" scoped>
.TextContent {
  border-radius: 10px;
  width: 100%;
  background: var(--background-white);

  .layout {
    section {
      .heading {
        h3 {
          text-transform: uppercase;
          padding: 20px 40px;
          font-size: 17px;
          font-family: var(--font-semibold);
          display: flex;
          align-items: center;
          height: 100%;
          border-bottom: 2px solid var(--background-general);
          padding-bottom: 20px;
        }
      }
      .paragraph {
        font-family: var(--font-medium);
        font-size: 15px;
        color: var(--color-text-general);
        padding: 0px 40px;
        text-align: justify;
      }
    }
  }
  section:last-child {
    padding: 30px 0;
  }
}

.TextContent.rtl {
  .layout {
    section {
      .heading {
        h3 {
          justify-content: flex-end;
          text-align: right;
        }
      }
      .paragraph {
        justify-content: flex-end;
        text-align: right;
      }
    }
  }
  section:last-child {
  }
}
</style>
