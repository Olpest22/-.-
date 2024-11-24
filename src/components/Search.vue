<template>
  <div>
    <input id="search-input" v-model="query" placeholder="Search" />
    <button id="search-button" @click="search">Search</button>
    <div v-if="searchResult">{{ searchResult }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      searchResult: '',
    };
  },
  methods: {
    search() {
      this.searchResult = `Результаты поиска для: ${this.query}`;
    },
  },
};
</script>

<style scoped>
input {
  width: 80%;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#search-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#search-button:hover {
  background-color: #218838;
}

div {
  text-align: center;
  margin-top: 20px;
}
</style>
