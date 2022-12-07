<script setup></script>

<template>
  <div class="testitem">
    <slot>No name</slot>
  </div>
</template>

<script></script>

<style scoped>
.testitem {
  background-color: var(--background-color);
  filter: brightness(1.1);
  border-bottom: 1px solid #5e8aa7;
  border-radius: 0px 0px 15px 15px;
  color: var(--text-color);
  padding: 10px;
  width: 100%;
}
.testitem:hover {
  filter: brightness(1.5);
  cursor: pointer;

  transition: all 0.2s ease-in-out;
}
</style>
