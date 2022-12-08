export default {
  getTests: (state) => state.tests,
  getSelectedTest(state) {
    console.log("getSelectedTest, returning: " + state.selectedTest.title);
    return state.selectedTest;
  },
};
