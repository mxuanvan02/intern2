import React from "react";

const FilterBox = ({ filterParam, handleFilterParam }) => (
  <div className="filter-box">
    <p>Lọc theo thể loại: </p>
    <select
      id="filter-select"
      defaultValue={filterParam}
      onChange={(e) => {
        handleFilterParam(e.target.value);
      }}
    >
      <option value="All">All</option>
      <option value="World">World</option>
      <option value="Politics">Politics</option>
      <option value="Business">Business</option>
      <option value="Opinion">Opinion</option>
      <option value="Health">Health</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Style">Style</option>
      <option value="Travel">Travel</option>
      <option value="Sports">Sports</option>
      <option value="Video">Video</option>
    </select>
  </div>
);
export default FilterBox;