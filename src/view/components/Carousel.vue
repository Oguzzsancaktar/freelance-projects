<template>
  <div class="carousel__general">
    <div id="carousel" class="carousel-wrapper" v-bind:style="carouselStyle">
      <div class="carousel-controls">
        <div class="button button-left" @click="moveLeft">
          <ImageView
            height="30px"
            width="16px"
            imageType="images"
            imageName="nextIcon.png"
          />
        </div>
        <div class="button button-right" @click="moveRight">
          <ImageView
            height="30px"
            width="16px"
            imageType="images"
            imageName="prevIcon.png"
          />
        </div>
        <div class="input">
          <!-- <label for="totalShown">Total</label>
        <input id="totalShown" type="text" v-model="shown" /> -->
        </div>
      </div>

      <div class="carousel">
        <transition-group
          :name="transitionName"
          tag="div"
          class="item__wrapper"
        >
          <div
            v-for="item in items"
            class="item"
            v-bind:style="itemStyle"
            :key="item"
          >
            <ImageView
              width="auto"
              height="60%"
              imageType="images"
              :imageName="item"
            />
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import ImageView from "./ImageView.vue";
export default {
  components: { ImageView },
  data: function() {
    return {
      items: [
        "refferance-logo-0.png",
        "refferance-logo-1.png",
        "refferance-logo-2.png",
        "refferance-logo-3.png",
        "refferance-logo-4.png",
        "refferance-logo-5.png",

        "refferance-logo-6.png",
      ],
      position: 0,
      shown: 6,
      itemWidth: 190,
      itemGutter: 5,
      measurement: "px",
      itemHeight: 110,
      left: false,
      animationTime: 1000,
      dirty: Date.now(),
      canMove: true,
    };
  },
  methods: {
    moveRight: function() {
      this.dirty = Date.now();
      this.doMoveRight();
    },
    doMoveRight: function() {
      if (this.items.length < 1 || !this.canMove) return;

      this.left = false;
      const vm = this;
      const removedItem = this.items.shift();

      setTimeout(() => {
        vm.items.push(removedItem);
      }, vm.animationTime);
      this.temporarilyDisableMovement();
    },
    moveLeft: function() {
      if (this.items.length < 1 || !this.canMove) return;

      this.dirty = Date.now();
      this.left = true;
      const vm = this;
      const removedItem = this.items.pop();
      setTimeout(() => {
        vm.items.unshift(removedItem);
      }, 1);
      this.temporarilyDisableMovement();
    },
    isDirty: function() {
      return Date.now() - this.dirty < 10000;
    },
    temporarilyDisableMovement: function() {
      const vm = this;
      this.canMove = false;

      setTimeout(() => {
        vm.canMove = true;
      }, vm.animationTime);
    },
  },
  computed: {
    transitionName: function() {
      if (this.left) return "carousel-left";
      return "carousel-right";
    },
    carouselWidth: function() {
      return this.shown * (this.itemWidth + this.itemGutter * 2);
    },
    itemStyle: function() {
      return {
        width: this.itemWidth + this.measurement,
        margin: "0 " + this.itemGutter + this.measurement,
        height: this.itemHeight + this.measurement,
      };
    },
    carouselStyle: function() {
      return {
        width: this.carouselWidth + this.measurement,
        height: this.itemHeight + this.measurement,
      };
    },
  },
  mounted: function() {
    const vm = this;
    this.$nextTick(() => {
      setInterval(() => {
        if (vm.isDirty()) return;
        vm.doMoveRight();
      }, 2000);
    });
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  &__general {
    width: 100%;
    height: 220px;
    background: var(--background-white);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-wrapper {
    width: 100%;
    margin: auto;
    position: relative;
    max-width: 1200px;
  }
  overflow: hidden;
  height: 100%;
  width: 100%;
  background: transparent;
  position: relative;
  &-controls {
    width: calc(100% + 100px);
    height: 100%;
    position: absolute;
    // z-index: 8;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.button {
  height: 50px;
  width: 50px;
  position: absolute;

  top: 50%;
  transform: translateY(-50%);

  background: transparent;
  color: var(--text-color-primary);
  font-size: 26px;
  cursor: pointer;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;

  &-left {
    left: 0;
  }

  &-right {
    right: 0;
  }
}

.input {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, 100%);

  input {
    width: 30px;
    padding-left: 2px;
    display: inline-block;
  }
}

.item {
  width: 100%;
  height: 100%;
  &__wrapper {
    height: 100%;
    position: absolute;
    display: flex;
  }
  border-radius: 10px;
  background: var(--background-general);
  color: #eee;

  transition: all 1s;
  display: flex;
  justify-content: center;
  align-items: center;

  backface-visibility: hidden;
  transform: scale(1, 1);

  cursor: pointer;
  transition: 0.4s;
}

.item:hover {
  width: 100%;
  height: 100%;
  transition: 0.4s;
  background: var(--color-primary);
}
/* moving to the left */
.carousel-left-enter {
  transform: translate(-108%, 0);
}

/*moving to the right */
.carousel-right-leave-to {
  transform: translate(-110%, 0);
}

.carousel-right-leave-active {
  position: absolute;
}
</style>
