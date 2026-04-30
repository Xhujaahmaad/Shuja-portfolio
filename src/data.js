export const example = {
  Component: {
    title: "React Components",
    description:
      "Components let you split the UI into independent, reusable pieces.",
    summary:
      "Think of a component like a custom HTML tag. You create it once, then use it many times in your app.",
    points: [
      "A component is just a JavaScript function.",
      "The function must return JSX.",
      "Component names should start with a capital letter.",
      "Components help keep your code clean and reusable.",
    ],
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}

function App() {
  return <Welcome />;
}
`,
  },

  Jsx: {
    title: "JSX in React",
    description: "JSX allows you to write HTML-like syntax inside JavaScript.",
    summary:
      "JSX looks like HTML, but it is actually JavaScript. React converts it into real UI elements.",
    points: [
      "JSX must return one parent element.",
      "Use className instead of class.",
      "Use curly braces {} to write JavaScript inside JSX.",
      "JSX makes React UI easier to read.",
    ],
    code: `
const userName = "Shuja";

function App() {
  return (
    <div>
      <h1>Hello JSX!</h1>
      <p>Welcome, {userName}</p>
    </div>
  );
}
`,
  },

  Props: {
    title: "React Props",
    description: "Props are used to pass data from parent to child components.",
    summary:
      "Props are like function arguments. They let a parent component send information to a child component.",
    points: [
      "Props are read-only.",
      "Props make components reusable.",
      "You pass props like HTML attributes.",
      "The child component receives props as an object.",
    ],
    code: `
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}

function App() {
  return <Greeting name="Shuja" />;
}
`,
  },

  State: {
    title: "React State",
    description: "State allows components to manage dynamic and changing data.",
    summary:
      "State is used when something on the screen needs to change, like a counter, input value, menu, or active tab.",
    points: [
      "State is created with useState.",
      "Changing state re-renders the component.",
      "Never update state directly.",
      "Use the setter function to update state.",
    ],
    code: `
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
`,
  },
};
