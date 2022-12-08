<script setup></script>

<template>
  <input />
</template>

<script></script>

<style scoped>
input {
  font-size: 1.1rem;
  appearance: none;
  outline: none;
  border: none;
  border-bottom: 2px outset var(--accent-color);
  background-color: var(--background-color);
  filter: contrast(0.9);
  color: var(--text-color);
  border-radius: 0px 0px 15px 15px;
  padding: 15px;
  width: 80%;
  transition: all 0.2s ease-in-out;
}
input:focus {
  border-radius: 0px;
  outline: none;
}
</style>
