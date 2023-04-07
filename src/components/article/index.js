import React from 'react'

const Article = ({ article }) => {
  return (
      <li>
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
  )
}

export default Article