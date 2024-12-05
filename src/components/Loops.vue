<template>
    <div>
      <h1>Vue.js Loops Example with Electronic Devices</h1>
      
      <h2>1. List of Electronic Devices</h2>
      <ul>
        <li v-for="(device, index) in devices" :key="index">
          {{ index + 1 }}. {{ device.name }} - {{ device.type }}
        </li>
      </ul>
      
      <h2>2. Devices Priced Above $500</h2>
      <ul>
        <li v-for="device in expensiveDevices" :key="device.name">
          {{ device.name }} - ${{ device.price }}
        </li>
      </ul>
      
      <h2>3. Loop Through Device Types</h2>
      <ul>
        <li v-for="(type, index) in deviceTypes" :key="index">
          {{ index + 1 }}. {{ type }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "Loops",
    data() {
      return {
        devices: [
          { name: "Laptop", type: "Computer", price: 1200 },
          { name: "Smartphone", type: "Mobile", price: 800 },
          { name: "Tablet", type: "Mobile", price: 450 },
          { name: "Smart TV", type: "Television", price: 1500 },
          { name: "Bluetooth Speaker", type: "Audio", price: 100 },
        ],
      };
    },
    computed: {
      expensiveDevices() {
        return this.devices.filter((device) => device.price > 500);
      },
      deviceTypes() {
        return [...new Set(this.devices.map((device) => device.type))];
      },
    },
  };
  </script>
  
  <style scoped>
  h1, h2 {
    color: #2c3e50;
  }
  ul {
    margin: 10px 0;
    padding: 0;
    list-style-type: none;
  }
  li {
    padding: 5px 0;
    color: #34495e;
  }
  </style>
  