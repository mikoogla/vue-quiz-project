export default {
  getQuestions: (state) => state.questions,
  getQuestionsCount: (state) => state.selectedQuestions.length,
  getQuestionById: (state) => (id) => {
    return state.questions.find((question) => question.id === id);
  },
  getSelectedQuestions: (state) => state.selectedQuestions,
};
