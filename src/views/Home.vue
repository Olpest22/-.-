<template>
    <div>
      <h1>Welcome to My Vue App</h1>
      <login-component />
      <register-component />
      <search-component />
      <product-list />
    </div>
</template>
  
  <script>
  import LoginComponent from '@/components/Login.vue';
  import RegisterComponent from '@/components/Register.vue';
  import SearchComponent from '@/components/Search.vue';
  import ProductList from '@/components/ProductList.vue';
  
  export default {
    components: {
      LoginComponent,
      RegisterComponent,
      SearchComponent,
      ProductList,
    },
  };
  </script>


<style>
h1 {
  text-align: center;
  margin-top: 50px;
  font-size: 2.5rem;
}

div {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}


@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .product-item {
    padding: 10px;
  }

  #login-button, #register-button, #search-button {
    font-size: 14px;
  }
}

</style>