import axios from "axios";
export default {
  importTests(context) {
    axios
      .get(
        "https://vue-db-multi-default-rtdb.europe-west1.firebasedatabase.app/tests.json"
      )
      .then((response) => {
        console;
        context.commit("setTests", response.data.tests);
      });
  },
  selectTest(context, payload) {
    context.commit("setSelectedTest", payload);
  },
  sendTests(context) {
    //send tests to server
    console.log("sending tests");
    axios
      .put(
        "https://vue-db-multi-default-rtdb.europe-west1.firebasedatabase.app/tests.json",
        {
          tests: tests,
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
