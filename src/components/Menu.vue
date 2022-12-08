<script setup>
import vClickOutside from "v-click-outside";
</script>
<template>
  <div @click="toggleMenu" class="menu-container">
    <h1>Menu</h1>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/quiz">Main</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </div>
</template>
<script>
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    toggleMenu() {
      this.$emit("toggleMenu");
    },
  },
};
</script>
<style scoped>
a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.5rem;
}
a:hover {
  color: var(--accent-color);
}
.menu-container {
  width: 50%;
  max-width: 500px;
  height: 100%;
  background-color: black;
  position: fixed;
  right: 0;
  z-index: 1;
  color: var(--text-color);
  margin-top: var(--navigation-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .menu-container {
    width: 100%;
    max-width: 100%;
  }
}
</style>
