import axios from "axios";
// import { questions } from "../../../data/data.js";
export default {
  importQuestions(context) {
    //get questions from data.js file
    // console.log("importing Questions");
    axios
      .get(
        "https://vue-db-multi-default-rtdb.europe-west1.firebasedatabase.app/questions.json"
      )
      .then((response) => {
        console.log(response);
        context.commit("setQuestions", response.data.questions);
      });
  },
  selectQuestion(context, payload) {
    //payload should be question id
    // console.log("pushing: " + payload);
    context.commit("pushQuestion", context.getters.getQuestionById(payload));
  },
  resetQuestions(context) {
    context.commit("resetQuestions");
  },
  sendQuestions(context) {
    //send questions to server
    console.log("sending questions");
    axios
      .put(
        "https://vue-db-multi-default-rtdb.europe-west1.firebasedatabase.app/questions.json",
        {
          questions: questions,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
