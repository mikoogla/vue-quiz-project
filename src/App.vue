<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <!-- todo: background img in dynamic class based on router path -->
  <div class="main backgroundImg">
    <header>
      <Navbar />
    </header>
    <main>
      <div class="content">
        <RouterView />
      </div>
    </main>
  </div>
  <footer>
    <p>Copyright mikoogla 2022</p>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--background-color);
  filter: brightness(0.8);
  color: var(--text-color);
  text-align: center;
  padding: 0.5rem;
}
main {
  flex: 1;
}
.backgroundImg {
  background-image: url("./assets/backImage.png");
  background-position: center;
}
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.content {
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
}
</style>
