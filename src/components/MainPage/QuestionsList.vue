<script setup>
import { mapGetters, mapActions } from "vuex";
import TestItem from "./TestItem.vue";
</script>
<template>
  <div class="questList">
    <button @click="importQuestions">Get questions</button>
    <TestItem v-for="question in questions" class="item">
      Q: {{ question.title }}
    </TestItem>
    <TestItem v-for="question in questions" class="item">
      Q: {{ question.title }}
    </TestItem>
    <TestItem v-for="question in questions" class="item">
      Q: {{ question.title }}
    </TestItem>
  </div>
</template>
<script>
export default {
  computed: {
    ...mapGetters("questionsModule", {
      questions: "getQuestions",
    }),
  },
  methods: {
    ...mapActions("questionsModule", {
      importQuestions: "importQuestions",
    }),
  },
};
</script>
<style scoped>
.questList {
  background-color: var(--background-color);
  filter: brightness(1.1);
  height: calc(100vh - 64px);
  padding: 0 20px;
}

@media (max-width: 768px) {
  .questList {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
