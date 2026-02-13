export const example = {
  Component: {
    title: "React Components",
    description: "Components let you split the UI into independent, reusable pieces.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}
`
  },

  Jsx: {
    title: "JSX in React",
    description: "JSX allows you to write HTML-like syntax inside JavaScript.",
    code: `
const element = <h1>Hello JSX!</h1>;
`
  },

  Props: {
    title: "React Props",
    description: "Props are used to pass data from parent to child components.",
    code: `
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}

<Greeting name="Shuja" />
`
  },

  state: {
    title: "React State",
    description: "State allows components to manage dynamic and changing data.",
    code: `
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
`
  }
};
