<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" exact-active-class="active">Home</router-link>
        <router-link to="/cart">
          My Cart <span class="cart-badge">{{ cartCount }}</span>
        </router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartCount"]),
  },
};
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  gap: 20px;
}

.active {
  font-weight: bold;
  text-decoration: underline;
}

.cart-badge {
  background-color: red;
  color: white;
  padding: 2px 8px;
  border-radius: 50%;
  font-size: 0.9rem;
  margin-left: 5px;
}
</style>

