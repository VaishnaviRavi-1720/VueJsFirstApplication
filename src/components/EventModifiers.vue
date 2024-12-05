<template>
    <div>
      <h1>Vue Event Modifiers Example</h1>
      <form @submit.prevent="submitForm">
        <label for="name">Name: </label>
        <input id="name" v-model="name" type="text" />
        <button type="submit">Submit</button>
      </form>
      <p @click.stop="incrementCounter">Click me to increment the counter without propagating: {{ counter }}</p>
      <div @click.capture="captureEvent">Outer Div
        <div @click="innerEvent">Inner Div</div>
      </div>
      <button @click.once="showAlert">Click me once</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "EventModifiers",
    data() {
      return {
        name: "",
        counter: 0,
      };
    },
    methods: {
      submitForm() {
        alert(`Form submitted with name: ${this.name}`);
      },
      incrementCounter() {
        this.counter++;
      },
      captureEvent() {
        alert("Outer div event captured before inner div!");
      },
      innerEvent() {
        alert("Inner div clicked!");
      },
      showAlert() {
        alert("This alert will only appear once.");
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #16a085;
  }
  button {
    background-color: #2980b9;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    margin-top: 10px;
  }
  button:hover {
    background-color: #1c5980;
  }
  form {
    margin-bottom: 20px;
  }
  div {
    margin-top: 10px;
    border: 1px solid #7f8c8d;
    padding: 10px;
  }
  </style>
  