<script setup>
import { mapActions, mapGetters } from "vuex";
import QuestionsList from "./QuestionsList.vue";
import Button from "./../../UI/Button.vue";
</script>

<template>
  <div class="selectedtest">
    <div v-if="!started">
      <h1>{{ getSelectedTest.title || "No test selected" }}</h1>
      <div class="description">
        <h2>{{ getSelectedTest.description }}</h2>
      </div>
      <div class="count">
        <h3 v-show="getSelectedTest.title">{{ counter }} questions</h3>
      </div>
    </div>
    <QuestionsList v-show="started" />
    <Button v-if="!started && getSelectedTest" @click="startQuiz">Start</Button>
  </div>
</template>

<script>
export default {
  name: "SelectedTestItem",
  data() {
    return {
      started: false,
    };
  },
  props: {},
  methods: {
    startQuiz() {
      this.started = true;
    },
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
  watch: {
    getSelectedTest() {
      console.log("getSelectedTest changed");
      this.started = false;
      return this.getSelectedTest || {};
    },
  },
  components: { QuestionsList },
};
</script>

<style scoped>
Button {
  background-color: var(--button-color);
  color: var(--background-color);
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
