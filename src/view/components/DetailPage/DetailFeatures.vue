<template>
  <div class="DetailFeatures">
    <div class="wrapper">
      <div class="layout">
        <div class="area">
          <div class="heading">
            <h3>
              Ad Information
            </h3>
          </div>
        </div>

        <div class="area">
          <ul class="list">
            <li
              v-for="(item, index) in keyValArr"
              :key="index"
              class="list__item"
            >
              <div class="content">
                <span class="key"> {{ item.key }}</span>
                <span class="value">{{ item.value }}</span>
              </div>
            </li>
          </ul>
          <ul class="list">
            <li
              v-for="(item, index) in keyValArr"
              :key="index"
              class="list__item"
            >
              <div class="content">
                <span class="key"> {{ item.key }}</span>
                <span class="value">{{ item.value }}</span>
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
  data: function() {
    return {
      keyValArr: [
        {
          key: "İlan No",
          value: "123456789",
        },

        {
          key: "Son Güncelleme Tarihi",
          value: "Bugün",
        },
        {
          key: "İlan Durumu",
          value: "Satılık",
        },

        {
          key: "Konut Şekli",
          value: "Daire",
        },
        {
          key: "Brüt / Metre2",
          value: "220 M2",
        },

        {
          key: "Bulunduğu Kat",
          value: "3",
        },
        {
          key: "Isınma Tipi",
          value: "Kombi",
        },

        {
          key: "Kat Sayısı",
          value: "13",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.DetailFeatures {
  margin: 20px 0;

  .wrapper {
    .layout {
      padding: 35px 45px;

      background: var(--background-white);

      width: 100%;
      display: flex;
      flex-direction: column;

      .area {
        width: 100%;
        display: flex;

        .heading {
          width: 100%;
          h3 {
            display: flex;
            align-items: center;
            height: 100%;
            border-bottom: 2px solid var(--background-general);
            padding-bottom: 20px;
            width: 100%;
          }
        }

        .list {
          width: 100%;
          display: flex;
          flex-direction: column;
          list-style: none;
          padding: 20px 0;

          &__item {
            width: 100%;
            padding: 20px;
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
            background: var(--background-white);
          }
          &__item:nth-child(odd) {
            background: var(--background-general);
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
