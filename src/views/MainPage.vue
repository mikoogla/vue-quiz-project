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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.quizList,
.quizContent {
  width: 100%;
}
</style>
