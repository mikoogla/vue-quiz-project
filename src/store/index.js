import { createStore } from "vuex";

import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

import questionsModule from "./modules/questions/index.js";
import testsModule from "./modules/tests/index.js";

const store = createStore({
  modules: {
    questions: questionsModule,
    tests: testsModule,
  },
  state() {
    return {
      count: 0,
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
});

export default store;
