<template>
  <div class="createQuiz">
    <h1>Create a new quiz</h1>
    <label for="QuizName">Quiz Name:</label>
    <input type="text" id="QuizName" v-model="quizName"/>
    <label for="question">Question:</label>
    <input type="text" id="question" v-model="question"/>
    <label for="Correct answer">Correct answer:</label>
    <input type="text" id="Correct answer" v-model="correct_answer" />
    <label for="answer">Answer:</label>
    <input type="text" id="answer" v-model="answer" />
    <button @click="addAnswer()">Add</button>
    {{ answers }}
    <div>
      <br />
      <button @click="addQuestion()">Save Question</button>
    </div>
    <div>
      <button @click="done()">Done</button>
      {{ quiz }}
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    quizName: undefined,
    question: undefined,
    correct_answer: undefined,
    answer: undefined,
    answers: [],
    quiz: {
      name: undefined,
      questions: [],
    },
  }),
  methods: {
    addAnswer() {
      this.answers.push({ id: Math.random(), answer: this.answer });
      this.answer = undefined;
    },
    addQuestion() {
      let newQuestion = {
        id: Math.random(),
        question: this.question,
        correct_answer: this.correct_answer,
        answers: this.answer,
      };
      this.quiz.name = this.quizName;
      this.quiz.questions.push(newQuestion);
      this.correct_answer = undefined;
      this.question = undefined;
      this.answers = [];
    },
    done() {
      this.$store.commit("ADD_QUIZ", this.quiz);
      this.$router.push("/home");
    },
  },
};
</script>

<style>
.createQuiz {
  padding-top: 30px;
}
</style>
