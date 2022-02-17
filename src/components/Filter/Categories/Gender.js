import React from 'react';
import FilterBtn from "../FilterBtn";

const Gender = ({setGender, setPageNumber}) => {

   const genders = ["female", "male", "genderless", "unknown"];

  return (
    <div>
      <label className="dropdown">
        <div className="dd-button">Gender</div>
        <input type="checkbox" className="dd-input" />
        <ul className="dd-menu">
          {genders.map((item, index) => (
            <li key={index}>
              <FilterBtn
                index={index}
                name="status"
                task={setGender}
                setPageNumber={setPageNumber}
                input={item}
              />
            </li>
          ))}
        </ul>
      </label>
    </div>
  );
}

export default Gender