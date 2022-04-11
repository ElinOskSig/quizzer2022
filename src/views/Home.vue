<template>
  <div class="home">
    <div class="links">
      <h1>Pick a quiz!</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create</router-link>
    </div>
    <ul class="quizGenres">
      <li v-for="quiz in quizList" :key="quiz.id">
        <router-link :to="`/quiz/${quiz.id}`">{{ quiz.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
  computed: {
    quizList() {
      return this.$store.getters.quizList;
    },
  },
};
</script>
<style>
.quizGenres {
  padding-left: 160px;
}
</style>
