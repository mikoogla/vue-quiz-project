import { tests } from "../../../data/data.js";
export default {
  importTests(context) {
    //get questions from data.js file
    setTimeout(() => {
      context.commit("setTests", tests);
    }, 200);
  },
  selectTest(context, payload) {
    context.commit("setSelectedTest", payload);
  },
};
