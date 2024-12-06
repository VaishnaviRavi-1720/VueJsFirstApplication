<template>
    <div>
      <h2>List Rendering with v-for and an Object</h2>
      <p>The following data is displayed using v-for to loop over an object:</p>
      <ul>
        <li v-for="(value, key) in person" :key="key">
          {{ key }}: {{ value }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "ListRenderingVForWithObject",
    data() {
      return {
        person: {
          name: "John Doe",
          age: 30,
          occupation: "Software Developer",
          location: "New York",
        },
      };
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: #42b983;
    font-family: Arial, sans-serif;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 5px;
    background-color: #f9f9f9;
    margin: 5px 0;
    border-radius: 5px;
  }
  </style>
  