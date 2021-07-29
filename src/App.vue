<template>
  <div id="App">
    <Homepage />
  </div>
</template>

<script>
import Homepage from "./view/pages/Homepage.vue";

export default {
  name: "App",
  components: { Homepage },
};
</script>

<style>
:root {
  --color-primary: #0091a0;
  --color-secondary: #f37031;

  --color-text-general: #333333;
  --color-nav-link: #2e2e2e;

  --color-text-gray-light: #a7a7a7;
  --color-text-gray: #777777;
  --color-text-gray-dark: #525252;

  --background-white: #fff;
  --background-general: #f8f8f8;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  margin: auto;
  width: 80%;
  height: 100%;
  max-width: 1200px;
}

.vertical-center {
  display: flex;
  align-items: center;
}

.border-radius-high {
  border-radius: 30px;
}
.border-radius-low {
  border-radius: 10px;
}

.default-button {
  width: auto;
  padding: 0 20px;
  border: 1px solid var(--color-text-gray);
  height: 50px;
  background: transparent;
}

.background-primary {
  background: var(--color-primary);
}
.background-secondary {
  background: var(--color-secondary);
}

.text-color-white {
  color: var(--background-white);
}

.text-color-dark {
  color: var(--color-nav-link);
}

.text-color-primary {
  color: var(--color-primary);
}
.text-color-secondary {
  color: var(--color-secondary);
}

@media (max-width: 1400px) {
  .wrapper {
    width: 90%;
  }
}
</style>
