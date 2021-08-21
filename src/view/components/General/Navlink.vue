<template>
  <span class="nav__link">
    <a :class="{ active: this.$route.path == href }" :href="href"
      >{{ text }}
    </a>
  </span>
</template>

<script>
export default {
  name: "Navlink",

  props: {
    text: {
      type: String,
      default: " Nav Text Default",
    },
    href: {
      type: String,
      default: "/",
    },
    type: {
      type: String,
      default: " ",
    },
  },
};
</script>

<style lang="scss" scoped>
.nav__link {
  a {
    color: var(--color-nav-link);
    font-family: var(--font-semilight);
    font-size: 15px;
    text-decoration: none;
    transition: 0.4s;
  }

  a:hover {
    color: var(--color-primary);
    transition: 0.4s;
  }
  a.active {
    color: var(--color-primary);
    transition: 0.4s;
  }

  a.white {
    color: white;
    font-weight: 700;
    font-size: 20px;
  }
}
</style>
