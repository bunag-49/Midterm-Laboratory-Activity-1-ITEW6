<template>
  <div>
    <h1>Welcome to Gadget Store!</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';

export default {
  components: {
    ProductList
  }
};
</script>
