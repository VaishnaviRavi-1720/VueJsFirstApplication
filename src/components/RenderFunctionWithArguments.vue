<script>
export default {
  name: "RenderFunctionWithArguments",
  render(h) {
    // Creating a container div
    return h(
      "div", // Element type
      { attrs: { id: "render-function-demo" } }, // Attributes (id, class, etc.)
      [
        // Adding an h2 element
        h("h2", { style: { color: "#42b983" } }, "Render Function Example"),
        // Adding a paragraph element
        h("p", "This content is rendered programmatically using Vue's h() function."),
        // Adding an unordered list with dynamic content
        h(
          "ul",
          this.items.map((item) =>
            h("li", { key: item }, `Item: ${item}`)
          )
        ),
      ]
    );
  },
  data() {
    return {
      items: ["Vue.js", "JavaScript", "HTML", "CSS"],
    };
  },
};
</script>

<style scoped>
#render-function-demo {
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
h2 {
  margin: 0 0 10px;
}
ul {
  list-style-type: square;
  margin: 10px 0 0;
  padding-left: 20px;
}
li {
  margin: 5px 0;
}
</style>
