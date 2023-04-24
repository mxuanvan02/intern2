import React from "react";
import NoImage from "../../images/no_image.jpg";
import { useArticlesFetch } from "../../hooks/useArticlesFetch";
import Loading from "../Loading";
import { TimeFilter } from "../TimeFilter";
import { convTime } from "../../helpers";
import NotFound from "../NotFound";
import FilterBox from "../FilterBox";

const Articles = () => {
  const {
    state,
    loading,
    error,
    page,
    pageRight,
    pageLeft,
    time,
    timeFilter,
    handleFilterParam,
    filterParam,
  } = useArticlesFetch();
  if (loading) return <Loading />;
  if (error) return <div>Something went wrong...</div>;
  return (
    <>
      <FilterBox filterParam={filterParam} handleFilterParam={handleFilterParam} />
      <TimeFilter timeFilter={timeFilter} value={time} />
      <div className="group-news-other">
        <ul className="other-news" id="list-latest-news">
          {state.results ? state.results.map((article, i) => {
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
                      {cvt.time} {cvt.str}
                    </time>
                    <p className="short-contents-other">
                      {article.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          }) : <NotFound />}
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
      </div>
    </>
  );
};

export default Articles;
