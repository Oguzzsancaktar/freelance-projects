<template>
  <div class="DetailDescription">
    <div class="wrapper">
      <div class="layout">
        <div class="heading">
          <h3>hEADİNG</h3>
        </div>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            molestiae id deserunt modi? Fugit exercitationem in, nam ipsam
            tempora ipsum, explicabo tempore, dolor quos ab molestiae quo error
            recusandae minima.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            molestiae id deserunt modi? Fugit exercitationem in, nam ipsam
            tempora ipsum, explicabo tempore, dolor quos ab molestiae quo error
            recusandae minima.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailDescription",
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
        }
      }

      .description {
        padding: 15px 0;
        p {
          margin: 10px 0;
        }
      }
    }
  }
}
</style>
