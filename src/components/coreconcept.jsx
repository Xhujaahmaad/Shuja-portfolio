import { useState } from "react";
import { example } from "../data.js";

function Tabbutton({ label, onSelect, isactivetab }) {
  return (
    <div className="tab-button">
      <button
        onClick={onSelect}
        className={`tab-button-item ${isactivetab ? "active" : ""}`}
      >
        {label}
      </button>
    </div>
  );
}

function CoreConcept() {
  const [selectedTopic, setSelectedTopic] = useState("Component");

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div className="core-concept">
      <Tabbutton
        isactivetab={selectedTopic === "Component"}
        label="Component"
        onSelect={() => handleClick("Component")}
      />

      <Tabbutton
        isactivetab={selectedTopic === "Jsx"}
        label="Jsx"
        onSelect={() => handleClick("Jsx")}
      />

      <Tabbutton
        isactivetab={selectedTopic === "Props"}
        label="Props"
        onSelect={() => handleClick("Props")}
      />

      <Tabbutton
        isactivetab={selectedTopic === "State"}
        label="State"
        onSelect={() => handleClick("State")}
      />

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
    </div>
  );
}

export default CoreConcept;
