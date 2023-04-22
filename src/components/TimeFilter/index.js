import React from 'react'

export const TimeFilter = ({ timeFilter }) => {
  return (
    <div className="filter-date">
      <p>From: </p>
      <input type="text" placeholder="yyyy-mm-dd" onChange={e => timeFilter(e.target.value)} />
    </div>
  );
};
