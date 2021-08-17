<template>
  <div class="ButtonSelect">
    <div class="buttons">
      <div class="button active">
        <span>
          For Sale
        </span>
      </div>
      <div class="button">
        <span>
          For Rent
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonSelect",
};
</script>

<style lang="scss" scoped>
.ButtonSelect {
  padding: 30px 0;

  .buttons {
    display: flex;
    overflow: hidden;

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 140px;
      background: var(--background-white);
      height: 65px;

      span {
        padding: 25px 35px;
        color: var(--color-primary);
      }
    }

    .button:first-child {
      border-right: 1px solid var(--background-general);
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    .button:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    .button.active {
      background-image: linear-gradient(
        to top,
        var(--color-primary-low) -200%,
        rgb(255, 255, 255) 50%
      );

      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      border-bottom: 2px solid var(--color-primary);
    }
  }
}
</style>
