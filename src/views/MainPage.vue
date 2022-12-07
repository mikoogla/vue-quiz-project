<script setup>
import QuestionsList from "../components/MainPage/QuestionsList.vue";
import TestList from "../components/MainPage/TestList.vue";
</script>
<template>
  <div class="q-container">
    <div class="quizList"><TestList /></div>
    <div class="quizContent"><QuestionsList /></div>
  </div>
</template>
<script></script>
<style scoped>
.q-container {
  max-height: calc(100vh - 64px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.quizList {
  width: 30%;
}
.quizContent {
  width: 70%;
}

@media (max-width: 768px) {
  .q-container {
    flex-direction: column;
    max-height: calc(100vh - 64px);
  }
  .quizList {
    width: 100%;
  }
  .quizContent {
    width: 100%;
    height: 100%;
  }
  .quizContent,
  .quizList {
    margin-bottom: 20px;
    justify-content: center;
  }
}
</style>
