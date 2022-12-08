const questions = [
  {
    id: 1,
    title: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    id: 2,
    title: "How to pass props in Vue.js?",
    options: ["v-bind", "v-model", "v-for", "v-if"],
    answer: "v-bind",
  },
  {
    id: 3,
    title: "in Vue.js, what is the use of v-model?",
    options: [
      "To bind data",
      "To bind events",
      "To bind data and events",
      "To bind data and events with two-way binding",
    ],
    answer: "To bind data and events with two-way binding",
  },
  {
    id: 4,
    title: "What is the capital of Poland?",
    options: ["Warsaw", "Krakow", "Gdansk", "Wroclaw"],
    answer: "Warsaw",
  },
  {
    id: 5,
    title: "How to emit events in Vue.js?",
    options: ["$emit", "$on", "$off", "$once"],
    answer: "$emit",
  },
  {
    id: 6,
    title: "How to create a new Vue instance?",
    options: ["new Vue()", "new Vue", "Vue()", "Vue"],
    answer: "new Vue()",
  },
  {
    id: 7,
    title: "What is the best programming language?",
    options: ["C++", "Python", "Java", "JavaScript"],
    answer: "JavaScript",
  },
  //4 more vue.js questions:
  {
    id: 8,
    title: "What is the capital of France?",
    options: ["Paris", "Marseille", "Lyon", "Toulouse"],
    answer: "Paris",
  },
  {
    id: 9,
    title: "What is the capital of Germany?",
    options: ["Berlin", "Hamburg", "Munich", "Cologne"],
    answer: "Berlin",
  },
  {
    id: 10,
    title: "What is the capital of Papua-New Guinea?",
    options: ["Port Moresby", "Lae", "Madang", "Mount Hagen"],
    answer: "Port Moresby",
  },
  {
    id: 11,
    title: "What computed is for in Vue.js?",
    options: [
      "To bind data",
      "To bind events",
      "To bind data and events",
      "To bind data and events with two-way binding",
    ],
    answer: "To bind data and events with two-way binding",
  },
];

const tests = [
  {
    id: 1,
    title: "Vue.js Quiz",
    description: "This is a quiz about Vue.js",
    questions: [1, 2, 3, 4, 5, 6, 7, 11],
    color: "green",
  },
  {
    id: 2,
    title: "Capital Cities Quiz",
    description: "This is a quiz about capital cities",
    questions: [1, 4, 8, 9, 10],
    color: "blue",
  },
  {
    id: 3,
    title: "Programming Languages Quiz",
    description: "This is a quiz about programming languages",
    questions: [7],
    color: "red",
  },
];

export { questions, tests };
