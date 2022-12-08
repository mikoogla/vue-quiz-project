<script setup></script>
<template>
  <div class="nav-main">
    <ul className="flexRow">
      <div class="logo">
        <img src="../assets/Logo2.png" alt="logo" width="30" /> Quizx
      </div>
      <div class="burger" @click="toggleMenu">
        <img src="../assets/burger.png" alt="logo" width="30" />
      </div>
      <!-- <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/quiz">Main</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li> -->
    </ul>
  </div>
</template>
<script>
export default {
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
}
li {
  list-style-type: none;
  margin: 0px 10px;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  color: var(--accent-color);
  width: 100%;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  gap: 10px;
}
.burger {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
}
.burger:hover {
  cursor: pointer;
  filter: brightness(0.5);
}
.nav-main {
  z-index: 1;
  background-color: var(--background-color);
  color: var(--text-color);
  border-bottom: 2px outset var(--accent-color);
  border-radius: 0px 0px 22px 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
}
.flexRow {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
  padding: 0 50px;
  margin: 0px;
}

@media (max-width: 768px) {
  .flexRow {
    padding: 0 20px;
  }
}
</style>
