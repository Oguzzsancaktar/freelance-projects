<template>
  <div class="AdvertPhotos">
    <div class="wrapper">
      <div class="heading">
        <h2>İlan Fotografları</h2>
      </div>

      <div class="photos">
        <div class="photo">
          <Button
            margin="auto"
            direction="column"
            background="transparent"
            radius="high"
            color="white"
            type="together"
            iconType="search"
            text="Add Photo"
            iconColor="var(--color-primary)"
            iconHeight="19px"
            iconWidth="19px"
            fontSize="16px"
            textColor="white"
            family="var(--font-semibold)"
          />
        </div>

        <div class="photo">
          <Button
            margin="auto"
            direction="column"
            background="transparent"
            radius="high"
            color="white"
            type="icon"
            iconType="plus"
            text="Add Photo"
            iconColor="var(--background-white)"
            iconHeight="25px"
            iconWidth="25px"
            family="var(--font-semibold)"
            width="25px"
            padding="0"
          />
        </div>
        <div class="photo">
          <Button
            margin="auto"
            direction="column"
            background="transparent"
            radius="high"
            color="white"
            type="icon"
            iconType="plus"
            text="Add Photo"
            iconColor="var(--background-white)"
            iconHeight="25px"
            iconWidth="25px"
            family="var(--font-semibold)"
            width="25px"
            padding="0"
          />
        </div>
        <div class="photo">
          <Button
            margin="auto"
            direction="column"
            background="transparent"
            radius="high"
            color="white"
            type="icon"
            iconType="plus"
            text="Add Photo"
            iconColor="var(--background-white)"
            iconHeight="25px"
            iconWidth="25px"
            family="var(--font-semibold)"
            width="25px"
            padding="0"
          />
        </div>
        <div class="photo">
          <Button
            margin="auto"
            direction="column"
            background="transparent"
            radius="high"
            color="white"
            type="icon"
            iconType="plus"
            text="Add Photo"
            iconColor="var(--background-white)"
            iconHeight="25px"
            iconWidth="25px"
            family="var(--font-semibold)"
            width="25px"
            padding="0"
          />
        </div>
        <div class="photo">
          <Button
            margin="auto"
            direction="column"
            background="transparent"
            radius="high"
            color="white"
            type="icon"
            iconType="plus"
            text="Add Photo"
            iconColor="var(--background-white)"
            iconHeight="25px"
            iconWidth="25px"
            family="var(--font-semibold)"
            width="25px"
            padding="0"
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
};
</script>

<style lang="scss" scoped>
.AdvertPhotos {
  margin: 30px 0;
  .wrapper {
    padding: 20px 40px;

    background: var(--background-white);

    .heading {
      h2 {
        display: flex;
        align-items: center;
        height: 100%;
        border-bottom: 1px solid var(--background-general);
        padding-bottom: 20px;
      }
    }
    .photos {
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
      }
    }
  }
}
</style>
