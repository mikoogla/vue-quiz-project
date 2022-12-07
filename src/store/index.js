import { createStore } from "vuex";

import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

import questionsModule from "./modules/questions/index.js";
import testsModule from "./modules/tests/index.js";

const store = createStore({
  modules: {
    questionsModule: questionsModule,
    testsModule: testsModule,
  },
  state() {
    return {};
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
});

export default store;
