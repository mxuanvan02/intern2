import React from 'react'
import './index.css';
import { useState, useEffect } from 'react';

const Articles = () => {
  const [articles, setArticles] = useState([])
  var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=5b2a127c4bf1411c8a3de122fd6c7fde"
  const fetchArticles = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }
  useEffect(() => {
    fetchArticles();
  }, []);
  console.log(articles)

  return (
    <div className="group-news-other">
      <ul className="other-news" id="list-latest-news">
        {articles.map((article, i) => 
          <li id="xahoi2023-02-27" key={i}>
            <div className="other-news-item">
              <img src={article.urlToImage} alt={article.title} className="news-img" />
              <div className="other-news-contents">
                <a className="news-title" href={article.url}><b>{article.title}</b></a>
                <p className="news-author">{article.author}</p>
                <time className="news-date" dateTime={article.publishedAt}>{article.publishedAt}</time>
                <p className="short-contents-other">{article.content}</p>
              </div>
            </div>
            <p className="short-contents-other-mobile">{article.content}<hr className="hr-mobile" /></p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Articles;