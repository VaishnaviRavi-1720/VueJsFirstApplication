<template>
    <div>
      <h1>Range of Numbers</h1>
      <ul>
        <li v-for="number in rangeLimit" :key="number">
          Number: {{ number }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "RenderingVForWithRange",
    data() {
      return {
        rangeLimit: 10,
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #34495e;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    background-color: #ecf0f1;
    margin: 8px 0;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
  }
  </style>
  