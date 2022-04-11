<template>
  <div class="container-app">
    <div class="container-quiz">
      <p>Time left: {{ timerCount }}</p>
      <div class="step-progress" :style="{ width: progress + '%' }"></div>
      <h1>
        {{ quiz.name }}
      </h1>
      <button @click="startQuiz" v-if="!start">Start</button>
      <div class="box-button" v-if="start">
        <div class="quiz-main">
          <div class="box-question">
            {{ identifier }}/{{ quiz.questions.length - 1 }}
            <h2>{{ userQuiz.quiz.questions[identifier].question }}</h2>
          </div>
          <div class="box-suggestions">
            <ul>
              <li
                v-for="answer in userQuiz.quiz.questions[identifier].answers"
                :key="answer.id"
              >
                <span
                  @click="
                    setAnswer(
                      userQuiz.quiz.questions[identifier],
                      answer.answer
                    )
                  "
                  >{{ answer.answer }}</span
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="box-score">
          <p>Your Score: {{ userScore }} / {{ quiz.questions.length - 1 }}</p>
        </div>
        <div class="quiz-footer">
          <button @click="done()">Done</button>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    quiz() {
      return this.$store.getters.quiz(this.$route.params.id);
    },
    userScore() {
      return this.$store.getters.userScore;
    },
    userQuiz() {
      return this.$store.getters.userQuiz;
    },
  },
  data: () => ({
    start: undefined,
    identifier: 0,
    length: 10,
    progress: 0,
    timerCount: 500,
  }),
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true,
    },
  },
  methods: {
    startQuiz() {
      this.start = true;
      this.$store.commit("START_QUIZ", this.quiz.id);
    },
    setAnswer(question, answer) {
      if (this.identifier + 1 < this.quiz.questions.length) {
        this.identifier++;
      }
      return (
        (question.user_answer = answer),
        (this.progress = this.progress + 100 / this.quiz.questions.length)
      );
    },
    done() {
      this.$store.commit("CALCULATE_SCORE");
    },
  },
};
</script>
<style>
.box-score {
  margin-top: 20px;
}
</style>
