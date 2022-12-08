export default {
  setQuestions(state, payload) {
    state.questions = payload;
  },
  pushQuestion(state, payload) {
    state.selectedQuestions.push(payload);
  },
  resetQuestions(state) {
    state.selectedQuestions = [];
  },
};
