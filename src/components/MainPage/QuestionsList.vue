<script setup>
import { mapGetters, mapActions } from "vuex";
import TestItem from "./TestItem.vue";
</script>
<template>
  <div class="questList">
    <button @click="importQuestions">Get questions</button>
    <!-- <TestItem v-for="question in questions" class="item">
      Q: {{ question.title }}
    </TestItem> -->
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
}

@media (max-width: 768px) {
  .questList {
  }
}
</style>
