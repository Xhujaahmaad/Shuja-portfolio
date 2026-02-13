import Header from "./components/header.jsx";
import Fiveyear from "./shuja";
import MySlider from "./conceptprops";
import "./App.css";
import Tabbutton from "./components/Tabbutton.jsx";
import SplashCursor from "./components/SplashCursor.jsx";
import ScrollReveal from "./components/Scrollreveal.jsx";
import { useState } from "react";
import { example } from "./data.js";
// import someIcon from './assets/shopify.svg';
// const myCustomData = [
//   { image: someIcon, title: "Mobile Apps", description: "iOS and Android" }
// ];

function App() {
  let [selectedTopic, setselectedtopic] = useState("Component");
  // let [selectedTopic, setselectedtopic] = useState();
  function handleClick(selectedButton) {
    // console.log(selectedButton);
    setselectedtopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <>
      <SplashCursor />
      <main>
        <Header />
      </main>
      <section className="page-width">
        <Fiveyear />
      </section>
      <section className="page-width">
        <MySlider />
      </section>
      <section className="page-width">
        <Tabbutton isactivetab={selectedTopic === "Component"} label="Component" onSelect={() => handleClick("Component")}>
          Component
        </Tabbutton>
        <Tabbutton isactivetab={ selectedTopic === "Jsx"} label="Jsx" onSelect={() => handleClick("Jsx")}>
          Jsx
        </Tabbutton>
        <Tabbutton isactivetab={ selectedTopic === "Props"} label="Props" onSelect={() => handleClick("Props")}>
          Props
        </Tabbutton>
        <Tabbutton isactivetab={ selectedTopic === "state"} label="state" onSelect={() => handleClick("state")}>
          state
        </Tabbutton>

        {/* {selectedTopic} */}
        {!selectedTopic ? (
          <p>Please select a Top </p>
        ) : (
          <div className="tabconent" id="tab-content">
            <h3>{example[selectedTopic].title}</h3>
            <p>{example[selectedTopic].description}</p>
            <pre>
              {" "}
              <code>{example[selectedTopic].code}</code>{" "}
            </pre>
          </div>
        )}

        {/* <Tabbutton label="React">React</Tabbutton>
        <Tabbutton label="WordPress">WordPress</Tabbutton> */}
      </section>

      {/* <section className="page-width">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={false}
          baseRotation={10}
          blurStrength={5}
        >
          When does a man die? When he is hit by a bullet? No! When he suffers a
          disease? No! When he ate a soup made out of a poisonous mushroom? No!
          A man dies when he is forgotten!
        </ScrollReveal>
      </section> */}

      {/* <section className="page-width">
        <MySlider title="My Services" />
      </section> */}

      {/* <section className="page-width">
        <MySlider slides={myCustomData} />
      </section> */}
    </>
  );
}

export default App;
