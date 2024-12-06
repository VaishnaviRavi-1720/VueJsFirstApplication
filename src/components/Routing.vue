<template>
    <div class="routing">
      <h1>Welcome to Vue.js Routing Example</h1>
      <nav>
        <router-link to="/helloworld">Go to Hello World</router-link> |
        <router-link to="/hellogeek">Go to Hello Geek</router-link>
      </nav>
      <!-- Router View to display the routed component -->
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: "Routing",
  };
  </script>
  
  <style>
  nav {
    margin: 20px 0;
  }
  
  nav a {
    margin-right: 10px;
    text-decoration: none;
    color: #42b983;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  
  h1 {
    color: #2c3e50;
    font-size: 24px;
  }
  </style>
  