import React from "react";

const FilterSortBar = ({ isGreased, setIsGreased, sortBy, setSortBy }) => {
  return (
    <div>
      <label htmlFor="greased-checkbox">
        Greased Only:
        <input
          type="checkbox"
          id="greased-checkbox"
          checked={isGreased}
          onChange={() => setIsGreased((prev) => !prev)}
        />
      </label>
      <label htmlFor="sort-options">
        Sort By:
        <select
          id="sort-options"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
};

export default FilterSortBar;