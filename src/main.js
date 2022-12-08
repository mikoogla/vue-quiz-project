import { createApp } from "vue";
// import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(store);
// app.use(axios);
app.mount("#app");
