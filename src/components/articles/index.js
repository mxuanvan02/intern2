import React from 'react'
import './index.css';

const Articles = ({ articles }) => {

  return (
    <div className="group-news-other">
      <ul className="other-news" id="list-latest-news">
        {/* {articles.map((article, i) => (<Article key={i} article={article} />))} */}
        {articles.map((article, i) => (
          <li key={i}>
            <div className="other-news-item">
              <img src={article.urlToImage} alt={article.title} className="news-img" />
              <div className="other-news-contents">
                <a className="news-title" href={article.url}><b>{article.title}</b></a>
                <p className="news-author">{article.author}</p>
                <time className="news-date" dateTime={article.publishedAt}>{article.publishedAt}</time>
                <p className="short-contents-other">{article.content}</p>
              </div>
            </div>
            {/* <p className="short-contents-other-mobile">{article.content}<hr className="hr-mobile" /></p> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Articles;