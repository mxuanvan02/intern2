import React from 'react'
import './index.css';
import Article from '../article';

const Articles = ({ articles }) => {

  return (
    <div className="group-news-other">
      <ul className="other-news" id="list-latest-news">
        {articles.map((article, i) => (<Article key={i} article={article} />))}
      </ul>
    </div>
  )
}

export default Articles;