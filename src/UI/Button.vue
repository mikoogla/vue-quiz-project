<script setup></script>

<template>
  <button>
    <slot>Submit</slot>
  </button>
</template>

<script></script>

<style scoped>
button {
  background-color: var(--background-color);
  color: var(--text-color);
  text-decoration: none;
  border: none;
  border-radius: 5px;
  padding: 20px 30px;
  font-size: 1.2rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
button:hover {
  filter: contrast(1.5);
}
</style>
