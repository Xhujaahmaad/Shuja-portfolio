import { useState } from "react";
import Fiveyear from "./shuja";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";




function Header() {
  return (
     <>
    <header>
      <div className="wrapper">
        <div className="main-header">
          <div className="developer-name">
            <h1>Shuja Ahmad</h1>
          </div>
          <div className="menu-item">
            <ul>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}



function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <Header/>
     <Fiveyear />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

