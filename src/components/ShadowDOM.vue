<template>
    <div>
      <h2>Shadow DOM Example</h2>
      <div ref="shadowContainer"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ShadowDOMExample",
    mounted() {
      const container = this.$refs.shadowContainer;
  
      // Create a shadow root
      const shadowRoot = container.attachShadow({ mode: "open" });
  
      // Add content to the shadow root
      const shadowContent = document.createElement("div");
      shadowContent.textContent = "This is inside the Shadow DOM.";
      shadowContent.style.color = "blue";
      shadowContent.style.fontWeight = "bold";
  
      shadowRoot.appendChild(shadowContent);
  
      // Add global DOM content for contrast
      const globalContent = document.createElement("div");
      globalContent.textContent = "This is in the global DOM.";
      globalContent.style.color = "red";
  
      container.appendChild(globalContent);
    },
  };
  </script>
  
  <style>
  h2 {
    color: #2c3e50;
  }
  </style>
  