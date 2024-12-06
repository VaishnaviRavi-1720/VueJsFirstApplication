<script setup>
import { ref } from "vue";

// Declare variables and functions for Composition API
const message = ref("Click the button to toggle the message!");
const messages = ["Welcome to Vue.js!", "Enjoy learning Composition API!"];

// Function to toggle the message
const toggleMessage = () => {
  message.value =
    message.value === messages[0] ? messages[1] : messages[0];
};
</script>

<template>
  <div id="composition-api-demo">
    <h2>Composition API with Templates</h2>
    <p>{{ message }}</p>
    <button @click="toggleMessage">Toggle Message</button>
  </div>
</template>

<style scoped>
#composition-api-demo {
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f5f5f5;
  text-align: center;
}
h2 {
  color: #42b983;
  margin-bottom: 10px;
}
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #369b73;
}
</style>
