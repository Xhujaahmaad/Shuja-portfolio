//  This is the tab component how i can use the ButtonContainer prop to change the
//  container element for the buttons from a div to a nav or any other element?

import { useState } from "react";
import { example } from "../data.js";

function Tabs({ children, buttons, ButtonContainer = "menu" }) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}

function TabButton({ label, onSelect, isActiveTab }) {
  return (
    <div className="tab-button">
      <button
        onClick={onSelect}
        className={`tab-button-item ${isActiveTab ? "isactive" : ""}`}
      >
        {label}
      </button>
    </div>
  );
}

export default function CoreConcept() {
  const [selectedTopic, setSelectedTopic] = useState("Component");

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div className="core-concept">
      <Tabs
        ButtonContainer="nav"
        buttons={
          <>
            <TabButton
              isActiveTab={selectedTopic === "Component"}
              label="Component"
              onSelect={() => handleClick("Component")}
            />

            <TabButton
              isActiveTab={selectedTopic === "Jsx"}
              label="Jsx"
              onSelect={() => handleClick("Jsx")}
            />

            <TabButton
              isActiveTab={selectedTopic === "Props"}
              label="Props"
              onSelect={() => handleClick("Props")}
            />

            <TabButton
              isActiveTab={selectedTopic === "State"}
              label="State"
              onSelect={() => handleClick("State")}
            />
          </>
        }
      >
        <div className="tabcontent" id="tab-content">
          <h3>{example[selectedTopic].title}</h3>
          <p>{example[selectedTopic].description}</p>
          <p>{example[selectedTopic].summary}</p>

          <ul>
            {example[selectedTopic].points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <pre>
            <code>{example[selectedTopic].code}</code>
          </pre>
        </div>
      </Tabs>
    </div>
  );
}
