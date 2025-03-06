<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/cart">My Cart</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 20px;
}
</style>
