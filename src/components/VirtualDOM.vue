<template>
    <div>
      <h2>Virtual DOM Example</h2>
      <p>Count: {{ count }}</p>
      <button @click="incrementCount">Increment Count</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "VirtualDOMExample",
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      incrementCount() {
        // Simulate an efficient Virtual DOM update
        this.count += 1;
        console.log("Count incremented and Virtual DOM re-rendered only the necessary part.");
      },
    },
  };
  </script>
  
  <style>
  h2 {
    color: #2c3e50;
  }
  button {
    margin-top: 10px;
  }
  </style>
  