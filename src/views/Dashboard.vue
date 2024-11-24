<template>
  <div>
    <h2>Dashboard</h2>
    <button id="logout-button" @click="logout">Logout</button>
    <div v-if="loggedOutMessage" class="logout-message">
      Вы успешно вышли из системы
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedOutMessage: false,
    };
  },
  methods: {
    logout() {

      this.loggedOutMessage = true;

      setTimeout(() => {
        this.$router.push('/'); 
      }, 2000);
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 50px;
}

.logout-message {
  color: green;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
}

#logout-button {
  display: block;
  width: 200px;
  margin: 20px auto;
  padding: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#logout-button:hover {
  background-color: #c82333;
}

div {
  text-align: center;
}
</style>
