<script setup>
import { mapActions, mapGetters } from "vuex";
import QuestionsList from "./QuestionsList.vue";
</script>

<template>
  <div class="selectedtest">
    <h1>{{ getSelectedTest.title || "No test selected" }}</h1>
    <div class="description">
      <h2>{{ getSelectedTest.description }}</h2>
    </div>
    <div class="count">
      <h3 v-show="getSelectedTest.title">{{ counter }} questions</h3>
    </div>
    <QuestionsList />
  </div>
</template>

<script>
export default {
  name: "SelectedTestItem",
  data() {
    return {};
  },
  props: {},
  methods: {
    ...mapActions("questionsModule", {
      selectQuestion: "selectQuestion",
      resetQuestions: "resetQuestions",
    }),
  },
  computed: {
    ...mapGetters("testsModule", {
      getSelectedTest: "getSelectedTest",
    }),
    ...mapGetters("questionsModule", {
      counter: "getQuestionsCount",
    }),
  },
  components: { QuestionsList },
};
</script>

<style scoped></style>
