<template>
    <div>
      <h1>List Rendering with Mutation Methods</h1>
      
      <h2>Original List</h2>
      <ul>
        <li v-for="(device, index) in devices" :key="index">
          {{ device }}
        </li>
      </ul>
  
      <button @click="sortDevices">Sort Devices</button>
      <button @click="reverseDevices">Reverse Devices</button>
      <button @click="addDevice">Add Device</button>
      <button @click="removeLastDevice">Remove Last Device</button>
      
      <h2>Updated List</h2>
      <ul>
        <li v-for="(device, index) in devices" :key="index">
          {{ device }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "ListRenderingMutationMethods",
    data() {
      return {
        devices: ["Laptop", "Smartphone", "Tablet", "Smartwatch", "Gaming Console"],
      };
    },
    methods: {
      sortDevices() {
        this.devices.sort();
      },
      reverseDevices() {
        this.devices.reverse();
      },
      addDevice() {
        this.devices.push("Smart TV");
      },
      removeLastDevice() {
        this.devices.pop();
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #2c3e50;
  }
  button {
    margin: 10px;
    padding: 10px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #2980b9;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    background: #ecf0f1;
    margin: 5px 0;
    padding: 10px;
    border-radius: 4px;
  }
  </style>
  