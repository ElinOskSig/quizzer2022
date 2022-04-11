<template>
  <div id="login">
    <h1>Login</h1>
    <div class="userLogin">
      <input
        type="text"
        name="username"
        v-model="input.username"
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        v-model="input.password"
        placeholder="Password"
      />
      <button type="button" v-on:click="login()">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) 
          this.$emit("authenticated", true);
          this.$router.replace({ name: "Home" });
        } else {
           this.input.username == this.$parent.mockAdminAccount.username &&
          this.input.password == this.$parent.mockAdminAccount.password
        
          this.$emit("authenticated", true);
          this.$router.replace({ name: "AdminHome" }); 
        }
    },
  },
};
</script>

<style>
.userLogin {
  margin-top: 80px;
}

.h1 {
  padding-bottom: 30px;
}
</style>
