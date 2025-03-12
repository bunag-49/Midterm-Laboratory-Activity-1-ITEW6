<template>
  <div class="container">
    <h2 class="text-2xl font-bold text-center mb-4">List of Products</h2>
    <ul class="space-y-4">
      <li 
        v-for="product in products" 
        :key="product.id" 
        class="flex justify-between items-center border-b pb-2"
      >
        <span class="text-lg">{{ product.name }} - ₱{{ product.price }}</span>
        <button 
          @click="addToCart(product)" 
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
        >
          Add to Cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['allProducts'])
  },
  methods: {
    ...mapActions(['addToCart'])
  },
  created() {
    this.products = this.allProducts;
  }
};
</script>

<style scoped>
.container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

ul {
  list-style: disc;
}
li {
  display: center;
  justify-content: space-between;
  margin: 10px;
  align-items: center;
}
button {
  flex-shrink: 0;
  margin-left: 5px;
}
</style>