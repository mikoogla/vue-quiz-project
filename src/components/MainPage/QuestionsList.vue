<script setup>
import { mapGetters, mapActions } from "vuex";
</script>
<template>
  <div class="questList">
    <button @click="importQuestions">Get questions</button>
    <div v-for="question in questions" class="item">
      Q: {{ question.title }}
    </div>
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
  background-color: #383636;
  padding: 20px;
  height: 100%;
}
</style>
