<template>
    <div>
      <h1>Vue DOM Manipulation Example</h1>
      <button @click="addParagraph">Add Paragraph</button>
      <div ref="contentArea">
        <p>Existing paragraph inside content area.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DocumentObjectModel",
    methods: {
      addParagraph() {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = "This is a dynamically added paragraph.";
        newParagraph.style.color = "#e74c3c";
        this.$refs.contentArea.appendChild(newParagraph);
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #2c3e50;
  }
  button {
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    margin-bottom: 15px;
  }
  button:hover {
    background-color: #1e8449;
  }
  div {
    border: 1px solid #95a5a6;
    padding: 15px;
    margin-top: 15px;
  }
  </style>
  