import React from "react";

const FilterBtn = ({ input, task, setPageNumber, index, name }) => {
  return (
    <div className="form__check">
      <input
        className="check__input"
        type="radio"
        name={name}
        id={`${name}-${index}`}
      />
      <label
        onClick={(x) => {
          task(input);
          setPageNumber(1);
        }}
        className="check__label"
        htmlFor={`${name}-${index}`}
      >
        {input}
      </label>
    </div>
  );
};

export default FilterBtn;
