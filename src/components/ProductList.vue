<template>
  <div>
    <div id="product-list">
      <div class="product-item" v-for="product in products" :key="product.id">
        {{ product.name }}
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>

    <div v-if="cartMessage" class="cart-notification">
      {{ cartMessage }}
    </div>

    <div v-if="cart.length === 0" class="empty-cart-message">
      Корзина пуста
    </div>

    <button id="cart" @click="viewCart">View Cart</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ],
      cart: [],
      cartMessage: '',
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
      this.cartMessage = `Ваш товар ${product.name} добавлен в корзину`;
    },
    viewCart() {
      alert('Перейти в корзину');
    },
  },
};
</script>

<style scoped>
.cart-notification {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-size: 16px;
}

.empty-cart-message {
  margin-top: 20px;
  font-size: 18px;
  color: #dc3545; 
  text-align: center;
}
</style>
