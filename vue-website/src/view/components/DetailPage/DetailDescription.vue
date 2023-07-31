<template>
  <div :class="`DetailDescription ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="wrapper">
      <div class="layout">
        <div class="heading">
          <h3>{{ DetailDescriptionData.Header }}</h3>
        </div>
        <div class="description">
          <p>
            {{ DetailDescriptionData.Description1 }}
          </p>
          <p>
            {{ DetailDescriptionData.Description2 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailDescription",
  props: {
    DetailDescriptionData: Object,
    ApplicationLanguage: String,
  },
};
</script>

<style lang="scss" scoped>
.DetailDescription {
  margin: 20px 0;

  .wrapper {
    .layout {
      background: var(--background-white);

      width: 100%;
      display: flex;
      flex-direction: column;
      .heading {
        h3 {
          padding: 35px 45px;

          display: flex;
          align-items: center;
          height: 100%;
          border-bottom: 1px solid var(--background-general);
          padding-bottom: 20px;
          font-size: 17px;
          font-family: var(--font-semibold);
        }
      }

      .description {
        padding: 15px 40px;
        p {
          font-size: 15px;
          font-family: var(--font-semilight);
          margin: 10px 0;
        }
      }
    }
  }
}

.DetailDescription.rtl {
  .wrapper {
    .layout {
      .heading {
        h3 {
          text-align: right;
          justify-content: flex-end;
        }
      }

      .description {
        p {
          text-align: right;
          justify-content: flex-end;
        }
      }
    }
  }
}
</style>
