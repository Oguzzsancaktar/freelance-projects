<template>
  <div class="DetailInfo">
    <div class="wrapper">
      <div class="layout">
        <div class="area">
          <div class="section">
            <h3>ASDFGASDF DSF ASDF ASDF ASDFAÎß</h3>
          </div>
          <div class="section">
            <Button
              color="var(--color-secondary)"
              textColor="var(--color-text-general)"
              width="120px"
              text="İsanbul/Sarıyer"
              radius="10px"
              type="together"
              border="1px solid transparent"
              iconType="maps"
              height="35px"
              iconColor="var(--color-secondary)"
              padding="0 0px"
              margin="0"
              iconWidth="20px"
              iconHeight="16px"
              family="var(--font-medium)"
              fontSize="14px"
            />
            <Button
              color="var(--color-secondary)"
              textColor="var(--color-text-general)"
              width="100px"
              text="For Sale"
              radius="10px"
              type="together"
              border="1px solid transparent"
              iconType="maps"
              height="35px"
              iconColor="var(--color-secondary)"
              padding="0 10px"
              margin="0"
              iconWidth="20px"
              iconHeight="16px"
              family="var(--font-medium)"
              fontSize="14px"
            />
            <Button
              color="var(--color-secondary)"
              textColor="var(--color-text-general)"
              width="100px"
              text="200 m2"
              radius="10px"
              type="together"
              border="1px solid transparent"
              iconType="maps"
              height="35px"
              iconColor="var(--color-secondary)"
              padding="0 10px"
              margin="0"
              iconWidth="20px"
              iconHeight="16px"
              family="var(--font-medium)"
              fontSize="14px"
            />
            <Button
              color="var(--color-secondary)"
              textColor="var(--color-text-general)"
              width="80px"
              text="3 + 1"
              radius="10px"
              type="together"
              border="1px solid transparent"
              iconType="maps"
              height="35px"
              iconColor="var(--color-secondary)"
              padding="0 10px"
              margin="0"
              iconWidth="20px"
              iconHeight="16px"
              family="var(--font-medium)"
              fontSize="14px"
            />
          </div>
        </div>
        <div class="area">
          <Button
            class="btn"
            family="var(--font-medium)"
            color="dark"
            textColor="var(--color-general-dark)"
            text="75.550.000 $"
            type="text"
            iconType="login"
            iconColor="var(--color-primary)"
            background="var(--background-gray-light)"
            radius="30px"
            width="200px"
            padding="0 20px"
            iconWidth="22px"
            iconHeight="21px"
            fontSize="25px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  name: "DetailInfo",
  components: { Button },
};
</script>

<style lang="scss" scoped>
.DetailInfo {
  margin: 20px 0;

  .wrapper {
    .layout {
      padding: 35px 45px;
      width: 100%;
      background: var(--background-white);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .area {
        display: flex;
        flex-direction: column;

        .section {
          // padding: 20px 0;

          h3 {
            display: flex;
            align-items: center;
            height: 100%;
            padding-bottom: 20px;
          }
        }
      }
    }
  }
}
</style>
