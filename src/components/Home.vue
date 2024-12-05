<template>
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><router-link to="/new-instance">New Instance</router-link></li>
        <li><router-link to="/watcher">Watcher</router-link></li>
        <li><router-link to="/method">Method</router-link></li>
        <li><router-link to="/event-modifiers">Event Modifiers</router-link></li>
        <li><router-link to="/document-object-model">Document Object Model</router-link></li>
        <li><router-link to="/loops">Loops</router-link></li>
        <li><router-link to="/two-way-data-binding">Two Way Data Binding</router-link></li>
        <li><router-link to="/component-reusing">Component Reusing</router-link></li>
        <li><router-link to="/list-rendering">List Rendering</router-link></li>
        <li><router-link to="/list-rendering-mutation">List Rendering Mutation Methods</router-link></li>
        <li><router-link to="/passing-data">Passing Data to Child</router-link></li>
        <li><router-link to="/list-rendering-vif">List Rendering with v-if</router-link></li>
        <li><router-link to="/rendering-range">Rendering v-for with Range</router-link></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
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
    margin: 10px 0;
  }
  router-link {
    text-decoration: none;
    color: #3498db;
  }
  router-link:hover {
    text-decoration: underline;
  }
  </style>
  