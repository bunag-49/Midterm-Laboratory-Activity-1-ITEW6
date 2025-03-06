<template>
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {{ totalItems }}</p>
      <p>Total Price: ₱{{ totalPrice }}</p>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['totalItems', 'totalPrice'])
    }
  };
  </script>