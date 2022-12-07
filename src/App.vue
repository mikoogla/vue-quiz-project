<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <!-- todo: background img in dynamic class based on router path -->
  <div class="app-container">
    <div
      class="nav-and-content"
      :class="{ backgroundImg: path === '/landing' }"
    >
      <Navbar />
      <RouterView class="content" />
    </div>
    <footer>
      <p>Copyright mikoogla 2022</p>
    </footer>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      path: this.$router.path,
    };
  },
  computed: {
    path() {
      return this.$route.path;
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
  min-height: 100vh;
}
.nav-and-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.backgroundImg {
  background-image: url("./assets/backImage.png");
  background-position: center;
}
.content {
  /* height: 100vh; */
}

.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
