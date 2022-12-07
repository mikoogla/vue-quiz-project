import { tests } from "../../../data/data.js";
export default {
  importTests(context) {
    //get questions from data.js file
    console.log("importing Tests");
    setTimeout(() => {
      context.commit("setTests", tests);
    }, 3000);
  },
};
