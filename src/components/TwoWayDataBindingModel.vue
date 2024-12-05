<template>
    <div>
      <h1>Two-Way Data Binding Example</h1>
      
      <label for="name">Enter Your Name:</label>
      <input id="name" v-model="name" placeholder="Your Name" />
      <p>Your name is: {{ name }}</p>
      
      <label for="email">Enter Your Email:</label>
      <input id="email" v-model="email" placeholder="Your Email" />
      <p>Your email is: {{ email }}</p>
      
      <label for="age">Enter Your Age:</label>
      <input id="age" type="number" v-model.number="age" placeholder="Your Age" />
      <p>Your age is: {{ age }}</p>
      
      <div v-if="formComplete">
        <h2>Form Summary</h2>
        <p>Name: {{ name }}</p>
        <p>Email: {{ email }}</p>
        <p>Age: {{ age }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TwoWayDataBindingModel",
    data() {
      return {
        name: "",
        email: "",
        age: null,
      };
    },
    computed: {
      formComplete() {
        return this.name && this.email && this.age;
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #2c3e50;
  }
  label {
    display: block;
    margin-top: 10px;
  }
  input {
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    width: 100%;
    max-width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  p {
    margin: 5px 0;
    color: #34495e;
  }
  </style>
  