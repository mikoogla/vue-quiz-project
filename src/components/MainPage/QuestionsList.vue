<script setup>
import { mapGetters, mapActions } from "vuex";
import QuestionItem from "./QuestionItem.vue";
</script>
<template>
  <div class="questList">
    <button @click="importQuestions">Import questions</button>
    <QuestionItem v-for="q in selectedQuestions" class="item">
      {{ q !== undefined && q.title !== undefined ? q.title : "No question" }}
    </QuestionItem>
  </div>
</template>
<script>
export default {
  computed: {
    ...mapGetters("questionsModule", {
      selectedQuestions: "getSelectedQuestions",
    }),
  },
  methods: {
    ...mapActions("questionsModule", {
      importQuestions: "importQuestions",
    }),
  },
  components: { QuestionItem },
};
</script>
<style scoped>
@media (max-width: 768px) {
}
</style>
