<script setup></script>

<template>
  <input />
</template>

<script></script>

<style scoped>
input {
  background-color: var(--background-color);
  filter: contrast(0.8);
  color: var(--text-color);
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 80%;
}
input:focus {
  outline: 1px solid var(--accent-color);
}
</style>
