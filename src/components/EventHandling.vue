<template>
    <div id="event-handling">
      <h2>Event Handling in Vue.js</h2>
  
      <!-- Inline handler -->
      <button v-on:click="incrementCount">Button clicked {{ count }} times</button>
  
      <!-- Method handler -->
      <button @click="showAlert">Show Alert</button>
  
      <!-- Method handler with arguments -->
      <button @click="logMessage('Hello from Vue.js!')">Log Message</button>
  
      <!-- Demonstration of v-bind and v-model -->
      <input
        type="text"
        v-model="inputValue"
        :placeholder="placeholderText"
      />
      <p>You typed: {{ inputValue }}</p>
  
      <!-- Conditional rendering with v-if and v-else -->
      <p v-if="count > 5">You've clicked the button more than 5 times!</p>
      <p v-else>Keep clicking to see the magic!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "EventHandling",
    data() {
      return {
        count: 0,
        inputValue: "",
        placeholderText: "Type something...",
      };
    },
    methods: {
      // Inline handler example
      incrementCount() {
        this.count++;
      },
      // Method handler example
      showAlert() {
        alert("Button clicked!");
      },
      // Method handler with custom argument
      logMessage(message) {
        console.log(message);
      },
    },
  };
  </script>
  
  <style scoped>
  #event-handling {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  button {
    margin: 10px;
    padding: 10px 15px;
    border: none;
    background-color: #42b983;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #369b73;
  }
  
  input {
    margin-top: 15px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 80%;
  }
  </style>
  