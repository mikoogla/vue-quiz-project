<script setup></script>
<template>
  <div class="main">
    <ul className="flexRow">
      Navbar
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/quiz">Main</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
  </div>
</template>
<script></script>
<style scoped>
a {
  color: white;
  text-decoration: none;
}
li {
  list-style-type: none;
  margin: 0px 10px;
}
.main {
  width: 100%;
  max-height: 4rem;
  background-color: var(--background-color);
  color: var(--text-color);
  border-bottom: 2px outset var(--accent-color);
  border-radius: 0px 0px 22px 22px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
}
.flexRow {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0px;
}
</style>
