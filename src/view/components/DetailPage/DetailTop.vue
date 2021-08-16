<template>
  <div class="DetailTop">
    <div class="wrapper">
      <div class="layout">
        <div class="area">
          <a class="home-button" href="./">
            <Button
              background="transparent"
              family="var(--font-medium)"
              radius="30px"
              color="white"
              type="icon"
              iconType="house"
              width="60px"
              padding="0 10px"
              iconColor="var(--color-primary)"
              iconWidth="30px"
              iconHeight="26px"
              fontSize="15px"
              direction="center"
            />
          </a>
          <span>asdfasdfas as dfasdfas df</span>
        </div>

        <div class="area">
          <a href="">
            <Button
              family="var(--font-medium)"
              color="dark"
              textColor="var(--color-general-dark)"
              text="Giant Logo"
              textAlign="left"
              type="together"
              iconType="gallery"
              iconColor="var(--color-primary)"
              background="transparent"
              radius="0"
              width="125px"
              padding="0 0px"
              iconWidth="22px"
              iconHeight="21px"
              fontSize="15px"
              iconAreaW="50px"
              direction="center"
            />
          </a>
          <a href="">
            <Button
              family="var(--font-medium)"
              color="dark"
              textColor="var(--color-general-dark)"
              text="Share"
              textAlign="left"
              type="together"
              iconType="share"
              iconColor="var(--color-primary)"
              background="transparent"
              radius="0"
              width="80px"
              padding="0 0px"
              iconWidth="30px"
              iconHeight="40px"
              fontSize="15px"
              iconAreaW="30px"
            />
          </a>

          <a href="">
            <Button
              family="var(--font-medium)"
              color="dark"
              textColor="var(--color-general-dark)"
              text="Favorites"
              textAlign="left"
              type="together"
              iconType="favorites"
              iconColor="var(--color-primary)"
              background="transparent"
              radius="0"
              width="120px"
              padding="0 0px"
              iconWidth="22px"
              iconHeight="21px"
              fontSize="15px"
              iconAreaW="50px"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  name: "DetailTop",
  components: { Button },
};
</script>

<style lang="scss" scoped>
.DetailTop {
  margin: 20px 0;

  .wrapper {
    .layout {
      border-radius: 5px;
      width: 100%;
      background: var(--background-white);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .area {
        display: flex;
        align-items: center;
        // justify-content: space-between;

        .home-button {
          border-right: 1px solid var(--background-general);
        }
      }
      .area:first-child {
        width: 60%;
      }
      .area:last-child {
        width: 40%;
        justify-content: flex-end;
      }
    }
  }
}
</style>
