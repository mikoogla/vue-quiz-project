import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

export default {
  namespaced: true,
  state() {
    return {
      tests: [],
      selectedTest: "",
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
