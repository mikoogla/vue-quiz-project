<script setup>
import Overlay from "../components/LandingPage/Overlay.vue";
</script>
<template>
  <div class="lp-main">
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
.overlay-container {
  width: 100%;
  color: var(--background-color);
}
.lp-main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
}
.title {
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  align-items: center;
  padding-left: 50px;
  overflow: hidden;
}
</style>
