<template>
    <li>
      <p>{{ task }}</p>
    </li>
  </template>
  
  <script>
  export default {
    name: "TodoItem",
    props: {
      task: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  li {
    background: #f1f1f1;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
  }
  p {
    margin: 0;
    font-size: 18px;
    color: #2c3e50;
  }
  </style>
  