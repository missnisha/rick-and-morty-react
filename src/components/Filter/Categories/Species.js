import React from 'react';
import FilterBtn from "../FilterBtn";

const Species = ({ setSpecies, setPageNumber }) => {
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <div>
      <label className="dropdown">
        <div className="dd-button">Species</div>
        <input type="checkbox" className="dd-input" />
        <ul className="dd-menu">
          {species.map((item, index) => (
            <li key={index}>
              <FilterBtn
                index={index}
                name="status"
                task={setSpecies}
                setPageNumber={setPageNumber}
                input={item}
              />
            </li>
          ))}
        </ul>
      </label>
    </div>
  );
};

export default Species