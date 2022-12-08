<script setup>
import QuestionsList from "../components/MainPage/QuestionsList.vue";
import TestList from "../components/MainPage/TestList.vue";
import SelectedTestItem from "../components/MainPage/SelectedTestItem.vue";
</script>
<template>
  <div class="q-container">
    <div class="testsList"><TestList /></div>
    <div class="selectedTest">
      <SelectedTestItem />
    </div>
  </div>
</template>
<script></script>
<style scoped>
.q-container {
  /* padding: 20px 20px 0 20px; */
  display: flex;
  flex-direction: row;
}
.testsList {
  overflow-y: auto;
  width: 35%;
  padding: 20px;
}
.selectedTest {
  overflow-y: auto;
  width: 65%;
  padding: 20px;
}

@media (max-width: 768px) {
  .q-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .testsList,
  .selectedTest {
    background-color: var(--background-color);
    /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.404)); */
    border: 0.5px solid rgba(255, 255, 255, 0.171);
    width: 80%;
    min-height: 300px;
  }
}
</style>
