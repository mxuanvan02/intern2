import React, {useState, useEffect} from "react";

const TimeFilter = () => {
  return (
    <div className="filter-date">
      <p>From: </p>
      <input type="text" placeholder="yyyy-mm-dd" />
      <p>To: </p>
      <input type="text" placeholder="yyyy-mm-dd" />
    </div>
  );
};
