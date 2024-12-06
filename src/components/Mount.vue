<template>
    <div>
      <h2>Mounted Hook Example</h2>
      <p>DOM Manipulation after component is mounted:</p>
      <button @click="changeColor">Change Background Color</button>
      <div ref="colorBox" style="width: 200px; height: 100px; background-color: lightblue; margin-top: 10px;">
        This box changes color
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MountedExample",
    mounted() {
      console.log("Mounted hook called - Component is now mounted.");
    },
    methods: {
      changeColor() {
        // Manipulating the DOM element using ref
        this.$refs.colorBox.style.backgroundColor = "lightgreen";
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
  