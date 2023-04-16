import React from 'react'
import Articles from './Articles';
import Hots from './Hots';

const Home = () => {
  return (
    <div className="body-contents">
        <Hots />
      <div className="filter-box">
        <p>Lọc theo thể loại: </p>
        <select id="filter-select" onchange="filterFunction()">
          <option value="tatca">Tất cả</option>
          <option value="giaitri">Giải trí</option>
          <option value="doisong">Đời sống</option>
          <option value="xahoi">Xã hội</option>
          <option value="dep">Đẹp</option>
          <option value="suckhoe">Sức khoẻ</option>
          <option value="thegioi">Thế giới</option>
          <option value="muasam">Mua sắm</option>
          <option value="giaoduc">Giáo dục</option>
          <option value="thethao">Thể thao</option>
        </select>
      </div>
      <div className="filter-date">
        <p>Lọc theo thời gian: </p>
        <input type="text" placeholder="yyyy-mm-dd" id="filter-date" onKeyUp="filterDate()" />
      </div>
          <Articles />
    </div>

  )
}

export default Home;