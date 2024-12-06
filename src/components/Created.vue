<template>
    <div>
      <h2>Created Hook Example</h2>
      <p>Data loaded during the created lifecycle hook:</p>
      <ul>
        <li v-for="(user, index) in users" :key="index">
          {{ user.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "CreatedExample",
    data() {
      return {
        users: [],
      };
    },
    created() {
      // Simulating an API call to fetch user data
      console.log("Created hook called - Fetching data...");
      this.users = [
        { name: "John Doe" },
        { name: "Jane Smith" },
        { name: "Alice Brown" },
      ];
    },
  };
  </script>
  
  <style>
  h2 {
    color: #2c3e50;
  }
  </style>
  