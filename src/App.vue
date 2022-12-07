<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="main">
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
    <p>Copyright 2022</p>
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
<!--  -->
