<template>
    <div class="container">
      <h2 class="text-2xl font-bold text-center mb-4">List of Added Products</h2>
      <ul v-if="cartItems.length">
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }} - ₱{{ item.price }} x {{ item.quantity }}
          <button @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <h3 v-else>Your cart is empty.</h3>
      <h3>Total Items: {{ cartCount }}</h3>
      <h3>Total Price: ₱{{ cartTotal }}</h3>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['cartItems', 'cartTotal', 'cartCount'])
    },
    methods: {
      ...mapActions(['removeFromCart'])
    }
  };
  </script>

<style>
.container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
li {
  display: center;
  justify-content: left;
  margin: 10px;
  align-items: center;
  font-size: large;
}
ul {
  list-style: none;
  padding: 0;
}
</style>
  