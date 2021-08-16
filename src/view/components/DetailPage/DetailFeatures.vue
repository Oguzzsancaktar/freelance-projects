<template>
  <div class="DetailFeatures">
    <div class="wrapper">
      <div class="layout">
        <div class="area">
          <div class="heading">
            asdfgasdfqwerqew
          </div>
        </div>

        <div class="area">
          <ul class="list">
            <li class="list__item">
              <div class="content">
                <span class="key">İlan No</span>
                <span class="value">123451234</span>
              </div>
            </li>
            <li class="list__item">
              <div class="content">
                <span class="key">İlan No</span>
                <span class="value">123451234</span>
              </div>
            </li>
            <li class="list__item">
              <div class="content">
                <span class="key">İlan No</span>
                <span class="value">123451234</span>
              </div>
            </li>
            <li class="list__item">
              <div class="content">
                <span class="key">İlan No</span>
                <span class="value">123451234</span>
              </div>
            </li>
          </ul>
          <ul class="list">
            <li class="list__item">
              <div class="content">
                <span class="key">İlan No</span>
                <span class="value">123451234</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailFeatures",
};
</script>

<style lang="scss" scoped>
.DetailFeatures {
  .wrapper {
    .layout {
      width: 100%;
      display: flex;
      flex-direction: column;
      .area {
        width: 100%;
        display: flex;

        .heading {
        }

        .list {
          width: 100%;
          display: flex;
          flex-direction: column;
          list-style: none;

          &__item {
            width: 100%;

            .content {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .key {
              }
              .value {
              }
            }
          }
          &__item:nth-child(even) {
            background: blue;
          }
          &__item:nth-child(odd) {
            background: red;
          }
        }
        .list:first-child {
          margin-right: 15px;
        }
        .list:last-child {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
