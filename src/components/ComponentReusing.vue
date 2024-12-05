<template>
    <div class="card">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <button @click="handleClick">{{ buttonText }}</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "ComponentReusing",
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      buttonText: {
        type: String,
        default: "Click Me",
      },
    },
    methods: {
      handleClick() {
        alert(`Button clicked in the "${this.title}" card!`);
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  h2 {
    color: #2c3e50;
  }
  p {
    color: #34495e;
    margin: 8px 0;
  }
  button {
    padding: 8px 16px;
    color: #fff;
    background-color: #3498db;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #2980b9;
  }
  </style>
  