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
  border: 1px solid var(--text-color);
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.answer:hover {
  filter: brightness(1.6);
}

.correct {
  background-color: #063106;
  border: 1px solid #00ff00;
  color: var(--text-color);
}

.wrong {
  background-color: #380101;
  border: 1px solid #ff0000;
  color: var(--text-color);
}
</style>
