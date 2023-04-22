import React from "react";
import NoImage from "../../images/no_image.jpg";
import { useArticlesFetch } from "../../hooks/useArticlesFetch";
import Loading from "../Loading";
import { TimeFilter } from "../TimeFilter";
import { convTime } from "../../helpers";

const Articles = () => {
  const {
    state,
    loading,
    error,
    page,
    pageRight,
    pageLeft,
    timeFilter,
    time,
    handleFilterParam,
    filterParam,
  } = useArticlesFetch();
  if (loading) return <Loading />;
  if (error) return <div>Something went wrong...</div>;
  return (
    <>
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
          <option value="Apple">Apple</option>
          <option value="Tesla">Tesla</option>
          <option value="Bitcoin">Bitcoin</option>
          <option value="Nasa">Nasa</option>
        </select>
      </div>
      <TimeFilter timeFilter={timeFilter} />
      <div className="group-news-other">
        <ul className="other-news" id="list-latest-news">
          {time ? state.filteredResults.map((article, i) => {
            var cvt = convTime(article.publishedAt);
            return (
              <li key={i}>
                <div className="other-news-item">
                  {article.urlToImage ? (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="news-img"
                    />
                  ) : (
                    <img
                      src={NoImage}
                      alt={article.title}
                      className="news-img"
                    />
                  )}
                  <div className="other-news-contents">
                    <a className="news-title" href={article.url}>
                      <b>{article.title}</b>
                    </a>
                    <p className="news-author">{article.source.name}</p>
                    <time className="news-date">
                      {cvt.time} {cvt.str} ago.
                    </time>
                    <p className="short-contents-other">
                      {article.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          }): null}
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
              disabled={page * 10 > state.totalPage ? true : false}
              onClick={pageRight}
            >
              &#62;
            </button>
          </div>
        </ul>

        <div className="news-bar">
          <h2 className="title-news-bar">Du lịch</h2>
          <div className="news-item flex-container">
            <img
              src="images/nuocngoaixintien.png"
              alt="người nước ngoài xin tiền để đi du lịch"
              className="news-img"
            />
            <a className="news-title" href="details-page.html">
              Hai người nước ngoài đứng trên đường phố Đà Nẵng xin 'cứu giúp'
            </a>
            <p className="news-author">Vienamnet</p>
            <time className="news-date" datetime="2023-02-23T14:00:00.000Z">
              2023-02-23T14:00:00.000Z
            </time>
          </div>
          <div className="crossbar"></div>
          <h2 className="title-news-bar">Giải trí</h2>
          <div className="news-item flex-container">
            <img
              src="images/bangkieu.png"
              alt="ca sĩ Bằng Kiều"
              className="news-img"
            />
            <a className="news-title" href="details-page.html">
              Bằng Kiều: 'Khán giả của tôi đều là người giàu'
            </a>
            <p className="news-author">vnexpress</p>
            <time className="news-date" datetime="2023-02-22T14:00:00.000Z">
              2023-02-22T14:00:00.000Z
            </time>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
