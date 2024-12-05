<template>
    <div>
      <h1>List Rendering Example</h1>
      <h2>Electronic Devices</h2>
      <ul>
        <li v-for="(device, index) in devices" :key="index">
          {{ device }}
        </li>
      </ul>
  
      <h2>Device Details</h2>
      <ul>
        <li v-for="(value, key) in deviceDetails" :key="key">
          {{ key }}: {{ value }}
        </li>
      </ul>
  
      <h2>Top 3 Devices</h2>
      <ul>
        <li v-for="(device, index) in devices.slice(0, 3)" :key="index">
          {{ device }}
        </li>
      </ul>
  
      <h2>Reversed List</h2>
      <ul>
        <li v-for="(device, index) in devicesReversed" :key="index">
          {{ device }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "ListRendering",
    data() {
      return {
        devices: ["Laptop", "Smartphone", "Tablet", "Smartwatch", "Gaming Console"],
        deviceDetails: {
          brand: "Apple",
          model: "MacBook Pro",
          year: 2024,
        },
      };
    },
    computed: {
      devicesReversed() {
        return [...this.devices].reverse();
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #2c3e50;
  }
  h2 {
    color: #34495e;
    margin-top: 20px;
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
  