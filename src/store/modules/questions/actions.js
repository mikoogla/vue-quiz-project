import { questions } from "../../../data/data.js";
export default {
  importQuestions(context) {
    //get questions from data.js file
    console.log("importing Questions");
    setTimeout(() => {
      context.commit("setQuestions", questions);
    }, 200);
  },
};
