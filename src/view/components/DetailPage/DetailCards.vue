<template>
  <div class="DetailCards">
    <div class="wrapper">
      <div class="layout">
        <div class="heading"></div>

        <ul class="list">
          <li class="item">
            <DetailCard />
          </li>

          <li class="item">
            <DetailCard />
          </li>

          <li class="item">
            <DetailCard />
          </li>

          <li class="item">
            <DetailCard />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DetailCard from "./DetailCard.vue";
export default {
  components: { DetailCard },
  name: "DetailCards",
};
</script>

<style lang="scss" scoped>
.DetailCards {
  .wrapper {
    .layout {
      padding: 35px 45px;
      background: var(--background-white);
      width: 100%;
      display: flex;
      flex-direction: column;

      .heading {
      }

      .list {
        display: flex;
        list-style: none;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        .item {
          width: 25%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
}

@media (max-width: 1300px) {
  .DetailCards {
    .wrapper {
      .layout {
        width: 100%;
        display: flex;
        flex-direction: column;

        .heading {
        }

        .list {
          display: flex;
          list-style: none;
          width: 100%;
          flex-wrap: wrap;
          .item {
            // width: 33%;
            min-width: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
