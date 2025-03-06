<template>
    <h1>My Shopping Cart</h1>
    <Cart />
    <router-link to="/">Back to Home</router-link>
</template>

<script>
import Cart from '../components/Cart.vue';

export default {
  components: {
    Cart
  }
};
</script>