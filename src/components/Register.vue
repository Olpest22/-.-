<template>
    <div>
      <form @submit.prevent="register">
        <input id="new-username" v-model="username" placeholder="Username" />
        <input id="new-email" v-model="email" placeholder="Email" />
        <input id="new-password" type="password" v-model="password" placeholder="Password" />
        <button id="register-button" type="submit">Register</button>
      </form>
      <div v-if="successMessage">{{ successMessage }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        successMessage: '',
      };
    },
    methods: {
      register() {
        this.successMessage = 'Регистрация успешна';
      },
    },
  };
  </script>
 <style>
  #register-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  margin-top: 10px;
}

#register-button:hover {
  background-color: #0056b3;
}

input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

form {
  width: 300px;
  margin: auto;
  padding: 20px;
  border-radius: 5px;
  background-color: #f4f4f4;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

</style>