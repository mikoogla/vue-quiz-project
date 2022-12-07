import { questions } from "../../../data/data.js";
export default {
  importQuestions(context) {
    //get questions from data.js file
    console.log("importing Questions");
    console.log("importing Questions");
    setTimeout(() => {
      context.commit("setQuestions", questions);
    }, 3000);
  },
  doNothing() {
    console.log("doing nothing");
  },
};
