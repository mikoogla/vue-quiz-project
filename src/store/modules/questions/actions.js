import { questions } from "../../../data/data.js";
export default {
  importQuestions(context) {
    //get questions from data.js file
    // console.log("importing Questions");
    setTimeout(() => {
      context.commit("setQuestions", questions);
    }, 200);
  },
  selectQuestion(context, payload) {
    //payload should be question id
    // console.log("pushing: " + payload);
    context.commit("pushQuestion", context.getters.getQuestionById(payload));
  },
  resetQuestions(context) {
    context.commit("resetQuestions");
  },
};
