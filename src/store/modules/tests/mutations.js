export default {
  setTests(state, payload) {
    state.tests = payload;
  },
  setSelectedTest(state, payload) {
    console.log("new selected test: " + payload.title);
    state.selectedTest = payload;
  },
};
