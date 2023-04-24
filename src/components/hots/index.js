import React from "react";
import Fire from "../../images/fire.png";
import { useHotsFetch } from "../../hooks/useHotsFetch";
import Loading from "../Loading";
import { convTime } from "../../helpers";

const Hots = () => {
  const { state, loading, error, page, pageRight, pageLeft } = useHotsFetch();
  if (loading) return <Loading />;
  if (error) return <div>Something went wrong...</div>;
  return (
    <div className="hot-news">
      <div className="hot-news-label">
        <img src={Fire} alt="fire" className="hot-news-icon" />
        SỰ KIỆN NÓNG
      </div>
      
      <div className="hot-news-list flex-container flex-row">
        {state.results.map((hot, i) => {
          var cvt = convTime(hot.publishedAt);
          return (
          <div className="news-item flex-container" key={i}>
            <img src={hot.urlToImage} alt={hot.title} className="news-img" />
            <a className="news-title" href={hot.url}>
              {hot.title}
            </a>
            <p className="news-author">{hot.source.name}</p>
            <time className="news-date" dateTime={cvt.time}>
              {cvt.time} {cvt.str}
            </time>
          </div>
        )})}
      </div>
      <div className="text-center">
        <button
          className="load-more"
          disabled={page == 1 ? true : false}
          onClick={pageLeft}
        >
          &#60;
        </button>
        <button
          className="load-more"
          disabled={page * 4 > state.totalPage ? true : false}
          onClick={pageRight}
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Hots;
