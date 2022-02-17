import React from "react";
import Gender from "./Categories/Gender";
import Species from "./Categories/Species";
import Status from "./Categories/Status";

const Filter = ({
  pageNumber,
  setPageNumber,
  setStatus,
  setGender,
  setSpecies,
}) => {
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);
    window.location.reload(false);
  };
  return (
      <div className="filters">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
        <div onClick={clear} className="filters__clear">
          Clear Filters
        </div>
      </div>
  );
};

export default Filter;
