<template>
  <div>
    <form @submit.prevent="login">
      <input id="username" v-model="username" placeholder="Username" />
      <input id="password" type="password" v-model="password" placeholder="Password" />
      <button id="login-button" type="submit">Login</button>
    </form>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    login() {
      if (this.username !== 'testuser' || this.password !== 'password') {
        this.errorMessage = 'Неправильный логин или пароль';
      } else {
        this.$router.push('/dashboard');
      }
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
