<template>
  <div class="DetailDescription">
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
  },
};
</script>

<style lang="scss" scoped>
.DetailDescription {
  margin: 20px 0;

  .wrapper {
    .layout {
      padding: 35px 45px;

      background: var(--background-white);

      width: 100%;
      display: flex;
      flex-direction: column;
      .heading {
        h3 {
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
        padding: 15px 0;
        p {
          font-size: 15px;
          font-family: var(--font-semilight);
          margin: 10px 0;
        }
      }
    }
  }
}
</style>
