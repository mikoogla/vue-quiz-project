<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Menu from "./components/Menu.vue";
</script>

<template>
  <!-- todo: background img in dynamic class based on router path -->
  <div class="app-container">
    <div :class="{ background: path === '/landing' }"></div>
    <Menu @toggle-menu="toggleMenu" v-if="menuOpen" />
    <Navbar @toggle-menu="toggleMenu" class="navbar" />
    <RouterView class="content" />
    <div class="footer">
      <p>Copyright mikoogla 2022</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      menuOpen: false,
    };
  },
  computed: {
    path() {
      return this.$route.path;
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      console.log("toggle menu");
    },
  },
  mounted() {
    console.log(this.$route.path);
  },
};
</script>
<style scoped>
footer {
  background-color: var(--background-color);
  filter: brightness(0.8);
  color: var(--text-color);
  text-align: center;
  padding: 0.5rem;
}
.app-container {
  display: flex;
  flex-direction: column;
}
.background {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url("./assets/backImage.png");
  background-position: center;
}
.navbar {
  position: fixed;
  height: var(--navigation-height);
  width: 100%;
}

.content {
  margin-top: calc(var(--navigation-height) + 3px);
  height: calc(100vh - var(--navigation-height));
}
.footer {
  height: var(--navigation-height);
  filter: brightness(1.1);
  width: 100%;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
