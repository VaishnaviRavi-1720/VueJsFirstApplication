<template>
    <div>
      <h1>Available Products</h1>
      <ul>
        <li v-for="product in products" v-if="product.inStock" :key="product.id">
          {{ product.name }} - Price: ${{ product.price }}
        </li>
      </ul>
      <h2 v-if="!hasInStockProducts">No products are available in stock.</h2>
    </div>
  </template>
  
  <script>
  export default {
    name: "RenderingVForWithVIf",
    data() {
      return {
        products: [
          { id: 1, name: "Laptop", price: 1200, inStock: true },
          { id: 2, name: "Smartphone", price: 800, inStock: false },
          { id: 3, name: "Tablet", price: 450, inStock: true },
          { id: 4, name: "Headphones", price: 150, inStock: false },
        ],
      };
    },
    computed: {
      hasInStockProducts() {
        return this.products.some((product) => product.inStock);
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #2c3e50;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    background: #ecf0f1;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
  }
  h2 {
    color: #e74c3c;
  }
  </style>
  