<template>
  <div :class="`AdvertPhotos ${ApplicationLanguage == 'ar' ? 'rtl' : ''}`">
    <div class="wrapper">
      <div class="heading">
        <h2>{{ AdvertPhotosData.Heading }}</h2>
      </div>

      <div class="photos">
        <div
          v-for="(item, index) in AdvertPhotosData.Photos"
          :key="index"
          class="photo"
        >
          <Button
            margin="auto"
            direction="column"
            background="transparent"
            radius="high"
            color="white"
            :type="item.Type"
            :iconType="item.IconType"
            :text="item.Text"
            iconColor="var(--color-primary)"
            iconHeight="30px"
            iconWidth="35px"
            fontSize="14px"
            textColor="var(--color-nav-link)"
            family="var(--font-semibold)"
            iconAreaW="auto"
            textMargin="10px 0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  name: "AdvertPhotos",
  components: { Button },
  props: {
    AdvertPhotosData: Object,
    ApplicationLanguage: String,
  },
};
</script>

<style lang="scss" scoped>
.AdvertPhotos {
  margin: 30px 0;
  .wrapper {
    border-radius: 10px;

    background: var(--background-white);

    .heading {
      h2 {
        text-transform: uppercase;
        padding: 20px 40px;
        font-size: 16px;
        font-family: var(--font-semibold);
        display: flex;
        align-items: center;
        height: 100%;
        border-bottom: 2px solid var(--background-general);
        padding-bottom: 20px;
      }
    }
    .photos {
      padding: 20px 40px;

      width: 100%;
      display: flex;
      justify-content: space-between;
      .photo {
        margin: 0 5px;
        background: var(--background-general);
        width: 160px;
        height: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        /deep/ .default-button {
          cursor: pointer;
        }
      }
    }
  }
}
.AdvertPhotos {
  .wrapper {
    .heading {
      h2 {
        text-align: right;
        justify-content: flex-end;
      }
    }
    .photos {
      flex-direction: row-reverse;
      .photo {
        /deep/ .default-button {
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .AdvertPhotos {
    margin: 30px 0;
    .wrapper {
      .heading {
        h2 {
        }
      }
      .photos {
        .photo {
        }
        .photo:nth-child(5) {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 700px) {
  .AdvertPhotos {
    margin: 30px 0;
    .wrapper {
      .heading {
        h2 {
        }
      }
      .photos {
        .photo {
        }
        .photo:nth-child(4) {
          display: none;
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .AdvertPhotos {
    margin: 30px 0;
    .wrapper {
      .heading {
        h2 {
        }
      }
      .photos {
        .photo {
        }
        .photo:nth-child(3) {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .AdvertPhotos {
    margin: 30px 0;
    .wrapper {
      .heading {
        h2 {
        }
      }
      .photos {
        justify-content: center;
        .photo {
        }
        .photo:nth-child(2) {
          display: none;
        }
      }
    }
  }
}
</style>
