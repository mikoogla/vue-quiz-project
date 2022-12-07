<script setup>
import Overlay from "../components/LandingPage/Overlay.vue";
</script>
<template>
  <div class="lp-container">
    <div class="title">
      <h1>Any questions?</h1>
    </div>
    <div class="overlay-container"><Overlay /></div>
  </div>
</template>
<script></script>
<style scoped>
h1 {
  font-size: 4rem;
  font-weight: 400;
  margin: 0;
}
.lp-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  color: var(--text-color);
}
.overlay-container {
  width: 100%;
  color: var(--background-color);
}
.title {
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 50px;
}
</style>
