import React from 'react'
import Articles from './Articles';
import Hots from './Hots';
import Loading from './Loading';

const Home = ({ articles, hots,
                loadingHots, errorHots,
                loadingArticles, errorArticles,
                pageRightHots, pageLeftHots,
                pageRightArticles, pageLeftArticles }) => {
  if (errorHots) return <div>Something went wrong in hots...</div>;
  if (errorArticles) return <div>Something went wrong in articles...</div>;
  return (
    <div className="body-contents">
      {loadingHots ? <Loading /> : (
        
      <>
        <Hots hots={hots} />
        <div className='text-center'>
        <button className="load-more" onClick={pageLeftHots}>&#60;</button>
        <button className="load-more" onClick={pageRightHots}>&#62;</button>
        </div>
      </>
      )}
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
      {loadingArticles ? <Loading /> : (
        <>
          <Articles articles={articles} />
          <div className='text-center'>
            <button className="load-more" onClick={pageLeftArticles}>&#60;</button>
            <button className="load-more" onClick={pageRightArticles}>&#62;</button>
          </div>
        </>
      )}
      
      
    </div>

  )
}

export default Home;