<script setup></script>

<template>
  <div class="overlay">
    <div class="textcontent">Create online tests with<br />Logo</div>
    <div class="buttonContainer">
      <RouterLink to="/quiz"><button>Click</button></RouterLink>
    </div>
  </div>
</template>
<script></script>

<style scoped>
.buttonContainer {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 50px;
}
.overlay {
  width: 100%;
  border-radius: 22px 22px 0 0;
  background-color: var(--accent-color);
  height: 100%;
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
  padding: 0px 50px;
}
</style>
