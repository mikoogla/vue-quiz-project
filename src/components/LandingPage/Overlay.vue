<script setup>
import Button from "../../UI/Button.vue";
</script>

<template>
  <div class="overlay">
    <div class="textcontent">
      Create online tests with
      <div class="logo">
        <img src="../../assets/Logo.png" alt="logo" width="60" /> Quizx
      </div>
    </div>
    <div class="buttonContainer">
      <RouterLink to="/quiz"><Button>Start Now</Button></RouterLink>
    </div>
  </div>
</template>
<script></script>

<style scoped>
.logo {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  font-weight: 700;
  margin-top: 1.5rem;
}
.buttonContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
}
.overlay {
  width: 100%;

  border-radius: 22px 22px 0 0;
  background-color: var(--accent-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.textcontent {
  color: var(--background-color);
  font-size: 2.5rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 50px;
}

@media (max-width: 768px) {
  .overlay {
    width: 100%;
    flex-direction: column;
  }
}
</style>
