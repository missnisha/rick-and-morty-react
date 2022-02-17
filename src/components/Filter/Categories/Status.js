import React from "react";
import FilterBtn from "../FilterBtn";

const Status = ({ setStatus, setPageNumber }) => {
  const status = ["Alive", "Dead", "Unknown"];


  return (
    <div>
      <label className="dropdown">
        <div className="dd-button">Status</div>
        <input type="checkbox" className="dd-input" />
        <ul className="dd-menu">
          {status.map((item, index) => (
            <li key={index}>
              <FilterBtn
                index={index}
                name="status"
                task={setStatus}
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

export default Status;
