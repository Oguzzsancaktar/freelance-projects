<template>
  <div class="MyProfile">
    <div class="layout">
      <section>
        <div class="heading">
          <h3>
            Headingg
          </h3>
        </div>
      </section>

      <section>
        <div class="layout">
          <div class="column">
            <div class="row">
              <InputBox width="90%" padding="0" text="text" />
              <InputBox width="90%" padding="0" text="text" />
            </div>
            <div class="row">
              <InputBox padding="0" text="text" />
              <InputBox padding="0" text="text" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="layout">
          <div class="column">
            <div class="row">
              <InputBox padding="0" text="text" />
              <InputBox padding="0" text="text" />
              <InputBox padding="0" text="text" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="layout">
          <div class="column">
            <div class="row">
              <div class="btn">
                <Button
                  border="1px solid var(--color-secondary)"
                  background="var(--color-secondary)"
                  text="See All"
                  radius="10px"
                  type="text"
                  width="100px"
                  height="35px"
                  padding="0 10px"
                  iconWidth="13px"
                  iconHeight="13px"
                  textColor="var(--background-white)"
                  family="var(--font-semilight)"
                  fontSize="15px"
                  textAlign="center"
                  justify="center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import InputBox from "../InputBox.vue";
export default {
  components: { InputBox, Button },
};
</script>

<style lang="scss" scoped>
.MyProfile {
  width: 100%;
  background: var(--background-white);
  .layout {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    section {
      width: 100%;

      .heading {
        h3 {
          padding: 20px 40px;
          display: flex;
          align-items: center;
          height: 100%;
          border-bottom: 1px solid var(--background-general);
          color: var(--color-primary);
        }
      }
      .column {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 30px 0;
        border-bottom: 1px solid var(--background-general);
        border-top: 1px solid var(--background-general);

        .row {
          padding: 30px 40px;
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;

          .btn {
            width: 100%;
            display: flex;
            justify-content: flex-end;
          }
        }
      }
    }
  }
}
</style>
