import { createStore } from 'vuex';

// Sample product list
const products = [
  { id: 1, name: 'Laptop', price: 32000 },
  { id: 2, name: 'Android Phone', price: 15000 },
  { id: 3, name: 'Monitor', price: 2500 },
  { id: 4, name: 'CPU', price: 10000 },
  { id: 5, name: 'Mouse', price: 1000 },
  { id: 6, name: 'Keyboard', price: 1500 },
  { id: 7, name: 'HDMI', price: 250 },
  { id: 8, name: 'USB', price: 300 },
  { id: 9, name: 'Hard Drive', price: 400 },
  { id: 10, name: 'Processor', price: 800 },
];

export default createStore({
  state: {
    products: products,
    cart: []
  },
  getters: {
    allProducts: (state) => state.products,
    cartItems: (state) => state.cart,
    cartTotal: (state) => state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    cartCount: (state) => state.cart.reduce((sum, item) => sum + item.quantity, 0),
  },
  mutations: {
    addToCart(state, product) {
      const item = state.cart.find((i) => i.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      const index = state.cart.findIndex((item) => item.id === productId);
      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity--;
        } else {
          state.cart.splice(index, 1);
        }
      }
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    }
  }
});
