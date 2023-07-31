<template>
  <span class="nav__link">
    <router-link :to="href">
      <a
        :style="`color:${textColor}; font-size:${fontSize};`"
        :class="[
          { active: this.$route.path == href && isNavbar },
          `${hoverClass}`,
        ]"
        >{{ text }}
      </a>
    </router-link>
  </span>
</template>

<script>
export default {
  name: "Navlink",

  props: {
    hoverClass: {
      type: String,
    },
    text: {
      type: String,
      default: " Nav Text Default",
    },
    isNavbar: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: "/",
    },
    type: {
      type: String,
      default: " ",
    },
    textColor: {
      type: String,
      default: "red",
    },
    fontSize: {
      type: String,
      default: "50px",
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
    color: var(--color-primary) !important;
    transition: 0.4s;
  }

  a.white {
    color: white;
    font-weight: 700;
    font-size: 20px;
  }
}
</style>
