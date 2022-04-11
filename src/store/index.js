import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let MOCK_QUIZZES = [
  {
    id: 0,
    name: "Disney & Pixar",
    questions: [
      {
        id: 0,
        question: "Hvað eru margar tölur á buxunum hans Mikka Mús?",
        answers: [
          { id: 0, answer: "1" },
          { id: 1, answer: "2" },
          { id: 2, answer: "3" },
        ],
        correct_answer: "2",
      },
      {
        id: 1,
        question: "Hvern tölum við ekki um?",
        answers: [
          { id: 0, answer: "Guffi" },
          { id: 1, answer: "Voldemort" },
          { id: 2, answer: "Bruno" },
        ],
        correct_answer: "Bruno",
      },
      {
        id: 2,
        question: "Hvað eru gyðjurnar margar í Herkúles?",
        answers: [
          { id: 0, answer: "3" },
          { id: 1, answer: "5" },
          { id: 2, answer: "7" },
        ],
        correct_answer: "5",
      },
      {
        id: 3,
        question: "Hvað er nafnið á nágranna Adda í Toy Story?",
        answers: [
          { id: 0, answer: "Jón" },
          { id: 1, answer: "Pétur" },
          { id: 2, answer: "Siggi" },
        ],
        correct_answer: "Siggi",
      },
      {
        id: 4,
        question:
          "Hvað var Andinn lengi fastur í lampanum áður en Aladdín frelsaði hann?",
        answers: [
          { id: 0, answer: "10.000 ár" },
          { id: 1, answer: "1.000 ár" },
          { id: 2, answer: "100 ár" },
        ],
        correct_answer: "10.000 ár",
      },
      {
        id: 5,
        question: "Hversu marga bræður á Hans Prins í Frozen ?",
        answers: [
          { id: 0, answer: "12" },
          { id: 1, answer: "7" },
          { id: 2, answer: "10" },
        ],
        correct_answer: "12",
      },
      {
        id: 6,
        question: "Hvað áttu Pongó og Perla upprunalega marga hvolpa?",
        answers: [
          { id: 0, answer: "10" },
          { id: 1, answer: "15" },
          { id: 2, answer: "20" },
        ],
        correct_answer: "15",
      },
      {
        id: 7,
        question:
          "Hvaða Disney persóna var fyrst til að fá stjörnu á Hollywood Walk of fame?",
        answers: [
          { id: 0, answer: "Mikki Mús" },
          { id: 1, answer: "Guffi" },
          { id: 2, answer: "Andrés" },
        ],
        correct_answer: "Mikki Mús",
      },
      {
        id: 8,
        question: "Hvað heitir Dóttir Nölu og Simba í Konungi Ljónanna?",
        answers: [
          { id: 0, answer: "Moana" },
          { id: 1, answer: "Kiara" },
          { id: 2, answer: "Betty" },
        ],
        correct_answer: "Kiara",
      },
      {
        id: 9,
        question: "Hvaða söngvari söng lögin í ensku útgáfunni af Tarzan?",
        answers: [
          { id: 0, answer: "Phil Collins" },
          { id: 1, answer: "Frank Zappa" },
          { id: 2, answer: "Elton John" },
        ],
        correct_answer: "Phil Collins",
      },
      {
        id: 10,
        question: "Hvað er eina lagið sem er á ensku í Guffagrín ?",
        answers: [
          { id: 0, answer: "Nightmare" },
          { id: 1, answer: "Welcome to the jungle" },
          { id: 2, answer: "Stand out" },
        ],
        correct_answer: "Stand Out",
      },
    ],
  },
  {
    id: 1,
    name: "Harry Potter",
    questions: [
      {
        id: 0,
        question: "What house at Hogwarts does Harry belong to?",
        answers: [
          { id: 0, answer: "Ravenclaw" },
          { id: 1, answer: "Gryffindor" },
          { id: 2, answer: "Hufflepuff" },
        ],
        correct_answer: "Gryffindor",
      },
      {
        id: 1,
        question: "What position does Harry play on his Quidditch team?",
        answers: [
          { id: 0, answer: "Chaser" },
          { id: 1, answer: "Keeper" },
          { id: 2, answer: "Seeker" },
        ],
        correct_answer: "Seeker",
      },
      {
        id: 2,
        question: "Who is Fluffy?",
        answers: [
          { id: 0, answer: "Harrys Owl" },
          { id: 1, answer: "A Three Headed Dog" },
          { id: 2, answer: "Hagrids Dragon" },
        ],
        correct_answer: "A Three Headed Dog",
      },
      {
        id: 3,
        question: "What power do the dementors have over people?",
        answers: [
          { id: 0, answer: "They make them go crazy" },
          { id: 1, answer: "They make them do their bidding" },
          { id: 2, answer: "They drain them of all happiness" },
        ],
        correct_answer: "They drain them of all happiness",
      },
      {
        id: 4,
        question: "What does the Imperius Curse do?",
        answers: [
          { id: 0, answer: "Controls" },
          { id: 1, answer: "Tortures" },
          { id: 2, answer: "Kills" },
        ],
        correct_answer: "Controls",
      },
      {
        id: 5,
        question: "Who kills Professor Dumbledore ?",
        answers: [
          { id: 0, answer: "Severus Snape" },
          { id: 1, answer: "Draco Malfoy" },
          { id: 2, answer: "Bellatrix Lestrange" },
        ],
        correct_answer: "Severus Snape",
      },
      {
        id: 6,
        question: "How does Harry catch his first snitch?",
        answers: [
          { id: 0, answer: "In his hat" },
          { id: 1, answer: "In his mouth" },
          { id: 2, answer: "With his feet" },
        ],
        correct_answer: "In his mouth",
      },
      {
        id: 7,
        question: "What magical talent does Harry share with Voldemort?",
        answers: [
          { id: 0, answer: "he is a parselmouth" },
          { id: 1, answer: "he is a animagus" },
          { id: 2, answer: "He is an auror" },
        ],
        correct_answer: "he is a parselmouth",
      },
      {
        id: 8,
        question: "How did Moaning Myrtle die?",
        answers: [
          { id: 0, answer: "The killing curse" },
          { id: 1, answer: "The Basilisk" },
          { id: 2, answer: "A mountain troll" },
        ],
        correct_answer: "The Basilisk",
      },
      {
        id: 9,
        question: "What does the marauders map show?",
        answers: [
          { id: 0, answer: "The location of everyone at hogwarts" },
          { id: 1, answer: "Hidden Treasure" },
          { id: 2, answer: "The password to Dumbledore office" },
        ],
        correct_answer: "The location of everyone at hogwarts",
      },
      {
        id: 10,
        question: "Who is Scabbers the rat ?",
        answers: [
          { id: 0, answer: "Professor McGonagall" },
          { id: 1, answer: "Remus Lupin" },
          { id: 2, answer: "Peter Pettigrew" },
        ],
        correct_answer: "Peter Pettigrew",
      },
    ],
  },
  {
    id: 2,
    name: "Lord of the rings",
    questions: [
      {
        id: 0,
        question:
          "The Lord of the rings movies are based on a novel bu what author?",
        answers: [
          { id: 0, answer: "J.K Rowling" },
          { id: 1, answer: "J.R.R Tolkien" },
          { id: 2, answer: "H.G Wells" },
        ],
        correct_answer: "J.R.R Tolkien",
      },
      {
        id: 1,
        question:
          "What is the first voice we hear in The Fellowship of the Ring?",
        answers: [
          { id: 0, answer: "Gandalf" },
          { id: 1, answer: "Frodo" },
          { id: 2, answer: "Galadriel" },
        ],
        correct_answer: "Galadriel",
      },
      {
        id: 2,
        question:
          "The only way to destroy the ring of power is to throw it into the fires of...?",
        answers: [
          { id: 0, answer: "Mount Zion" },
          { id: 1, answer: "Mount Doom" },
          { id: 2, answer: "Mount Mordor" },
        ],
        correct_answer: "Mount Doom",
      },
      {
        id: 3,
        question: "What does Gollum call the ring of power?",
        answers: [
          { id: 0, answer: "My darling" },
          { id: 1, answer: "My lovely" },
          { id: 2, answer: "My precious" },
        ],
        correct_answer: "My precious",
      },
      {
        id: 4,
        question: "For what special occasion does Gandalf return to the Shire?",
        answers: [
          { id: 0, answer: "Bilbos birthday" },
          { id: 1, answer: "Bilbos funeral" },
          { id: 2, answer: "Bilbos wedding" },
        ],
        correct_answer: "Bilbos birthday",
      },
      {
        id: 5,
        question: "What do Merry and Pippin steal from Gandalf ?",
        answers: [
          { id: 0, answer: "Fireworks" },
          { id: 1, answer: "Hat" },
          { id: 2, answer: "Staff" },
        ],
        correct_answer: "Fireworks",
      },
      {
        id: 6,
        question: "Who tries to destroy the Ring at the council of Elrond?",
        answers: [
          { id: 0, answer: "Aragorn" },
          { id: 1, answer: "Gimli" },
          { id: 2, answer: "Legolas" },
        ],
        correct_answer: "Gimli",
      },
      {
        id: 7,
        question: "What actor was originally cast as Aragorn?",
        answers: [
          { id: 0, answer: "Stuart Townsend" },
          { id: 1, answer: "Christian Bale" },
          { id: 2, answer: "Brad Pitt" },
        ],
        correct_answer: "Stuart Townsend",
      },
      {
        id: 8,
        question: "In The Return of the King, who kills the witch king?",
        answers: [
          { id: 0, answer: "Aragorn" },
          { id: 1, answer: "Eowyn" },
          { id: 2, answer: "Gandalf" },
        ],
        correct_answer: "Eowyn",
      },
      {
        id: 9,
        question: "Who does Sam marry at the end of The Return of the King ?",
        answers: [
          { id: 0, answer: "Rosie Cotton" },
          { id: 1, answer: "Gilly Baggins" },
          { id: 2, answer: "Pearly Bottom" },
        ],
        correct_answer: "Rosie Cotton",
      },
      {
        id: 10,
        question: "Which hero tries to steal the Ring from Frodo ?",
        answers: [
          { id: 0, answer: "Gimli" },
          { id: 1, answer: "Legolas" },
          { id: 2, answer: "Boromir" },
        ],
        correct_answer: "Boromir",
      },
    ],
  },
];
export default new Vuex.Store({
  state: {
    quizzes: MOCK_QUIZZES,
    userQuiz: {
      quiz: undefined,
    },
    userScore: 0,
    count: 10,
  },
  getters: {
    quizList: (state) => state.quizzes,
    quiz: (state) => (id) => state.quizzes.find((q) => q.id == id),
    userQuiz: (state) => state.userQuiz,
    userScore: (state) => state.userScore,
  },
  mutations: {
    START_QUIZ(state, payload) {
      state.userQuiz.quiz = state.quizzes.find((q) => q.id == payload);
      
    },
    CALCULATE_SCORE(state) {
      for (const answer of state.userQuiz.quiz.questions) {
        if (answer.user_answer == answer.correct_answer) {
          state.userScore++;
        }
      }
    },
    ADD_QUIZ(state, payload) {
      payload.id = Math.random();
      state.quizzes.push(payload);
     
    },
  },
  actions: {},
  modules: {},
});
