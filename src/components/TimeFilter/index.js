import React from 'react'

export const TimeFilter = ({ timeFilter, value}) => {
  return (
    <div className="filter-date">
      <p>Date: </p>
      <input type="text" placeholder="yyyy-mm-dd" defaultValue={value} onChange={e => timeFilter(e.target.value)} />
    </div>
  );
};
