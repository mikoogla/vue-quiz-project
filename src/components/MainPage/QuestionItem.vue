<template>
  <div class="w">
    <h2>{{ question.title }}</h2>
    <div class="answers-container">
      <div
        v-for="answer in question.options"
        @click="response(answer)"
        class="answer"
        :class="{
          correct: reveal && answer === question.answer,
          wrong: reveal && answer !== question.answer,
        }"
      >
        {{ answer }}
      </div>
      <p v-if="reveal && goodAnswer" style="color: green">
        Congratulations! Answer is correct
      </p>
      <p v-if="reveal && !goodAnswer" style="color: red">
        Wrong. Correct answer is {{ question.answer }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reveal: false,
      answered: false,
      goodAnswer: false,
    };
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  methods: {
    response(answer) {
      this.reveal = true;
      if (this.answered === true) return;
      this.answered = true;
      console.log("selected answer: " + answer);
      if (answer === this.question.answer) {
        this.goodAnswer = true;
      } else {
        this.goodAnswer = false;
      }
    },
  },
};
</script>

<style scoped>
.answer {
  background-color: var(--background-color);
  color: var(--text-color);
  border-bottom: 1px solid var(--text-color);
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.answer:hover {
  filter: brightness(1.6);
}

.correct {
  background-color: var(--correct-color);
  border-bottom: 0.5px solid #00ff005e;
  color: var(--text-color);
}

.wrong {
  background-color: var(--wrong-color);
  border-bottom: 0.5px solid #ff000069;
  color: var(--text-color);
}
</style>
