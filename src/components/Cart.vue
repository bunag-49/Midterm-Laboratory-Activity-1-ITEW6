<template>
  <div class="container">
    <h2 class="text-2xl font-bold text-center mb-4">List of Added Products</h2>
    <ul v-if="cartItems.length">
      <li v-for="item in cartItems" :key="item.id" class="cart-item">
        <span>{{ item.name }} - ₱{{ item.price }} x {{ item.quantity }}</span>
        <button class="remove-btn" @click="removeFromCart(item.id)">Remove</button>
      </li>
    </ul>
    <h3 v-else>Your cart is empty.</h3>
    <h3>Total Items: {{ cartCount }}</h3>
    <h3>Total Price: ₱{{ cartTotal }}</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartItems", "cartTotal", "cartCount"]),
  },
  methods: {
    ...mapActions(["removeFromCart"]),
  },
};
</script>

<style scoped>
.container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  font-size: large;
}

.remove-btn {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: darkred;
}
</style>
