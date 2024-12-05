<template>
    <div>
      <h1>Vue Methods Example</h1>
      <p>Enter a number to double it: </p>
      <input type="number" v-model="number" />
      <button @click="doubleNumber">Double</button>
      <p v-if="result !== null">Result: {{ result }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Method",
    data() {
      return {
        number: 0,
        result: null,
      };
    },
    methods: {
      doubleNumber() {
        this.result = this.number * 2;
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #8e44ad;
  }
  button {
    background-color: #e67e22;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
  }
  button:hover {
    background-color: #d35400;
  }
  input {
    margin-right: 10px;
    padding: 5px;
  }
  </style>
  