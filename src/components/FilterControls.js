import React, { useState } from "react";
import original from "../images/original.png";
import blur from "../images/blur.png";
import sepia from "../images/sepia.png";
import vintage from "../images/vintage.png";
import kodachrome from "../images/kodachrome.png";
import technicolor from "../images/technicolor.png";
import addButton from "../images/add.png";
import "../App.css";

const FilterControls = ({ addFilter, openFile, addFilterStrength, isBlur }) => {
  const [rangeval, setRangeval] = useState(0.5);

  const filterStrengthChanged = e => {
    setRangeval(e.target.value);
    addFilterStrength(e.target.value);
  };
  return (
    <div className="filters " id="filters">
      <img
        alt="original"
        onClick={() => addFilter("original")}
        src={original}
        className="filterButton"
      />

      <img
        alt="blur"
        onClick={() => addFilter("blur")}
        src={blur}
        className="filterButton"
      />

      <img
        alt="sepia"
        onClick={() => addFilter("sepia")}
        src={sepia}
        className="filterButton"
      />

      <img
        alt="vintage"
        onClick={() => addFilter("vintage")}
        src={vintage}
        className="filterButton"
      />

      <img
        alt="technicolor"
        onClick={() => addFilter("technicolor")}
        src={technicolor}
        className="filterButton"
      />

      <img
        alt="kodachrome"
        onClick={() => addFilter("kodachrome")}
        src={kodachrome}
        className="filterButton"
      />

      <img
        alt="add"
        onClick={openFile}
        src={addButton}
        className="filterButton"
      />

      {isBlur ? (
        <div id="filterStrength" className="filterStrength">
          <input
            type="range"
            className="custom-range"
            value={rangeval}
            step="0.1"
            min="0.1"
            max="1.0"
            onChange={event => filterStrengthChanged(event)}
          />
          <h4>Filter Strength {rangeval}</h4>
        </div>
      ) : null}
    </div>
  );
};

export default FilterControls;
