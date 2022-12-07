<script setup>
import Overlay from "../components/LandingPage/Overlay.vue";
</script>
<template>
  <div class="main">
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
  margin: 50px;
}
.overlay-container {
  width: 100%;
  height: 50%;
  bottom: 0px;
  color: var(--background-color);
  overflow: hidden;
}
.main {
  width: 100%;
  height: 100%;
  background-image: url("../assets/backImage.png");
  background-color: var(--background-color);
  background-position: center;
  filter: brightness(0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.title {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
