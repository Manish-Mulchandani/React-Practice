const heading = React.createElement(
  "h1",
  { id: "title" },
  "Hello World by React"
);
const heading2 = React.createElement("h2", {}, "Hello World by React2");
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
